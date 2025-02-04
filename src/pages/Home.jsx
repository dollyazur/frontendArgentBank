import FeatureItem from "../components/feature/FeatureItem";
import bankLogo from "../assets/images/argentBankLogo.webp";
import chatIcon from "../assets/images/icon-chat.webp";
import moneyIcon from "../assets/images/icon-money.webp";
import securityIcon from "../assets/images/icon-security.webp";
import Footer from "../components/footer/footer";

const Home = () => {
  return (
    <>
      {/* Header */}
      <nav className="main-nav">
        <a className="main-nav-logo" href="/">
          <img className="main-nav-logo-image" src={bankLogo} alt="Argent Bank Logo" />
          <h1 className="sr-only">Argent Bank</h1>
        </a>
        <div>
          <a className="main-nav-item" href="/sign-in">
            <i className="fa fa-user-circle"></i> Sign In
          </a>
        </div>
      </nav>

      {/* Main content */}
      <main>
        <div className="hero">
          <section className="hero-content">
            <h2 className="sr-only">Promoted Content</h2>
            <h3 className="subtitle">No fees.</h3>
            <h3 className="subtitle">No minimum deposit.</h3>
            <h3 className="subtitle">High interest rates.</h3>
            <p className="text">Open a savings account with Argent Bank today!</p>
          </section>
        </div>

        <section className="features">
          <h2 className="sr-only">Features</h2>
          <FeatureItem 
            icon={chatIcon} 
            altText="Chat Icon" 
            title="You are our #1 priority" 
            description="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes." 
          />
          <FeatureItem 
            icon={moneyIcon} 
            altText="Money Icon" 
            title="More savings means higher rates" 
            description="The more you save with us, the higher your interest rate will be!" 
          />
          <FeatureItem 
            icon={securityIcon} 
            altText="Security Icon" 
            title="Security you can trust" 
            description="We use top of the line encryption to make sure your data and money is always safe." 
          />
        </section>
      </main>

  
      
      <Footer />
    </>
  );
};

export default Home;

  