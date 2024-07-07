import * as S from './Home.styles';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { fetchCharacters } from 'api';
import Loading from 'components/Loading';

interface ICharacter {
  id: number;
  name: string;
  imageUrl: string;
}

const Home = () => {
  const { isLoading, data } = useQuery<ICharacter[]>('allCharacters', fetchCharacters);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      {data?.slice(0, 10).map((character: ICharacter) => (
        <div key={character.id}>
          <Link
            to={`/character/${character.id}`}
            state={{ name: character.name, imgUrl: character.imageUrl }}
          >
            {character.name} <img src={character.imageUrl} alt={character.name}></img>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Home;
