const React = require('react');
const NavHeader = require(process.cwd() + '/core/NavHeader.js');

class Compositions extends React.Component {
    render() {
      const { config: siteConfig, language = '' } = this.props;
      const { baseUrl } = siteConfig;

      return (
        <div>
          <NavHeader baseUrl={baseUrl} theme="light"/>
          <div className="page-content">
          </div>
        </div>
      );
    }
  }

  module.exports = Compositions;