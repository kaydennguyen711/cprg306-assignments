export default function Item({ name, quantity, category }) {
    return (
      <li>
        {quantity} x {name} ({category})
      </li>
    );
  }
  