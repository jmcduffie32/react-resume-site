import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <div>
        <div id="footwrap">
          <div className="container">
            <div className="row">

              <div className="col-lg-2 col-lg-offset-1">
                <h5>CONTACT</h5>
              </div>
              <div className="col-lg-6">
                <p><t>Email</t><br />
                  jon@jrmcduffie.com <br />
                </p>


              </div>
              <div className="col-lg-3">
                <p><sm>SOCIAL LINKS</sm></p>
                <p>
                  <a href="http://lnkd.in/bD3DGMs"><i className="fab fa-linkedin"></i></a><a href="https://github.com/jmcduffie32"><i class="fab fa-github-square"></i></a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div id="c">
          <div className="container">
            <p>Created by Jon McDuffie</p>

          </div>
        </div>
      </div>
    );
  }
}

export default Footer;