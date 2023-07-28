import Image from 'next/image';
import { Container, Text } from '@nextui-org/react';
import { FC, useContext } from 'react';
import { PokeFavoritesContext } from 'context';

export const NoFavorites: FC = () => {

  return (
    <Container
      css={{
        display: 'flex',
        flexDirection: 'column',
        height: 'calc(100vh - 120px)',
        boxSizing: 'border-box',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
      }}
    >
      
      <Text h1>No hay favoritos</Text>
      <Image
        src='https://upload.wikimedia.org/wikipedia/commons/3/3b/MissingNo.svg'
        alt='pokemon'
        width={150}
        height={300}
      />
      
    </Container>
  );
};