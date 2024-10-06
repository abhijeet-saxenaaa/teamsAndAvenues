import React from 'react';
import './TeamsAndAvenues.css';

const TeamsAndAvenues = () => {
  return (
    <div className="teams-container">
      <h1>Meet Our Technical Team</h1>
      
      <div className="card-container">
        {/* Director Card */}
        <div className="team-card">
          <img
            src="director.jpg"
            alt="Team Director"
            className="team-image"
          />
          <h3>Rishabh Mishra</h3>
          <p>Team Director</p>
          <p>Email: abc@gmail.com</p>
          <p>Phone: 0000000000</p>
        </div>

        {/* Co-Director Card */}
        <div className="team-card">
          <img
            src="co-director.jpg"
            alt="Co-Director"
            className="team-image"
          />
          <h3>Abhijeet Saxena</h3>
          <p>Co-Director</p>
          <p>Email: abc@gmail.com</p>
          <p>Phone: 0000000000</p>
        </div>
      </div>

      {/* Other Team Members */}
      <div className="team-members">
        <h2>Our Team Members</h2>
        <ul>
          <li>Member 1</li>
          <li>Member 2</li>
          <li>Member 3</li>
          <li>Member 4</li>
          <li>Member 5</li>
          <li>Member 6</li>
        </ul>
      </div>

      {/* Team Guiding Values */}
      <div className="guiding-values">
        <h2>Team Guiding Values</h2>
        <p>
        Our technical team thrives on innovation, continuously exploring emerging technologies to solve complex challenges. Collaboration is at our core, as we harness diverse skills to work efficiently and creatively. We embrace a growth mindset, with each member committed to continuous learning and improvement. Integrity and accountability drive our commitment to delivering high-quality, reliable solutions. Above all, we are impact-driven, focused on creating technology that brings meaningful and lasting change, both now and in the future.
        </p>
      </div>
    </div>
  );
};

export default TeamsAndAvenues;
