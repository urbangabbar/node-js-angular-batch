GET /api/book --> This would get all users
GET /api/book/:bookid -->GET /api/book/123 this would single book

POST /api/book  Help us create new book

PUT /api/book/<bookid> //Update 

DELETE /api/book/<bookid> Delete a book

Books JSON
{
    "id": <book_id>,
    "name": <book_name>
    "author": <author>,
    "price": <price>
}

Book 1:
{
    "id": 1,
    "name": "101 Rules",
    "author": "abc",
    "price": 550
}