import styled from 'styled-components';

export const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  padding: 20px;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.bgColor};
  color: ${({ theme }) => theme.textColor};
  margin-top: 100px;
`;

export const DetailImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const DetailImage = styled.img`
  position: absolute;
  width: 70%;
  max-height: 210px;
  max-width: 350px;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  object-fit: cover;
  margin-bottom: 20px;
`;

export const DetailName = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.textColor};
`;

export const FilmList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

export const FilmItem = styled.li`
  font-size: 1.2rem;
  margin: 10px 0;
`;
