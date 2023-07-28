import { Card, Grid } from '@nextui-org/react';
import { FC } from 'react';
import { PokemonFavoriteCard } from './PokemonFavoriteCard';

interface FavoritesProps {
  favorites: number[]
}

export const Favorites: FC<FavoritesProps> = ({ favorites }) => {
  return (
    <Grid.Container gap={ 2 } direction='row' justify='flex-start'>
      {
        favorites.map(id => (
          <PokemonFavoriteCard  key={ id } pokeId={id} />
        ))
      }
    </Grid.Container>
  );
};