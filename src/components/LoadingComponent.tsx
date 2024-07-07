import * as S from './components.styles';

const LoadingComponent = () => {
  return (
    <S.Container>
      <S.Spinner />
      <S.Text>Loading...</S.Text>
    </S.Container>
  );
};

export default LoadingComponent;
