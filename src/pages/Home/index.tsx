import * as S from './Home.styles';
import { useQuery } from 'react-query';
import { fetchCharacters } from 'api';
import LoadingComponent from 'components/LoadingComponent';
import ErrorComponent from 'components/ErrorComponent';

interface ICharacter {
  id: number;
  name: string;
  imageUrl: string;
}

const Home = () => {
  const { isLoading, data, error } = useQuery<ICharacter[]>('allCharacters', fetchCharacters);

  if (isLoading) {
    return <LoadingComponent />;
  }

  if (error) {
    return <ErrorComponent />;
  }

  return (
    <S.Container>
      {data?.slice(0, 100).map((character: ICharacter) => (
        <S.CharacterCard key={character.id}>
          <S.CardLink
            to={`/character/${character.id}`}
            state={{ name: character.name, imgUrl: character.imageUrl }}
          >
            <S.ImageWrapper>
              <S.Image src={character.imageUrl} alt={character.name} />
            </S.ImageWrapper>
            <S.CardName>{character.name}</S.CardName>
          </S.CardLink>
        </S.CharacterCard>
      ))}
    </S.Container>
  );
};

export default Home;
