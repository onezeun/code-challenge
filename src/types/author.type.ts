export interface BookType {
  title: string;
  chapters: string[];
  characters: string[];
}

export interface AuthorType {
  id: number;
  name: string;
  books: BookType[];
}
