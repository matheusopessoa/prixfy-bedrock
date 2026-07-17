# ==========================================
# BASE: Configuração inicial do pnpm
# ==========================================
FROM node:20-alpine AS base
RUN corepack enable && corepack prepare pnpm@latest --activate
# libc6-compat é necessário para algumas dependências nativas do Next.js
RUN apk add --no-cache libc6-compat

# ==========================================
# ESTÁGIO 1: Dependências (deps)
# ==========================================
FROM base AS deps
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# ==========================================
# ESTÁGIO 2: Builder (Compilação)
# ==========================================
FROM base AS builder
WORKDIR /app
# Traz as dependências instaladas no estágio anterior
COPY --from=deps /app/node_modules ./node_modules
# Copia o resto do código fonte
COPY . .

# Desativa a telemetria do Next.js (boa prática para CI/CD)
ENV NEXT_TELEMETRY_DISABLED=1

# Compila o projeto (isso vai gerar a pasta .next/standalone)
RUN pnpm build

# ==========================================
# ESTÁGIO 3: Runner (Imagem de Produção)
# ==========================================
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Cria um usuário não-root por segurança
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copia a pasta public (imagens, ícones estáticos)
COPY --from=builder /app/public ./public

# Dá permissão para o Next.js criar o cache de páginas renderizadas
RUN mkdir .next
RUN chown nextjs:nodejs .next

# Copiamos apenas os arquivos otimizados e a pasta de estáticos, sem o node_modules gigante
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Muda para o usuário seguro
USER nextjs

EXPOSE 3000
ENV PORT=3000

CMD ["node", "server.js"]