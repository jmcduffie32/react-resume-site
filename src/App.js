import React, { Component } from 'react';
import './App.css';

import Topbar from './topbar/topbar';
import Headwrap from './headwrap/headwrap';
import Intro from './intro/intro';
import Education from './education/education';
import Work from './work/work';
import Research from './research/research';
import Footer from './footer/footer';
import Portfolio from './portfolio/portfolio';
import Skills from './skills/skills';

class App extends Component {
  render() {
    return (
      <div>
        <Topbar />
        <Headwrap />
        <Intro />
        <Education />
        <Work />
        <Research />
        <Skills />
        <Portfolio />
        <Footer />
      </div>
    );
  }
}

export default App;
