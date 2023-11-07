import React from 'react';
import './App.scss';
import Experiences from './components/Experiences';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import logo from './images/logo.svg';
import image1 from './images/image1.jpg';
import image2 from './images/medicine.png';
import image3 from './images/roadside.png';
import image4 from './images/code.png';
import image5 from './images/image5.png';
import FleetStatusDashboard from './components/Projects/FleetStatusDashboard'; // Adjust the path as needed

// Placeholder project components
// const FleetStatusDashboard = () => <div style={{ fontFamily: 'sans-serif', fontSize: '60px' }}>Fleet Status Dashboard</div>;
// const WebOrderUX = () => <div style={{ fontFamily: 'sans-serif', fontSize: '60px' }}>Web Order UX</div>;
// const RoadsideReimagined = () => <div style={{ fontFamily: 'sans-serif', fontSize: '60px' }}>Roadside Reimagined</div>;
// const IoTAppDevelopment = () => <div style={{ fontFamily: 'sans-serif', fontSize: '60px' }}>IoT App Development</div>;
// const ATSResume = () => <div style={{ fontFamily: 'sans-serif', fontSize: '60px' }}>ATS Resume</div>;

const App: React.FC = () => {
  const imageList = [
    {
      src: image1,
      alt: 'Description of Image 1',
      projectName: 'Fleet Status Dashboard',
      companyName: 'ZEBRA TECHNOLOGIES',
      path: '/fleet-status-dashboard'
    },
    {
      src: image2,
      alt: 'Description of Image 2',
      projectName: 'Web Order UX',
      companyName: 'CIGNA',
      path: '/web-order-ux'
    },
    {
      src: image3,
      alt: 'Description of Image 3',
      projectName: 'Roadside Reimagined',
      companyName: 'PITSOP',
      path: '/roadside-reimagined'
    },
    {
      src: image4,
      alt: 'Description of Image 4',
      projectName: 'IoT App Development',
      companyName: 'ONSEMI',
      path: '/iot-app-development'
    },
    {
      src: image5,
      alt: 'Description of Image 5',
      projectName: 'ATS Resume',
      companyName: 'PASSION PROJECT',
      path: '/ats-resume'
    },
    // ... add more images as needed
  ];

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <div className="container">
            <div className="navigation-bar">
              <Link to="/">
                <img src={logo} alt="Logo" className="logo" />
              </Link>
              <button className="button">GET IN TOUCH</button>
            </div>
          </div>
        </header>
        <Routes>
          <Route path="/" element={
            <>
              <main className="main">
                <h1 style={{ fontSize: '30px', fontFamily: 'Amiri, sans-serif', color: '#333333', fontWeight: 'normal' }}>
                  Hi there, I'm Nilay. Put simply, I love building things.
                </h1>
                <h2 style={{ fontWeight: 'bold', fontFamily: 'Amiri, sans-serif', fontSize: '30px' }}>
                  Here's (most of) my work so far.
                </h2>
              </main>
              <div className="selected-work">
                <h2>SELECTED WORK</h2>
              </div>
              <Experiences images={imageList} />
            </>
          } />
          <Route path="/fleet-status-dashboard" element={<FleetStatusDashboard />} />
          {/* ... other routes */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;