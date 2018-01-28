import React from 'react';
import ProgrammerImg from './programmer.png';

class Headwrap extends React.Component {
  render() {
    return (
      <div id="headerwrap">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <img className="img-fluid"
                alt="Programmer at a desk"
                src={ProgrammerImg} />
              <div className="col-lg-7" id="tagline">
                <h1>Jon McDuffie</h1>
                <h3>Programmer, Problem Solver | jon@jrmcduffie.com</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Headwrap;