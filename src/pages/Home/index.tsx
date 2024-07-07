import * as S from './Home.styles';
import { useQuery } from 'react-query';
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
    <S.HomeContainer>
      {data?.slice(0, 10).map((character: ICharacter) => (
        <S.CharacterCard key={character.id}>
          <S.CardLink
            to={`/character/${character.id}`}
            state={{ name: character.name, imgUrl: character.imageUrl }}
          >
            <S.ImageWrapper>
              <S.CardImage src={character.imageUrl} alt={character.name} />
            </S.ImageWrapper>
            <S.CardName>{character.name}</S.CardName>
          </S.CardLink>
        </S.CharacterCard>
      ))}
    </S.HomeContainer>
  );
};

export default Home;
