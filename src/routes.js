const {
  HandlerAddBook,
  HandlerGetAllBook,
  HandlerGetBookById,
  HandlerEditBookById,
  HandlerDeleteBookById,
} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: HandlerAddBook,
  },
  {
    method: 'GET',
    path: '/books',
    handler: HandlerGetAllBook,
  },
  {
    method: 'GET',
    path: '/books/{id}',
    handler: HandlerGetBookById,
  },
  {
    method: 'PUT',
    path: '/books/{id}',
    handler: HandlerEditBookById,
  },
  {
    method: 'DELETE',
    path: '/books/{id}',
    handler: HandlerDeleteBookById,
  },
];

module.exports = routes;
