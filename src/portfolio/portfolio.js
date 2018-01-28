import React from 'react';

class Portfolio extends React.Component {
  render() {
    return (
      <div className="container desc">
        <div className="row">
          <div className="row">
            <div className="col-lg-2 col-lg-offset-1">
              <h5>PORTFOLIO</h5>
            </div>
            <div className="col-lg-6">
              <p>
                <a href="http://www.mcduffphysics.com">
                  <img className="img-fluid" src="assets/img/website.JPG" alt="" />
                </a>
              </p>
            </div>
            <div className="col-lg-3">
              <p>MCDUFFPHYSICS.COM</p>
              <p>
                I designed and developed a database backed website to manage
                  my classes. I developed my own homework platform for assigning,
                  checking, and grading physics homework. Languages Used: PHP,
                  Javascript, SQL
                  <br />
                <br />
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6 col-lg-offset-3">
              <p>
                <a href="http://www.calagator.org">
                  <img className="img-fluid" src="assets/img/calagator.png" alt="" />
                </a>
              </p>
            </div>
            <div className="col-lg-3">
              <p>Calagator.org</p>
              <p>I have been contributing to the development of the Calagator
                         rails engine. Calagator is an open source community calendaring
                          platform. My contributions have primarily been front end contributions.
                           I redesigned many of the mobile page styles and contributed to
                            refactoring the JavaScript to make it compatible with Turbolinks.
                             I have also contributed to the ruby code as well by
                              implementing a time-based filter option.
                        <br />
                <br />
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6 col-lg-offset-3">
              <p>
                <a href="http://leahw.github.io/NewDevATL/">
                  <img className="img-fluid" src="assets/img/newDevAtl.png" alt="" />
                </a>
              </p>
            </div>
            <div className="col-lg-3">
              <p>New Dev ATL</p>
              <p>
                I designed the page to merge the color scheme of Material Design Lite with the grid system of the Foundation framework.
                              The goal of this porject is to create a helpful resource for new
                              developers in the Atlanta Area.
                              <br />
                <br />
              </p>
            </div>
          </div>
        </div>

        <br />
        <br />
      </div>
    );
  }
}

export default Portfolio;