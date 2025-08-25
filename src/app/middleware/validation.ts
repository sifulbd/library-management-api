import { z } from "zod";

export const bookSchema = z.object({
    title: z.string().trim().min(1, { message: "Title is required" }),
    author: z.string().trim().min(1, { message: "Author is required" }),
    genre: z.enum(["FICTION", "NON_FICTION", "SCIENCE", "HISTORY", "BIOGRAPHY", "FANTASY"], {
        errorMap: () => ({ message: "Genre must be one of: FICTION, NON_FICTION, SCIENCE, HISTORY, BIOGRAPHY, FANTASY" }),
    }),
    isbn: z.string().trim().min(1, { message: "ISBN is required" }),
    copies: z.number().int().nonnegative({ message: "Copies must be a non-negative integer" }),
    description: z.string().trim().optional(),
});

export const partialBookSchema = bookSchema.partial();

export const borrowSchema = z.object({
    book: z.string().refine((val) => /^[a-f\d]{24}$/i.test(val), {
        message: "Valid book ID is required",
    }),
    quantity: z.number().int().min(1, { message: "Quantity must be a positive integer" }),
    dueDate: z.string().refine(
        (val) => {
            const date = new Date(val);
            return !isNaN(date.getTime()) && date > new Date();
        },
        {
            message: "Due date must be in the future and valid ISO format",
        }
    ),
});
