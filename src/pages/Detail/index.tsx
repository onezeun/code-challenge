import { useQuery } from 'react-query';
import { useLocation, useParams } from 'react-router-dom';
import { fetchCharacterInfo } from 'api';
import Loading from 'components/Loading';

interface ICharacterDetail {
  id: number;
  name: string;
  imageUrl: string;
  sourceUrl: string;
  films: string[];
}

const Detail = () => {
  const { characterId } = useParams();
  const { state } = useLocation();

  const { isLoading, data } = useQuery<ICharacterDetail>(
    ['characterInfo', characterId],
    () => fetchCharacterInfo(characterId as string) // 바꿔야함
  );

  if(isLoading) {
    return <Loading />
  };

  return (
    <div>
      <h1>{state.name}</h1>
      <img src={state.imgUrl} alt={state.name} />
      <ul>
        {data?.films.map((film) => <li>{film}</li>)}
      </ul>
    </div>
  );
};

export default Detail;
