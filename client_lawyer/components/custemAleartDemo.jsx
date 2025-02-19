
import PropTypes from "prop-types";

// Configuration for different alert types
const alertConfig = {
  success: { icon: "✔️", colorClass: "text-green-700 bg-green-100" },
  error: { icon: "❌", colorClass: "text-red-700 bg-red-100" },
  warning: { icon: "⚠️", colorClass: "text-yellow-700 bg-yellow-100" },
  info: { icon: "ℹ️", colorClass: "text-blue-700 bg-blue-100" },
};

function CustomAlertDemo({ type, title, message }) {
  const { icon, colorClass } = alertConfig[type];

  return (
    <div
      className={`w-full max-w-md p-4 rounded-md ${colorClass} flex items-start`}
      role="alert"
    >
      {/* Icon */}
      <span className="text-xl mr-3">{icon}</span>

      {/* Alert content */}
      <div>
        <h2 className="text-sm font-semibold">{title}</h2>
        <p className="text-sm">{message}</p>
      </div>
    </div>
  );
}

CustomAlertDemo.propTypes = {
  type: PropTypes.oneOf(["success", "error", "warning", "info"]).isRequired,
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

export default CustomAlertDemo;
