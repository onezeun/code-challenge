import * as S from './Detail.styles';
import { useQuery } from 'react-query';
import { useLocation, useParams } from 'react-router-dom';
import { fetchCharacterInfo } from 'api';
import LoadingComponent from 'components/LoadingComponent';
import ErrorComponent from 'components/ErrorComponent';

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

  const { isLoading, data, error } = useQuery<ICharacterDetail>(
    ['characterInfo', characterId],
    () => fetchCharacterInfo(characterId as string) // 바꿔야함
  );

  if (isLoading) {
    return <LoadingComponent />;
  }

  if(error) {
    return <ErrorComponent />;
  }

  return (
    <S.Container>
      <S.ImageWrapper>
        <S.Image src={state.imgUrl} alt={state.name} />
      </S.ImageWrapper>
      <S.Name>{state.name}'s Films'</S.Name>
      <S.SourceButton href={data?.sourceUrl}>Go to Source</S.SourceButton>
      <S.FilmList>
        {data?.films.map((film, index) => <S.FilmItem key={index}>{film}</S.FilmItem>)}
      </S.FilmList>
    </S.Container>
  );
};

export default Detail;
