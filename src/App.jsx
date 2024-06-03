import { useState } from 'react';
import { initialItems } from './lib/constants';
import NewItemForm from './components/NewItemForm';
import Main from './components/Main';
import Sidebar from './components/Sidebar';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [items, setItems] = useState(initialItems);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const addItem = (newItemLabel) => {
    const newItem = {
      id: new Date().getTime(),
      label: newItemLabel,
      isPacked: false,
    };
    const newItems = [...items, newItem];
    setItems(newItems);
  };

  return (
    <>
      <Sidebar openModal={openModal} />
      <Main items={items} />
      <NewItemForm
        addItem={addItem}
        isModalOpen={isModalOpen}
        closeModal={closeModal}
      />
    </>
  );
};

export default App;
