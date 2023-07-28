import { GetStaticProps } from 'next';
import { Grid } from '@nextui-org/react';

import { Layout } from '@components/layouts';
import { pokeApi } from '../api';
import { PokemonListResponse, SmallPokemon } from '../interfaces';
import { PokemonCard } from '../components/pokemon/';

interface HomeProps {
  pokemons: SmallPokemon[]
}

export default function Home({ pokemons }: HomeProps) {

  return (
    <Layout title='Listado Pokemon'>
      <Grid.Container gap={5}>
        {
          pokemons.map((pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))
        }
      </Grid.Container>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');

  const pokemons: SmallPokemon[] = data.results.map((pokemon, i) => ({
    ...pokemon,
    id: i + 1,
    image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${ i + 1 }.svg`
  }));

  return { 
    props: {
      pokemons
    } 
  };
};
