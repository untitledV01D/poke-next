import { FC, ReactNode, createContext } from 'react';
import { useLocalStorage } from 'hooks';

interface ContextInterface {
  favorites: number[];
  setFavorites: (value: number[]) => void
}

const PokeFavoritesContext = createContext<ContextInterface>({} as ContextInterface);

const PokeFavoritesProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [favorites, setFavorites] = useLocalStorage<number[]>('pokeFavorites', []);

  return (
    <PokeFavoritesContext.Provider
      value={{
        favorites,
        setFavorites
      }}
    >
      { children }
    </PokeFavoritesContext.Provider>
  );
};

export {
  PokeFavoritesContext,
  PokeFavoritesProvider
};