import React from 'react';

class Work extends React.Component {
  render() {
    return (
      <div className="container desc">
        <div className="row">
          <div className="col-lg-2 col-lg-offset-1">
            <h5>OPEN SOURCE</h5>
          </div>
          <div className="col-lg-6">
            <p>
              <t>Calagator</t>
            </p>
            <p>
              <more>
                Calagator is an open source ruby gem for creating a community event aggregator.
                I've contributed to many different areas of the codebase inlcuding: the
                styles for mobile devices, the ruby code for impelementing a date-based
                event filter, and some javascript to handle user-interaction on the front-end.
              </more>
            </p>
          </div>
          <div className="col-lg-3">
            <p><sm>MAY 2015 - CURRENT</sm></p>
          </div>

          <div className="col-lg-6 col-lg-offset-3">
            <p>
              <t>NewDevATL</t>
            </p>
            <p>
              <more>
                NewDevATL is a project started by the Atlanta participants in FreeCodeCamp.
                The purpose of the project is to provide a beginner-friendly list of resources
                for new developers in the Atlanta region. This is a new project, and I
                am larely responsible for the creation of the initial codebase including:
                web design and javascript functionality.
              </more>
            </p>
          </div>
          <div className="col-lg-3">
            <p><sm>MAY 2015 - CURRENT</sm></p>
          </div>


          <div className="col-lg-2 col-lg-offset-1">
            <h5>WORK</h5>
          </div>
          <div className="col-lg-6">
            <p><t>Physics Teacher</t><br />
              River Ridge High School <br />
            </p>
            <p><more>I taught AP physics at River Ridge High School. I supervised numerous clubs and teams including the Science Olympiad team, the ping pong club, ultimate frisbee club, Mathematical Modeling team, and the cyber security team. </more></p>
          </div>
          <div className="col-lg-3">
            <p><sm>JULY 2013 - JUNE 2015</sm></p>
          </div>

          <div className="col-lg-6 col-lg-offset-3">
            <p><t>Math &amp; Science Teacher</t><br />
              Berrien County High School <br />
            </p>
            <p><more>I taught Math II and Physical Science at a rural school in south Georgia.</more></p>
          </div>
          <div className="col-lg-3">
            <p><sm>JULY 2012 - JUNE 2013</sm></p>
          </div>
        </div>
        <br />
        <hr />
      </div>

    );
  }
}

export default Work;