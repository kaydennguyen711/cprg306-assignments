"use client";

import { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import itemsData from "./items.json";

export default function Page() {
    const [items, setItems] = useState(itemsData);

    const handleAddItem = (newItem) => {
        setItems((prevItems) => [...prevItems, newItem]);
    };

    return (
        <div>
            <h1>Shopping List</h1>
            {/* Pass the handleAddItem function as a prop to NewItem */}
            <NewItem onAddItem={handleAddItem} />
            {/* Pass the items state as a prop to ItemList */}
            <ItemList items={items} />
        </div>
    );
}
