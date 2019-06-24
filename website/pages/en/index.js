/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {
  render() {
    const { siteConfig, language = '' } = this.props;
    const { baseUrl, docsUrl } = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = props => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const Logo = props => (
      <div className="projectLogo">
        <img src={props.img_src} alt="Project Logo" />
      </div>
    );

    const ProjectTitle = () => (
      <h2 className="projectTitle">
        {siteConfig.title}
        <small>{siteConfig.tagline}</small>
      </h2>
    );

    const PromoSection = props => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    const Button = props => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    return (
      <SplashContainer>
        <Logo img_src={`${baseUrl}img/undraw_monitor.svg`} />
        <div className="inner">
          <ProjectTitle siteConfig={siteConfig} />
          {/* <PromoSection>
            <Button href="http://chorus.nyc">Chorus.Cloud</Button>
            <Button href={docUrl('doc1.html')}>Example Link</Button>
            <Button href={docUrl('doc2.html')}>Example Link 2</Button>
          </PromoSection> */}
        </div>
      </SplashContainer>
    );
  }
}

class Index extends React.Component {
  render() {
    const { config: siteConfig, language = '' } = this.props;
    const { baseUrl } = siteConfig;

    const Block = props => (
      <Container
        padding={['bottom', 'top']}
        id={props.id}
        background={props.background}>
        <GridBlock
          align="center"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

    const FeatureCallout = () => (
      <div
        className="productShowcaseSection paddingBottom"
        style={{ textAlign: 'center' }}>
        <h2>Feature Callout</h2>
        <MarkdownBlock>These are features of this project</MarkdownBlock>
      </div>
    );

    const TryOut = () => (
      <Block id="try">
        {[
          {
            content:
              'Platform agnostic, Chorus plays nice with virtually all existing software, even with limited API availability. And intrinsic modularity enables 10x faster deployment, low-code integration and configuration, and endless scalability/extensibility.',
            image: `${baseUrl}img/undraw_personalization_triu.svg`,
            imageAlign: 'left',
            title: 'Made With You In Mind',
          },
        ]}
      </Block>
    );

    const Description = () => (
      <Block background="light">
        {[
          {
            content:
              'By healthcare professionals, for healthcare professionals. We understand both internal and external requirements, applying cutting-edge, enterprise-grade features like cloud-native design, granular security roles, and our proactive Validation Oracle™—all within strict HIPAA compliance.',
            image: `${baseUrl}img/undraw_experience_design_eq3j.svg`,
            imageAlign: 'right',
            title: 'Built to the latest, highest standards',
          },
        ]}
      </Block>
    );

    const LearnHow = () => (
      <Block background="light">
        {[
          {
            content:
              'Deeply ingrained, systemwide AI helps you get a new grip on patient information, staff performance, business processes and other metrics that help you scale up, unleash revenue, and maximize manpower.',
            image: `${baseUrl}img/undraw_predictive_analytics_kf9n.svg`,
            imageAlign: 'right',
            title: 'Designed for growth hacking',
          },
        ]}
      </Block>
    );

    const Features = () => (
      <Block layout="fourColumn">
        {[
          {
            content: 'Platform agnostic, Chorus plays nice with virtually all existing software, even with limited API availability. And intrinsic modularity enables 10x faster deployment, low-code integration and configuration, and endless scalability/extensibility.',
            image: `${baseUrl}img/undraw_personalization_triu.svg`,
            imageAlign: 'top',
            title: 'Made With You In Mind',
          },
          {
            content: 'By healthcare professionals, for healthcare professionals. We understand both internal and external requirements, applying cutting-edge, enterprise-grade features like cloud-native design, granular security roles, and our proactive Validation Oracle™—all within strict HIPAA compliance.',
            image: `${baseUrl}img/undraw_experience_design_eq3j.svg`,
            imageAlign: 'top',
            title: 'Built to the latest, highest standards',
          },
          {
            content: 'Deeply ingrained, systemwide AI helps you get a new grip on patient information, staff performance, business processes and other metrics that help you scale up, unleash revenue, and maximize manpower.',
            image: `${baseUrl}img/undraw_predictive_analytics_kf9n.svg`,
            imageAlign: 'top',
            title: 'Designed for growth hacking',
          },
        ]}
      </Block>
    );

    const Showcase = () => {
      if ((siteConfig.users || []).length === 0) {
        return null;
      }

      const showcase = siteConfig.users
        .filter(user => user.pinned)
        .map(user => (
          <a href={user.infoLink} key={user.infoLink}>
            <img src={user.image} alt={user.caption} title={user.caption} />
          </a>
        ));

      const pageUrl = page => baseUrl + (language ? `${language}/` : '') + page;

      return (
        <div className="productShowcaseSection paddingBottom">
          <h2>Who is Using This?</h2>
          <p>This project is used by all these people</p>
          <div className="logos">{showcase}</div>
          <div className="more-users">
            <a className="button" href={pageUrl('users.html')}>
              More {siteConfig.title} Users
            </a>
          </div>
        </div>
      );
    };

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
          {/* <Features /> */}
          {/* <FeatureCallout /> */}
          <LearnHow />
          <TryOut />
          <Description />
          <Showcase />
        </div>
      </div>
    );
  }
}

module.exports = Index;
