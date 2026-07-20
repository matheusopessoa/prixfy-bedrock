import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    // Restrito ao src para que o build compilado em dist/ nunca seja coletado
    // como suíte de testes.
    include: ["src/**/*.{test,spec}.ts"],
  },
});
