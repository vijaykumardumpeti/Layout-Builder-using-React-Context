import {Component} from 'react'

import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

export default class Layout extends Component {
  render() {
    return (
      <ConfigurationContext.Consumer>
        {value => {
          const {showContent, showLeftNavbar, showRightNavbar} = value
          return (
            <div className="layout-bg-container">
              <div className="header">
                <h1>Header</h1>
              </div>

              <div className="content-container">
                {showLeftNavbar ? (
                  <ul className="container left-navbar-menu">
                    <h1>Left Navbar Menu</h1>
                    <li>item 1</li>
                    <li>item 2</li>
                    <li>item 3</li>
                    <li>item 4</li>
                  </ul>
                ) : (
                  ''
                )}
                {showContent ? (
                  <div className="container content">
                    <h1>Content</h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      allqua. Ut enim ad minim veniam.
                    </p>
                  </div>
                ) : (
                  ''
                )}
                {showRightNavbar ? (
                  <div className="container right-navbar">
                    <h1>Right Navbar</h1>
                    <div className="box">
                      <p>Ad 1</p>
                    </div>
                    <div className="box">
                      <p>Ad 2</p>
                    </div>
                  </div>
                ) : (
                  ''
                )}
              </div>

              <div className="footer header">
                <h1>Footer</h1>
              </div>
            </div>
          )
        }}
      </ConfigurationContext.Consumer>
    )
  }
}
