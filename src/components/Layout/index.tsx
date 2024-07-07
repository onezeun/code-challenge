import { Outlet } from 'react-router-dom';
import * as S from './Layout.styles';

const Layout = () => {
  return (
    <S.LayoutContainer>
      <S.Title>Disney Characters</S.Title>
      <Outlet />
    </S.LayoutContainer>
  );
}

export default Layout;
