import React from 'react';

class Education extends React.Component {
  render() {
    return (
      <div className="container desc">
        <div className="row">

          <div className="col-lg-2 col-lg-offset-1">
            <h5>EDUCATION</h5>
          </div>
          <div className="col-lg-6">
            <p><t>Master of Arts - Teaching</t><br />
              Kennesaw State University <br />

            </p>
          </div>
          <div className="col-lg-3">
            <p><sm>July, 2012</sm><br />
            </p>
          </div>

          <div className="col-lg-6 col-lg-offset-3">
            <p><t>B.S. Physics</t><br />
              Georgia Institute of Technology <br />

            </p>
          </div>
          <div className="col-lg-3">
            <p><sm>June, 2011 </sm></p>
          </div>

        </div>
        <br />
        <hr />
      </div>

    );
  }
}

export default Education;