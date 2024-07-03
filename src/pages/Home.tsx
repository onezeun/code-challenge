import { Link } from 'react-router-dom';
import { authors } from 'data';

function Home() {
  return (
    <div>
      <h1>Best Seller Authors</h1>
      <ul>
        {authors.map((author) => {
          // 공백을 언더스코어(_)로 대체
          const authorUrl = author.name.replace(/\s+/g, '_');
          return (
            <li>
              <Link to={`/author/${authorUrl}`}>{author.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default Home;
