import { useUserAuth } from "./_utils/auth-context";

const LandingPage = () => {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  return (
    <div>
      {!user ? (
        <button onClick={gitHubSignIn}>Login with GitHub</button>
      ) : (
        <>
          <p>
            Welcome, {user.displayName} ({user.email})
          </p>
          <button onClick={firebaseSignOut}>Logout</button>
          <a href="/week-9/shopping-list">Go to Shopping List</a>
        </>
      )}
    </div>
  );
};

export default LandingPage;
