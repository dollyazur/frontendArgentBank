import PropTypes from 'prop-types';
import '../account/account.css';

const Account = ({ title, amount, description }) => {
  return (
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">{title}</h3>
        <h4 className="account-amount">{amount}</h4>
        <p className="account-amount-description">{description}</p>
      </div>
      <div className="account-content-wrapper cta">
        <span className="transaction-button">
          <i className="fa-solid fa-chevron-right"></i>
        </span>
      </div>
    </section>
  );
};

// Validation des props, code robuste
Account.propTypes = {
  title: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Account;
