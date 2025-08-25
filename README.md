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

-   `POST /api/books` - Create a new book
-   `GET /api/books` - Get all books
-   `GET /api/books/:bookId` - Get book by ID
-   `PUT /api/books/:bookId` - Update book
-   `DELETE /api/books/:bookId` - Delete book

### Borrowing

-   `POST /api/borrow` - Borrow a book
-   `GET /api/borrow` - Get borrowed books summary

### Query

-   `filter` - Filter by genre
-   `sort` - Sort order (asc/desc)
-   `sortBy` - Sort field (default: createdAt)
-   `limit` - Number of results (default: 10)
