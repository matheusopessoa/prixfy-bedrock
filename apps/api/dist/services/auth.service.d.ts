interface RegisterUserInput {
    email: string;
    password: string;
    name: string;
}
interface PublicUser {
    id: string;
    email: string;
    name: string;
    createdAt: Date;
}
export declare const authService: {
    register({ email, password, name }: RegisterUserInput): Promise<PublicUser>;
};
export {};
//# sourceMappingURL=auth.service.d.ts.map