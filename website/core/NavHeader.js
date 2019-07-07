const React = require('react');

class NavHeader extends React.Component {
    render() {
        var props = this.props;
        var theme = this.props.theme;
        return (
            <div className={theme == 'dark' ? 'css-header dark-header' : 'css-header light-header'}>
                <a href="/" class="logo"><image src={`${props.baseUrl}img/${theme == 'dark' ? 'chorus-white-icon' : 'chorus-colored-icon'}.svg`}></image></a>
                <div className="header-right">
                    <a href="/">Home</a>
                    <a href="/modules">Modules</a>
                    <a href="/docs/ChorusCloudOverview">Compositions</a>
                    <a href="/about">About</a>
                    <a href="/contact">Contact</a>
                </div>
            </div>
        );
    }
}

module.exports = NavHeader;