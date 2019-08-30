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
              <h1> Software_Developer</h1>
            </div>
            <br/>
            <div className="banner-paragraph">
              <p> HTML/CSS | React JS | Javascript | PostgreSQL | Java | Spring</p>
              <hr/>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}
export default LandingPage;
