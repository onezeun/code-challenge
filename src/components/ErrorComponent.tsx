import { Container, Text } from './components.styles';

const ErrorComponent = () => {
  return (
    <Container>
      <Text>데이터를 불러오는 중 문제가 발생했습니다. 잠시 후 다시 시도해주세요.</Text>
    </Container>
  );
};

export default ErrorComponent;
