import "../styles/spinner.scss";

const LoadingSpinner: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={`spinner-container ${className}`}>
      <div className="loading-spinner"></div>
    </div>
  );
};

export default LoadingSpinner;
