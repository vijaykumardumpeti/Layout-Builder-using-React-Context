import {Component} from 'react'

import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

export default class ConfigurationController extends Component {
  render() {
    return (
      <ConfigurationContext.Consumer>
        {value => {
          const {
            showContent,
            showLeftNavbar,
            showRightNavbar,
            onToggleShowContent,
            onToggleShowLeftNavbar,
            onToggleShowRightNavbar,
          } = value
          console.log(showContent)

          this.toggleShowContent = () => {
            onToggleShowContent()
          }

          this.toggleShowLeftNavbar = () => {
            onToggleShowLeftNavbar()
          }

          this.toggleShowRightNavbar = () => {
            onToggleShowRightNavbar()
          }

          return (
            <nav className="nav-container">
              <h1 className="layout-heading">Layout</h1>
              <div>
                <input
                  checked={showContent}
                  onChange={this.toggleShowContent}
                  value={showContent}
                  id="content"
                  type="checkbox"
                />
                <label className="label" htmlFor="content">
                  Content
                </label>
              </div>
              <div>
                <input
                  checked={showLeftNavbar}
                  onChange={this.toggleShowLeftNavbar}
                  value={showLeftNavbar}
                  id="left navbar"
                  type="checkbox"
                />
                <label className="label" htmlFor="left navbar">
                  Left Navbar
                </label>
              </div>
              <div>
                <input
                  checked={showRightNavbar}
                  value={showRightNavbar}
                  onChange={this.toggleShowRightNavbar}
                  id="right navbar"
                  type="checkbox"
                />
                <label className="label" htmlFor="right navbar">
                  Right Navbar
                </label>
              </div>
            </nav>
          )
        }}
      </ConfigurationContext.Consumer>
    )
  }
}
