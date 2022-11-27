import styled from 'styled-components';

//export const Text = styled.p`
//  font-size: 16px;
//  font-weight: 400;
//  color: green;
//  background-color: yellow;

//  &:hover,
//  &:focus {
//    background-color: blueviolet;
//  }
//`;

//export const Span = styled.span`
//  font-weight: 700;
//  color: ${({ isBiz }) => (isBiz ? 'red' : 'blue')};

//  ${Text}:hover & {
//    background-color: brown;
//  }
//`;

export const Span = styled.span`
  font-weight: 700;
  color: ${({ isBiz }) => (isBiz ? 'red' : 'blue')};
`;

export const Text = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: green;
  background-color: yellow;

  &:hover,
  &:focus {
    background-color: blueviolet;
    ${Span} {
      background-color: brown;
    }
  }
`;
