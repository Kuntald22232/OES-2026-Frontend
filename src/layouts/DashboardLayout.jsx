import Navbar from "../components/navbar/Navbar";
import Sidebar from "../components/sidebar/Sidebar";

const DashboardLayout = ({
  children,
}) => {
  return (
    <div>
      <Navbar />

      <div
        style={{
          display: "flex",
        }}
      >
        <Sidebar />

        <div
          style={{
            padding: "20px",
            width: "100%",
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;