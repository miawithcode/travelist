import { useContext } from 'react';
import { ItemsContext } from '../contexts/ItemsContextProvider';

const useItemsContext = () => {
  const context = useContext(ItemsContext);

  if (!context) {
    throw new Error(
      'useItemsContext must be used within an ItemsContextProvider'
    );
  }

  return context;
};

export default useItemsContext;
