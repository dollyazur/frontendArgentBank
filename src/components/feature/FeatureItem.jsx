import PropTypes from 'prop-types';
import '../feature/FeatureItem.css'

const FeatureItem = ({ icon, altText, title, description }) => {
  return (
    <div className="feature-item">
      <img src={icon} alt={altText} className="feature-icon" />
      <h3 className="feature-item-title">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

// Validation des props
FeatureItem.propTypes = {
  icon: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default FeatureItem;
