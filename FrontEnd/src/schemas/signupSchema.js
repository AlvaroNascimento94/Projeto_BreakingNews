import { z } from "zod";
export const signupSchema = z
  .object({
    name: z
      .string()
      .min(3, { message: "Nome deve conter no mínimo 3 caracteres" })
      .transform((data) =>
        data
          .trim()
          .split(" ")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ")
      ),
    email: z.string().email({ message: "Email inválido" }).toLowerCase(),
    password: z
      .string()
      .min(6, { message: "Senha deve conter no mínimo 6 caracteres" }),
    confirmPassword: z
      .string()
      .min(6, { message: "Senha deve conter no mínimo 6 caracteres" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Senhas não coincidem",
    path: ["confirmPassword"],
  });
