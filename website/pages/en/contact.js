const React = require('react');

class Contact extends React.Component {
    render() {
      return (
        <div>
          <h1>Contact us</h1>
          <ul>
            <li>Email us</li>
            <li>Call us</li>
            <li>Live chat</li>
          </ul>
        </div>
      );
    }
  }

  module.exports = Contact;