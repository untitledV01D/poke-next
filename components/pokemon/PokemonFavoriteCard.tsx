import { Card, Grid } from '@nextui-org/react';
import { FC } from 'react';
import { useRouter } from 'next/router';

interface FavoriteCardProps {
  pokeId: number;
};

export const PokemonFavoriteCard: FC<FavoriteCardProps> = ({ pokeId }) => {
  const router = useRouter();

  const handleRoute = (id: number) => {
    router.push(`pokemon/${ id }`);
  };

  return (
    <Grid xs={ 6 } sm={ 3 }>
      <Card 
        isHoverable
        isPressable
        css={{ padding: 10 }}
        onPress={ () => handleRoute(pokeId) }
      >
        <Card.Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${ pokeId }.svg`}
          width={'100%'}
          height={ 140 }
        />
      </Card>
    </Grid>
  );
};