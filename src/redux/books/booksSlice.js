/* import/no-extraneous-dependencies */
import { v4 as uuidv4 } from 'uuid';

export const ADD_BOOK = 'bookstore/books/ADD_BOOK';
export const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

const initialState = {
  books: [
    {
      id: uuidv4(),
      title: 'The Great Gatsby',
      author: 'John Smith',
      genre: 'Fiction',
    },
    {
      id: uuidv4(),
      title: 'Anna Karenina',
      author: 'Leo Tolstoy',
      genre: 'Fiction',
    },
    {
      id: uuidv4(),
      title: 'The Selfish Gene',
      author: 'Richard Dawkins',
      genre: 'Nonfiction',
    },
  ],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state.books, action.book];
    case REMOVE_BOOK:
      return { ...state, books: state.books.filter((book) => book.id !== action.id) };
    default:
      return state;
  }
};

export const addBook = (book) => ({ type: ADD_BOOK, book });

export const removeBook = (id) => ({ type: REMOVE_BOOK, id });
