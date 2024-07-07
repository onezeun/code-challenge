import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 150px;
`;

export const Image = styled.img`
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  width: 150px;
  height: 150px;
  object-fit: cover;
  filter: ${({ theme }) => theme.dropShadow};
  transition:
    transform 0.3s ease-in-out,
    border-radius 0.3s ease-in-out,
    top 0.3s ease-in-out,
    left 0.3s ease-in-out;
`;

export const CardName = styled.span`
  font-size: 1.3rem;
  font-weight: 600;
  color: ${({ theme }) => theme.textColor};
`;

export const CardLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.textColor};
  display: block;
  width: 100%;
  height: 100%;
`;

export const CharacterCard = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.bgColor};
  border-radius: 10px;
  margin: 20px;
  width: 200px;
  height: 235px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  margin-top: 50px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &:hover {
    color: ${({ theme }) => theme.textColor};
    filter: ${({ theme }) => theme.dropShadow};
  }

  &:hover ${Image} {
    top: 0;
    left: 50%;
    transform: translate(-50%, -30%) scale(1.1);
    border-radius: 10px;
  }
`;