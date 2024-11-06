export default function Item({ name, quantity, category, onSelect }) {
  return (
    <li
      onClick={() => onSelect(name)}
      className="flex justify-between items-center p-4 border-b border-gray-300 cursor-pointer"
    >
      <span className="font-semibold">{name}</span>
      <span>Quantity: {quantity}</span>
      <span className="text-sm text-gray-500">{category}</span>
    </li>
  );
}

