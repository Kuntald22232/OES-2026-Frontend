const Sidebar = () => {
  return (
    <div
      style={{
        width: "220px",
        height: "100vh",
        background: "#0f172a",
        color: "white",
        padding: "20px",
      }}
    >
      <h3>Dashboard</h3>

      <ul
        style={{
          listStyle: "none",
          padding: 0,
        }}
      >
        <li>Home</li>
        <li>Profile</li>
        <li>Exams</li>
      </ul>
    </div>
  );
};

export default Sidebar;