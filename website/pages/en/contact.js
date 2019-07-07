const React = require('react');
const NavHeader = require(process.cwd() + '/core/NavHeader.js');

class Contact extends React.Component {
    render() {
      const { config: siteConfig, language = '' } = this.props;
      const { baseUrl } = siteConfig;

      return (
        <div>
          <NavHeader baseUrl={baseUrl} theme="light"/>
          <div className="page-content">
            <h1>Contact us</h1>
            <ul>
              <li>Email us</li>
              <li>Call us</li>
              <li>Live chat</li>
            </ul>
          </div>
        </div>
      );
    }
  }

  module.exports = Contact;