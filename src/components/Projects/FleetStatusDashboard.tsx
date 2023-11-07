// FleetStatusDashboard.tsx

import React from 'react';
import './FleetStatusDashboard.scss';
import image1 from '../../images/image1.jpg'; // Path to the first image
import projectImage from '../../images/Dev1.png'; // Path to the project image
import FetchCore from '../../images/FetchCore.jpg'; // Path to the FetchCore image

const FleetStatusDashboard: React.FC = () => {
  return (
    <div className="project-page">
      <div className="content-container">
        <h1>Fleet Status Dashboard</h1>
        <div className="info-section">
          <div className="info-column">
            <div className="title">CLIENT</div>
            <div className="detail">Fetch Robotics</div>
          </div>
          <div className="info-column">
            <div className="title">ROLE</div>
            <div className="detail">Robotics Product Management Intern</div>
          </div>
          <div className="link-column">
            <div className="title">LINK</div>
            <div className="detail">
              <a href="https://fetchrobotics.com/cloud-software/" target="_blank" rel="noopener noreferrer">
                fetchrobotics.com/cloud-software/
              </a>
            </div>
          </div>
        </div>
        
        <img src={image1} alt="Fleet Status Dashboard display" className="dashboard-image" />

        {/* First Image */}
        <img src={FetchCore} alt="Fleet Status Dashboard display" className="dashboard-image-fetchcore" />

        {/* About section */}
        <div className="about-section">
          <h2>About</h2>
          <p>
            Fetch Core is an advanced Fleet Management System Software developed for Autonomous Mobile Robots (AMRs) at Fetch Robotics, 
            which is now a part of Zebra Technologies. As a cornerstone application, Fetch Core orchestrates the operation of an impressive 
            fleet, engaging over 150 customers and managing approximately 60,000 AMRs.
          </p>
          {/* <p>
            During my tenure as a Robotics Product Management Intern, I spearheaded the product team
            through strategic planning, meticulous implementation, and successful launch. My role necessitated 
            a dynamic collaboration with a broad spectrum of stakeholders, including the UI/UX Design team, the 
            Software Development Team, and Project Managers, as well as direct interaction with the end-users. 
            My contributions were pivotal in drafting the product design within Figma and instrumental in 
            developing intuitive dashboards on Looker Studio utilizing LookML and HTML, backed by Snowflake databases.
          </p> */}

          <p>
          In my role as a Robotics Product Management Intern, I led the product team in strategizing, implementing, and 
          launching this innovative product. Collaborating with stakeholders such as the UI/UX Design team, Software Developers, 
          Project Managers, and users, I was integral in shaping the product's design with Figma and developing user-centric dashboards 
          in Looker Studio with LookML and HTML, leveraging Snowflake databases.
          </p>
        </div>

        {/* Project summary text container */}
        <div className="project-summary-text">
          Effortless Oversight with a Glance: The All-in-One Fleet Status Dashboard for Peak Operational Efficiency.
        </div>

        {/* Fully-refreshed view of the Fleet Status Dashboard */}
        <figure>
          <img src={projectImage} alt="Fully-refreshed Fleet Status Dashboard" className="project-detail-image" />
          <figcaption>A fully-refreshed view of the Fleet Status Dashboard</figcaption>
        </figure>
        
        {/* Testimonial section */}
        <div className="testimonial-section">
          <blockquote>
            “This updated dashboard is exactly what we've been waiting for. It's intuitive, comprehensive, and has significantly enhanced our operational workflow. A game-changer for sure!”
          </blockquote>
          {/* <cite>— Jordan Smith, Operations Manager</cite> */}
          <cite>JORDAN SMITH, OPERATIONS MANAGER</cite>
        </div>

        {/* Conclusion section */}
        <div className="conclusion-section">
          <h2>Conclusion</h2>
          <p>
          {/* Working at Fetch Robotics was an extraordinarily challenging yet rewarding experience. I joined the team as a 
          Product Management Intern and helped build an incredible analytics dashboard for the Application Engineers and 
          developers. This tool aided in improving the mislocalization software within the AMR fleet. Additionally, I 
          contributed to the introduction of a newly-refreshed dashboard that customers enjoy using and supported the 
          Strategic Innovations Team by automating the process of calculating the Average Selling Price (ASP) for our product 
          lineup. When my journey with the company concluded, I took with me a wealth of skills and knowledge that came from 
          working at a high-growth startup with products that are built by a few and loved by many. */}
          Working at Fetch Robotics was an extraordinarily challenging yet rewarding experience. I joined the team as a 
          Product Management Intern and helped build a newly-refreshed dashboard that customers enjoy using. When my journey 
          with the company concluded, I took with me a wealth of skills and knowledge that came from 
          working at a high-growth startup with products that are built by a few and loved by many.
          </p>
        </div>

        {/* ... other cont .. */}
      </div>
    </div>
  );
};

export default FleetStatusDashboard;
