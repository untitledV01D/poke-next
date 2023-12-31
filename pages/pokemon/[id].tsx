import { useContext } from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { Button, Card, Container, Grid, Image, Text } from '@nextui-org/react';
import confetti from 'canvas-confetti';
import { Layout } from '@components/layouts';
import { pokeApi } from 'api';
import { PokeFavoritesContext } from 'context';
import { Pokemon } from 'interfaces';
import { getPokemonInfo } from 'utils';


interface PokemonPageProps {
  pokemon: Pokemon
}

export default function PokemonPage({ pokemon }: PokemonPageProps) {
  const { favorites, setFavorites } = useContext(PokeFavoritesContext);
  const isInFavorites = favorites.includes(pokemon.id);

  const handleToggleFavorite = () => {
    if(favorites.includes(pokemon.id)){
      const newFavorites = favorites.filter( pokeId => pokeId != pokemon.id);
      setFavorites(newFavorites);
    } else {
      const newFavorites = [ ...favorites, pokemon.id ];
      setFavorites(newFavorites);
      confetti({
        zIndex: 999,
        particleCount: 100,
        spread: 100,
        angle: -100,
        origin: {
          x: 1,
          y: 0
        }
      });
    }
  };

  return (
    <Layout title={ pokemon.name } >
      <Grid.Container
        css={{
          marginTop: '5px'
        }}
        gap={2}
      >
        <Grid xs={12} sm={6} >
          <Card isHoverable css={{
            padding: '30px'
          }}>
            <Card.Body>
              <Card.Image
                src={ pokemon.sprites.other?.dream_world.front_default || './no_image.png'}
                alt={pokemon.name}
                width={'100%'}
                height={'200px'}
              />
            </Card.Body>
          </Card>
        </Grid>

        <Grid xs={12} sm={6} >
          <Card>
            <Card.Header
              css={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '8px 16px'
              }}
            >
              <Text h1 transform='capitalize'>{pokemon.name}</Text>
              <Button
                color='gradient'
                ghost
                onPress={ handleToggleFavorite }
              >
                {isInFavorites ? 'Eliminar' : 'Guardar'} en favoritos
              </Button>
            </Card.Header>
            <Card.Body>
              <Text size={30}>Sprites:</Text>

              <Container direction='row' display='flex'>
                <Image
                  src={pokemon.sprites.front_default || './no_image.jpg'}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />

                <Image
                  src={pokemon.sprites.back_default || './no_image.jpg'}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />

                <Image
                  src={pokemon.sprites.front_shiny || './no_image.jpg'}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />

                <Image
                  src={pokemon.sprites.back_shiny || './no_image.jpg'}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
              </Container>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const pokemons151: string[] = [...Array(151)].map((_, i) => `${i + 1}`);

  return {
    paths: pokemons151.map(id => ({
      params: { id }
    })),
    fallback: 'blocking'
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string };
  const pokemon = await getPokemonInfo(id);

  if(!pokemon){
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    };
  }

  return {
    props: {
      pokemon
    },
    revalidate: 864000
  };
};