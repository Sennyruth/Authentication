import useAuthStore from "./authStore";

function Header() {
  const auth = useAuthStore((state) => state.auth);
  return (
    <div>
      {auth ? <div>Hello you are logged in</div> : <div>Please login</div>}
    </div>
  );
}

export default Header;
