import { useUserAuth } from "../_utils/auth-context";

const ShoppingListPage = () => {
  const { user } = useUserAuth();

  if (!user) {
    return <p>Access Denied. Please login to continue.</p>;
  }

  return <div>Your Shopping List Content Here</div>;
};

export default ShoppingListPage;
