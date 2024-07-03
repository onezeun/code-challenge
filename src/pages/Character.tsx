import { useOutletContext } from 'react-router-dom';
import { BookType } from 'types/author.type';

interface IBookContext {
  book: BookType;
}

function Character() {
  const { book } = useOutletContext<IBookContext>();

  if (!book) {
    return <div>Character not found</div>;
  }

  return (
    <div>
      <h3>Character</h3>
      <ul>
        {book.characters.map((character) => (
          <li>{character}</li>
        ))}
      </ul>
    </div>
  );
}
export default Character;