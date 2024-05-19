import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';
import Navbar from './Navbar';

const LandingPage: React.FC = () => {
  return (
    <div className="landing-page">
      <Navbar />
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to AImploy</h1>
          <p>Your AI-powered career advancement partner</p>
          <Link to="/login">
            <button className="cta-button">Get Started</button>
          </Link>
        </div>
      </section>
      <section id="features" className="features">
        <h2>Features</h2>
        <div className="feature-list">
          <div className="feature">
            <h3>Personalized AI Recommendations</h3>
            <p>Get career advice and job recommendations tailored to your profile.</p>
          </div>
          <div className="feature">
            <h3>Interview Preparation</h3>
            <p>Practice and improve your interview skills with AI-driven mock interviews.</p>
          </div>
          <div className="feature">
            <h3>Skill Development</h3>
            <p>Access resources and courses to develop the skills in demand.</p>
          </div>
        </div>
      </section>
      <section id="about" className="about">
        <h2>About Us</h2>
        <p>AImploy is dedicated to helping professionals achieve their career goals using the power of artificial intelligence. Our platform offers personalized guidance, resources, and tools to ensure you stay ahead in your career journey.</p>
      </section>
      <footer id="contact" className="footer">
        <h2>Contact Us</h2>
        <p>Email: support@aimploy.com | Phone: +1 (800) 123-4567 | &copy; 2024 AImploy. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
