import { useEffect, useState } from 'react';
import { initialItems } from './lib/constants';
import Main from './components/Main';
import Sidebar from './components/Sidebar';

const App = () => {
  const [items, setItems] = useState(
    () => JSON.parse(localStorage.getItem('items')) || initialItems
  );

  const addItem = (categoryLabel, newItemLabel) => {
    const newItem = {
      id: new Date().getTime(),
      label: newItemLabel,
      isPacked: false,
    };

    const isCategoryExist = items.some(
      (item) => item.category === categoryLabel
    );

    let newItems;

    if (isCategoryExist) {
      newItems = items.map((category) => {
        if (category.category === categoryLabel) {
          return {
            ...category,
            categoryItems: [...category.categoryItems, newItem],
          };
        }

        return category;
      });
    } else {
      newItems = [
        ...items,
        {
          categoryLabel,
          categoryItems: [newItem],
          color: '#EEEEEE',
        },
      ];
    }

    setItems(newItems);
  };

  const deleteItem = (id) => {
    const newItems = items.map((category) => {
      const newCategoryItems = category.categoryItems.filter(
        (item) => item.id !== id
      );
      return { ...category, categoryItems: newCategoryItems };
    });
    setItems(newItems);
  };

  const toggleItem = (id) => {
    const newItems = items.map((category) => {
      const newCategoryItems = category.categoryItems.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            isPacked: !item.isPacked,
          };
        }
        return item;
      });
      return {
        ...category,
        categoryItems: newCategoryItems,
      };
    });
    setItems(newItems);
  };

  const markAllAsComplete = () => {
    const newItems = items.map((category) => {
      const newCategoryItems = category.categoryItems.map((item) => {
        return {
          ...item,
          isPacked: true,
        };
      });
      return { ...category, categoryItems: newCategoryItems };
    });
    setItems(newItems);
  };

  const markAllAsIncomplete = () => {
    const newItems = items.map((category) => {
      const newCategoryItems = category.categoryItems.map((item) => {
        return {
          ...item,
          isPacked: false,
        };
      });
      return { ...category, categoryItems: newCategoryItems };
    });
    setItems(newItems);
  };

  const resetToInitial = () => {
    setItems(initialItems);
  };

  const removeAllItems = () => {
    setItems([]);
  };

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

  return (
    <>
      <Sidebar
        addItem={addItem}
        markAllAsComplete={markAllAsComplete}
        markAllAsIncomplete={markAllAsIncomplete}
        resetToInitial={resetToInitial}
        removeAllItems={removeAllItems}
      />
      <Main
        items={items}
        addItem={addItem}
        deleteItem={deleteItem}
        toggleItem={toggleItem}
      />
    </>
  );
};

export default App;
