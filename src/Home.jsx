import useAuthStore from "./authStore";

function Home() {
  const setAuth = useAuthStore((state) => state.setAuth);

  const handleLogout = () => {
    setAuth(false);
  };
  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Home;
