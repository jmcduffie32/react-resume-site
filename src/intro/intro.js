import React from 'react';

class Intro extends React.Component {
  render() {
    return (
      <div id="intro">
        <div className="container">
          <div className="row">

            <div className="col-lg-2 col-lg-offset-1">
              <h5>ABOUT</h5>
            </div>
            <div className="col-lg-6">
              <p>I'm a programmer, web developer, and seeker of really awesome things. I'm interested in programming, astrophysics, cryptography, and just generally learning cool things. I'm also a published black hole researcher.</p>
            </div>
            <div className="col-lg-3">
              <p>
                <a href="/assets/pdf/JonMcDuffie.pdf">
                  <i className="fas fa-file"></i>
                </a>
                <sm>DOWNLOAD RESUME</sm>
              </p>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default Intro;