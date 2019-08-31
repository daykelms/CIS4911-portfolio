import React from "react";
import {Cell, Grid} from 'react-mdl';



class LandingPage extends React.Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://avatars2.githubusercontent.com/u/37645764?s=460&v=4"
              alt="avatar"
              className="avatar-img"
            />
            <div className="banner-text">
              <h1> Software_Engineer</h1>
            </div>
            <br/>
            <div className="banner-paragraph">
              <p> HTML/CSS | React JS | JavaScript |PostgreSQL | Java | Spring</p>
              <hr/>
              <div className="social-link">
                <a href="https://www.linkedin.com/in/daykel-muro" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-linkedin-square" aria-hidden="true"/>
                </a>
                <a href="https://twitter.com/CITServ" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-twitter-square" aria-hidden="true"/>
                </a>
                <a href="https://github.com/daykelms" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-github-square" aria-hidden="true"/>
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}
export default LandingPage;
