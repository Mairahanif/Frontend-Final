import './App.css'
import fifa from './assets/fifa.png'
import td from './assets/td-removebg-preview.png'
import nike from './assets/nike.png'
import nvidia from './assets/nvidia.png'
import mcdon from './assets/mcdon.png'
import cocoa from './assets/cocoacola.png'

function App() {
  return (
    <>
    <div className="app">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="navbar-container">
          <button className="nav-button checkout-btn">
            Checkout NVIDIA
          </button>
          
          <div className="nav-menu">
            <a href="#about" className="nav-link">About us</a>
            <a href="#chatbot" className="nav-link">Chat-Bot</a>
            <a href="#howto" className="nav-link">How-To</a>
            <a href="#faq" className="nav-link">FAQ's</a>
            <a href="#contact" className="nav-link">Contact Us</a>
          </div>
          
          <button className="nav-button learn-btn">
            Learn More
          </button>
        </div>
      </nav>


        {/* Main Content */}
        <main className="main-content">
          <div className="hero-text">
            <h1 className="jarvis-title">JARVIS</h1>
            <p className="your-text">YOUR</p>
            <h2 className="assistant-title">Hospitality Assistant</h2>
          </div>
{/* Full-Width Video/Image Placeholder Section */}
      <section className="media-section">
        <div className="media-container">
          <div className="media-content">
            <div className="media-placeholder">
              <img 
                src="https://placehold.co/1200x600/1a1a1a/8E9C78?text=AI+Hospitality+Experience+Video+Placeholder" 
                alt="AI Hospitality Experience - Interactive video demonstration"
                className="media-image"
              />
              <div className="media-overlay">
                <button className="play-button">
                  <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                    <circle cx="30" cy="30" r="30" fill="rgba(107, 142, 35, 0.9)"/>
                    <path d="M23 20L40 30L23 40V20Z" fill="white"/>
                  </svg>
                </button>
                <p className="media-description">Experience JARVIS in Action</p>
              </div>
            </div>
          </div>
        </div>
      </section>

        </main>

        {/* Partners Section */}
        <footer className="partners-section">
          <p className="partners-text">Partnered with:</p>
          <div className="partners-logos">
            <img 
              src={td} 
              alt="TD logo" 
              className="partner-logo colored" />
            <img 
              src={nike} 
              alt="nike logo" 
              className="partner-logo colored" />
            <img 
              src={fifa} 
              alt="FIFA logo"
              className="partner-logo colored" />
            <img 
              src={mcdon} 
              alt="McDonald's logo" 
              className="partner-logo colored" />
            <img 
              src={cocoa} 
              alt="Coca-Cola logo" 
              className="partner-logo colored" />
            <img 
              src={nvidia} 
              alt="NVIDIA logo" 
              className="partner-logo colored" />
          </div>
        </footer>
      </div>
     
    </>
  )
}

export default App
