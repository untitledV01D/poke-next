import { useEffect, useState } from 'react';

const useLocalStorage = <T>(key: string, defaultValue: T): [T, (value: T) => void] => {
  const [ item, setItem ] = useState(defaultValue);

  useEffect(() => {
    try {
      const item = localStorage.getItem(key);

      if(item){
        const parsedItem: T = JSON.parse(localStorage.getItem(key)!);
        setItem(parsedItem);
      } else {
        const stringifiedItem = JSON.stringify(defaultValue);
        localStorage.setItem(key, stringifiedItem);
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  const saveItem = (newItem: T): void => {
    const stringifiedItem = JSON.stringify(newItem);
    localStorage.setItem(key, stringifiedItem);
    setItem(newItem);
  };

  return [ item, saveItem ];
};

export { useLocalStorage };