import { AuthorType } from "types/author.type";

export const authors: AuthorType[] = [
  {
    id: 1,
    name: 'J.K. Rowling',
    books: [
      {
        title: 'Harry Potter 1',
        chapters: ['Chapter 1', 'Chapter 2', 'Chapter 3', 'Chapter 4'],
        characters:['Good Guy A', 'Good Guy B', 'Bad Guy A', 'Bad Guy B']
      },
      {
        title: 'Harry Potter 2',
        chapters: ['Chapter 1', 'Chapter 2', 'Chapter 3', 'Chapter 4'],
        characters:['Good Guy A', 'Good Guy B', 'Bad Guy A', 'Bad Guy B']
      }
    ]
  },
  {
    id: 2,
    name: 'J.R.R. Tolkien',
    books: [
      {
        title: 'The Lord of the Rings 1',
        chapters: ['Chapter 1', 'Chapter 2', 'Chapter 3', 'Chapter 4'],
        characters: ['Good Guy A', 'Good Guy B', 'Bad Guy A', 'Bad Guy B']
      },
      {
        title: 'The Lord of the Rings 2',
        chapters: ['Chapter 1', 'Chapter 2', 'Chapter 3', 'Chapter 4'],
        characters: ['Good Guy A', 'Good Guy B', 'Bad Guy A', 'Bad Guy B']
      }
    ]
  }
];
