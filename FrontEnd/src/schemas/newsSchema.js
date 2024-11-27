import { z } from "zod";

export const newsSchema = z.object({
  title: z
    .string()
    .nonempty({ message: "O título não pode ser vazio" })
    .refine((value) => !/^\s*$/.test(value), {
      message: "O título não pode conter apenas espaços",
    }),
  banner: z
    .string()
    .nonempty({ message: "O link do banner não pode ser vazio" })
    .refine((value) => !/^\s*$/.test(value), {
      message: "O link do banner não pode conter apenas espaços",
    }),
  text: z
    .string()
    .nonempty({ message: "O texto não pode ser vazio" })
    .refine((value) => !/^\s*$/.test(value), {
      message: "O texto não pode conter apenas espaços",
    }),
});
