# Library Management API with Express, TypeScript & MongoDB

A Library Management System API built with Express.js, TypeScript, and MongoDB.

## Features

-   Add, update, and list books
-   Filter, sort, and limit books by genre and time
-   Borrow books with quantity and due date
-   Summary of borrowed books

## Setup

update `.env` file

install dependencies `npm install`

Run project `npm run dev`

## API Endpoints

### Books

-   `POST /books` - Create a new book
-   `GET /books` - Get all books
-   `GET /books/:bookId` - Get book by ID
-   `PUT /books/:bookId` - Update book
-   `DELETE /books/:bookId` - Delete book

### Borrowing

-   `POST /borrow` - Borrow a book
-   `GET /borrow` - Get borrowed books summary

### Query

-   `filter` - Filter by genre
-   `sort` - Sort order (asc/desc)
-   `sortBy` - Sort field (default: createdAt)
-   `limit` - Number of results (default: 10)

Github: https://github.com/sifulbd/library-management-api
Video: https://www.loom.com/share/c3702f4b198a420fbbf6314958e24497?sid=48c5aa3e-4866-4e08-829f-ab6e26da3bb8
