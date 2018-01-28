import React from 'react';

class Research extends React.Component {
  render() {
    return (
      <div className="container desc">
        <div className="row">
          <div className="col-lg-2 col-lg-offset-1">
            <h5>RESEARCH</h5>
          </div>
          <div className="col-lg-6">
            <p><t>A Correlation Between the Ionization State of the Inner Accretion Disk and the Eddington Ratio of Active Galactic Nuclei</t><br />
              Pdf here: <a href="assets/pdf/research.pdf"><i className="fas fa-file"></i></a><br />
            </p>
          </div>
          <div className="col-lg-3">
            <p><sm>APRIL 2011</sm></p>
          </div>
        </div>
        <br />
      </div>
    );
  }
}

export default Research;