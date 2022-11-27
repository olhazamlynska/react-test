import styled from 'styled-components';

export const AdressText = styled.p`
  font-weight: 400;
  color: green;
  background-color: yellow;
  font-size: 16px;
  &:hover,
  &:focus {
    background-color: blueviolet;
  }
`;

export const AdressSpan = styled.span`
  font-weight: 700;

  ${AdressText}:hover & {
    background-color: brown;
  }
`;
