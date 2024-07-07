import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 80%;
  min-height: 60vh;
  padding: 20px;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.bgColor};
  color: ${({ theme }) => theme.textColor};
  margin-top: 100px;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Image = styled.img`
  width: 70%;
  max-width: 350px;
  object-fit: cover;
  margin-bottom: 20px;
  aspect-ratio: 16 / 9;
  margin-top: -50px;
  border-radius: 10px;
`;

export const Name = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  color: ${({ theme }) => theme.textColor};
  cursor: default;
`;

export const FilmList = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const FilmItem = styled.li`
  display: inline-block;
  font-size: 1rem;
  margin: 5px;
  padding: 5px 10px;
  background-color: ${({ theme }) => theme.tagBgColor};
  color: ${({ theme }) => theme.textColor};
  border-radius: 20px;
  box-shadow: ${({ theme }) => theme.boxShadow};
  cursor: default;
`;

export const SourceButton = styled.a`
  font-size: 1rem;
  color: #fff;
  background-color: ${({ theme }) => theme.bgColor};
  color: ${({ theme }) => theme.textColor};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 5px 0 20px 0;
  transition:
    transform 0.3s ease;

  &:hover {
    transform: translateY(-2px);
  }
`;