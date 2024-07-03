import { useParams, useOutletContext, Link, Outlet } from 'react-router-dom';
import { AuthorType } from 'types/author.type';

interface IAuthorContext {
  author: AuthorType;
}

function Book() {
  const { name, book } = useParams();
  const { author } = useOutletContext<IAuthorContext>();

  if (!book) {
    return <div>Book not found</div>;
  }

  const bookTitle = book.replace(/_/g, ' ');
  const bookDetail = author.books.find((b) => b.title === bookTitle);

  if (!bookDetail) {
    return <div>Book not found</div>;
  }

  return (
    <div>
      <h2>{bookTitle}</h2>
      <ul>
        <li>
          <Link to={`/author/${name}/${book}/chapters`}>Chapters</Link>
        </li>
        <li>
          <Link to={`/author/${name}/${book}/characters`}>
            Characters
          </Link>
        </li>
      </ul>
      <Outlet context={{ book: bookDetail }} />
    </div>
  );
}
export default Book;
