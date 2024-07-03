import { useOutletContext } from 'react-router-dom';
import { BookType } from 'types/author.type';

interface IBookContext {
  book: BookType;
}

function Chapters() {
  const { book } = useOutletContext<IBookContext>();

  if (!book) {
    return <div>Chapters not found</div>;
  }

  return (
    <div>
      <h3>Chapters</h3>
      <ul>
        {book.chapters.map((chapter) => (
          <li>{chapter}</li>
        ))}
      </ul>
    </div>
  );
}
export default Chapters;
