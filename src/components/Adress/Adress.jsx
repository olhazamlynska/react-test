import { AdressText, AdressSpan } from './Adress.styled';

export const Adress = ({ street, city, geo: { lat, lng } }) => {
  return (
    <>
      <AdressText>
        Street: <AdressSpan>{street}</AdressSpan>
      </AdressText>
      <AdressText>
        City: <AdressSpan>{city}</AdressSpan>
      </AdressText>
      <AdressText>
        Latitude: <AdressSpan>{lat}</AdressSpan>
      </AdressText>
      <AdressText>
        Longitude: <AdressSpan>{lng}</AdressSpan>
      </AdressText>
    </>
  );
};
