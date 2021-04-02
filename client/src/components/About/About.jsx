import React from 'react';
import "./About.css";

export function About() {
    return (
        <div className="header">
            <div className="title">
                <h2>
                    Henry Labs: Individual project
        </h2>
            </div>
            <div className="text">
                <h3>Built with React, Redux, CSS3, Express & Sequelize - Postgres
            <br />
            March, 2021. </h3>
                <div className="credits">
                    <h2>Credits</h2>
                </div>
                <div className="textTwo">
                    <h3>RAWG Api </h3>
                </div>
            </div>
        </div>
    )
};

export default About;