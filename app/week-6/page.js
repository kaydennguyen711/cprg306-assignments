import React from 'react';
import ItemList from './item-list';
import NewItem from '../week-5/new-item';

const Page = () => {
  return (
    <div>
      <h1>Shopping List for Week 6</h1>
      {/* Component to add new items */}
      <NewItem />
      {/* Component to display list of items */}
      <ItemList />
    </div>
  );
};

export default Page;
