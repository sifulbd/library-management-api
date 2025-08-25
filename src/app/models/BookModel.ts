import { model, Schema } from "mongoose";
import { Genre, IBook } from "../interfaces/book.interface";

const bookSchema = new Schema<IBook>(
    {
        title: {
            type: String,
            required: [true, "Title is required"],
            trim: true,
        },
        author: {
            type: String,
            required: [true, "Author is required"],
            trim: true,
        },
        genre: {
            type: String,
            required: [true, "Genre is required"],
            enum: {
                values: Object.values(Genre),
                message: "Genre must be one of: FICTION, NON_FICTION, SCIENCE, HISTORY, BIOGRAPHY, FANTASY",
            },
        },
        isbn: {
            type: String,
            required: [true, "ISBN is required"],
            unique: true,
            trim: true,
        },
        description: {
            type: String,
            trim: true,
        },
        copies: {
            type: Number,
            required: [true, "Copies is required"],
            min: [0, "Copies must be a non-negative number"],
        },
        available: {
            type: Boolean,
            default: true,
        },
    },
    {
        versionKey: false,
        timestamps: true,
    }
);

bookSchema.methods.updateAvailability = async function (): Promise<void> {
    this.available = this.copies > 0;
    await this.save();
};

bookSchema.statics.findAvailableBooks = function (): Promise<IBook[]> {
    return this.find({ available: true });
};

bookSchema.pre("save", function (next) {
    this.available = this.copies > 0;
    next();
});

bookSchema.post("save", (doc) => {
    console.log(`Book saved: ${doc.title} - Available: ${doc.available}`);
});

export const Book = model("Book", bookSchema);
