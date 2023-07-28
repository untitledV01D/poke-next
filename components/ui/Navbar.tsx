import Image from 'next/image';
import { Spacer, Text, useTheme } from '@nextui-org/react';
import { FC } from 'react';
import Link from 'next/link';

export const Navbar: FC = () => {
  const { theme } = useTheme();
  return (
    <nav
      style={{
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'start',
        padding: '0 20px',
        backgroundColor: theme?.colors.secondary.value
      }}
    >
      <Image 
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png"
        width={80}
        height={80}
        alt="ditto"
      />

      <Link href='/'>
        <div style={{
          display: 'flex',
          alignItems: 'center'
        }}>
          <Text color="white" h2>P</Text>
          <Text color="white" h3>ókemon</Text>
        </div>
      </Link>
      
      <Spacer css={{ flex: 1 }} />
      
      <Link href='/favorites'>
        <Text color="white">Favoritos</Text>
      </Link>
    </nav>
  );
};

