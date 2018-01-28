import React from 'react';
import Doughnut from 'react-chartjs-2';
import * as skillsData from './skillsData';

class Skills extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      skills: skillsData
    };
  }

  render() {
    var skills = this.state.skills.map((skill) => {
      return (
        <div className="col-md-3">
          <p className="centerd">{skill.name}</p>
          <Doughnut data={skill.data} />
        </div>
      );
    });

    return (
      <div id="skillswrap">
        <div className="container">
          <div className="row">
            <div className="col-lg-1 col-lg-offset-1">
              <h5>SKILLS</h5>
            </div>
          </div>
          <div className="row">
            {skills}
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;