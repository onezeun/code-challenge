import * as S from './Detail.styles';
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

  if (isLoading) {
    return <Loading />;
  }

  return (
    <S.DetailContainer>
      <S.DetailImageWrapper>
        <S.DetailImage src={state.imgUrl} alt={state.name} />
      </S.DetailImageWrapper>
      <S.DetailName>{state.name}</S.DetailName>
      <S.FilmList>
        {data?.films.map((film, index) => <S.FilmItem key={index}>{film}</S.FilmItem>)}
      </S.FilmList>
    </S.DetailContainer>
  );
};

export default Detail;
