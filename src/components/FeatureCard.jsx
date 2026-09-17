import { ShieldCheck } from "lucide-react";

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="feature-card">
      <div className="feature-icon">
        {icon || <ShieldCheck size={24} />}
      </div>

      <h3>{title}</h3>

      <p>{description}</p>
    </div>
  );
};

export default FeatureCard;