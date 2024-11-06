'use client';

import { useState } from 'react';
import ItemList from './item-list';
import NewItem from './new-item.js';
import itemsData from './items.json';

export default function Page() {
  const [items, setItems] = useState(Array.isArray(itemsData) ? itemsData : []);

  const handleAddItem = (newItem) => {
    if (newItem && typeof newItem === 'object') 
      {
      setItems((prevItems) => [...prevItems, newItem]);
      } else {
      console.error("Invalid item added:", newItem);
      } 
  };

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Shopping List</h1>
      {/* Render NewItem and pass handleAddItem as a prop */}
      <NewItem onAddItem={handleAddItem} />
      {/* Render ItemList and pass items as a prop */}
      <ItemList items={items} />
    </main>
  );
}
