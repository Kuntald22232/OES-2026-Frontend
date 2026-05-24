import DashboardLayout from "../../layouts/DashboardLayout";
import "../../assets/styles/dashboard.css";
const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="dashboard-container">
        <h1>Admin Dashboard</h1>

        <div className="dashboard-cards">
          <div className="card">
            <h3>Total Students</h3>
            <p>250</p>
          </div>

          <div className="card">
            <h3>Total Teachers</h3>
            <p>15</p>
          </div>

          <div className="card">
            <h3>Total Exams</h3>
            <p>40</p>
          </div>

          <div className="card">
            <h3>Manage Users</h3>
            <p>Students & Teachers</p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;