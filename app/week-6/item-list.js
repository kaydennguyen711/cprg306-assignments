'use client';
import { useState } from 'react';
import Item from './item';

export default function ItemList({ items = [] }) {
  const validItems = Array.isArray(items) ? items : [];
  const [sortBy, setSortBy] = useState('name');

  const sortedItems = [...validItems].sort((a, b) => {
    return sortBy === 'name'
      ? a.name.localeCompare(b.name)
      : a.category.localeCompare(b.category);
  });

  return (
    <div>
      <button onClick={() => setSortBy('name')}>Sort by Name</button>
      <button onClick={() => setSortBy('category')}>Sort by Category</button>
      <ul>
        {sortedItems.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </ul>
    </div>
  );
}
