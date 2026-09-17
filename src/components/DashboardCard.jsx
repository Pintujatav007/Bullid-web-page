const DashboardCard = ({ icon, title, value, description }) => {
  return (
    <div className="dashboard-card">
      <div className="dashboard-card-top">
        <div className="dashboard-icon">
          {icon}
        </div>

        <span className="dashboard-status">Active</span>
      </div>

      <h3>{title}</h3>

      <h2>{value}</h2>

      <p>{description}</p>
    </div>
  );
};

export default DashboardCard;