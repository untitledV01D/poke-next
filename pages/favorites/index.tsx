import { Layout } from '@components/layouts';
import { Favorites, NoFavorites } from '@components/pokemon';
import { PokeFavoritesContext } from 'context';
import { useContext } from 'react';

export default function FavoritesPage(){
  const { favorites } = useContext(PokeFavoritesContext);

  return (
    <Layout title='Favoritos'>

      {
        favorites.length == 0
          ? ( <NoFavorites /> )
          : (
            <Favorites favorites={favorites} />
          )
      }
      
    
    </Layout>
  );
}