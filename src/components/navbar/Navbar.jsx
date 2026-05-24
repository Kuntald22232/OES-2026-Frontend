import useAuth from "../../hooks/useAuth";

const Navbar = () => {
  const { user, logout } =
    useAuth();

  return (
    <div
      style={{
        height: "60px",
        background: "#1e293b",
        color: "white",
        display: "flex",
        justifyContent:
          "space-between",
        alignItems: "center",
        padding: "0 20px",
      }}
    >
      <h2>OES2026</h2>

      <div>
        {user?.role}

        <button
          onClick={logout}
          style={{
            marginLeft: "15px",
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;