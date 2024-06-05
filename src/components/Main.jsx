import Divider from './Divider';
import Checklist from './Checklist';
import NewSectionButton from './NewSectionButton';
import Progress from './Progress';
import NewItemForm from './NewItemForm';
import Sort from './Sort';
import { useMemo, useState } from 'react';
import Header from './Header';
import ChecklistContainer from './ChecklistContainer';

const Main = ({
  items,
  addItem,
  deleteItem,
  toggleItem,
  totalNumberOfItems,
  numbersOfItemsPacked,
  categories,
}) => {
  const [sortBy, setSortBy] = useState('default');

  const sortedItems = useMemo(
    () =>
      items.map((category) => {
        return {
          ...category,
          categoryItems: category.categoryItems.slice().sort((a, b) => {
            if (sortBy === 'packed') {
              return b.isPacked - a.isPacked;
            }

            if (sortBy === 'unpacked') {
              return a.isPacked - b.isPacked;
            }

            return;
          }),
        };
      }),
    [items, sortBy]
  );

  return (
    <main>
      <NewItemForm addItem={addItem} categories={categories} />

      <Header>
        <Sort sortBy={sortBy} setSortBy={setSortBy} />
        <Progress
          numbersOfItemsPacked={numbersOfItemsPacked}
          totalNumberOfItems={totalNumberOfItems}
        />
      </Header>

      <Divider />

      <ChecklistContainer>
        <Checklist
          items={sortedItems}
          deleteItem={deleteItem}
          toggleItem={toggleItem}
        />
        <NewSectionButton />
      </ChecklistContainer>
    </main>
  );
};

export default Main;
