import React from "react";
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Main from './components/main';
import {Link} from 'react-router-dom';
import "./App.css";

function App() {
  return (
    <div className="demo-big-content">
      <Layout>
        <Header className="header-color" title="MY PORTFOLIO" scroll>
          <Navigation>
            <Link to="/landingpage">Home</Link>
            <Link to="/resume">Resume</Link>
            <Link to="/projects">Projects</Link>
          </Navigation>
        </Header>
        <Drawer title="MY PORTFOLIO">
          <Navigation>
            <Link to="/landingpage">Home</Link>
            <Link to="/resume">Resume</Link>
            <Link to="/projects">Projects</Link>
          </Navigation>
        </Drawer>
        <Content>
          <div className="page-content" />
          <Main />
        </Content>
      </Layout>
    </div>
  );
}

export default App;
