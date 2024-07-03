import { Link, Outlet, useParams } from 'react-router-dom';
import { authors } from 'data';

function Author() {
  const { name } = useParams();

  if (!name) {
    return <div>Author not found</div>;
  }

  const authorName = name.replace(/_/g, ' ');
  const author = authors.find((author) => author.name === authorName);

  if (!author) {
    return <div>Author not found</div>;
  }

  return (
    <div>
      <h1>{authorName}</h1>
      <ul>
        {author.books.map((book) => {
          const bookUrl = book.title.replace(/\s+/g, '_');
          return (
            <li key={book.title}>
              <Link to={`/author/${name}/${bookUrl}`}>{book.title}</Link>
            </li>
          );
        })}
      </ul>
      <Outlet context={{ author }} />
    </div>
  );
}
export default Author;
