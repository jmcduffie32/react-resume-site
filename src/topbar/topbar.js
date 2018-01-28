import React from 'react';

class Topbar extends React.Component {
  render() {
    return (
      <div id="section-topbar">
        <div id="topbar-inner">
          <div class="container">
            <div class="row">
              <div class="dropdown">
                <ul id="nav" class="nav">
                  <li class="menu-item">
                    <a class="smoothScroll"
                      href="#about"
                      title="About">
                      <i class="fas fa-user"></i>
                    </a>
                  </li>

                  <li class="menu-item">
                    <a class="smoothScroll" href="#resume" title="Resume">
                      <i class="fas fa-file"></i>
                    </a>
                  </li>

                  <li class="menu-item">
                    <a class="smoothScroll" href="#work" title="Works">
                      <i class="fas fa-briefcase"></i>
                    </a>
                  </li>

                  <li class="menu-item">
                    <a class="smoothScroll" href="#contact" title="Contact">
                      <i class="fas fa-envelope"></i>
                    </a>
                  </li>

                  <li class="menu-item">
                    <a href="/blog" id="blog-link" title="Blog">BLOG</a>
                  </li>
                </ul>
              </div>

              <div class="clear">
              </div>
            </div>
          </div>

          <div class="clear">
          </div>
        </div>
      </div>

    );
  }
}

export default Topbar;