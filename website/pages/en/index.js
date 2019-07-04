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

    const Card = props => (
      <div className="card">
        <div className="card-content">
          <img className="card-icon" src={`${baseUrl}img/${props.icon}`}></img>
          <p className="header-text-secondary">{props.title}</p>
          <p className="card-description">{props.description}</p>
        </div>
        <div className="ribbon" style={{background: props.ribbonColor}}/>
      </div>
    );

    const Header = () => (
      <img style={{position: "fixed", zIndex: '1'}} src={`${baseUrl}img/header-gradient.svg`}></img>
    );

    const Background = () => (
      <div>
        <img style={{position: "relative"}} src={`${baseUrl}img/home-page-gradient.svg`}></img>
        <img style={{width: '750px;', position: "absolute", top:'175px;', right:'115px;', bottom:'-20'}} src={`${baseUrl}img/home-page-header-chart.svg`}></img>
      </div>
    );

    const FeatureCallout = () => (
      <div
        className="productShowcaseSection paddingBottom"
        style={{ textAlign: 'center' }}>
        <h2>Feature Callout</h2>
        <MarkdownBlock>These are features of this project</MarkdownBlock>
      </div>
    );

    const Innovations = () => (
      <div className="innovations-wrapper">
        <p className="text-centered header-text text-color-purple">Each, an innovation</p>
        <p className="text-centered">Together a breakthrough</p>
        
        <div className="innovations-grid">
          <Card ribbonColor="#601d96" title="Eligibility" description="Intelligent, automated conveyor belt for patient-eligibility and insurance verification, eliminating dozens of manual steps and reducing denials" icon="eligibility-icon.svg"></Card>
          <Card ribbonColor="#48f542" title="Remits" description="Unlocks remittance data to provide business intelligence and analytics + auto-cretaes and rouotes tasks and queues with very little configuration needed" icon="remits-icon.svg"></Card>
          <Card ribbonColor="#4287f5" title="Patient Pay" description="Hi tech patient-centered payment environment automatically calculates and updats patient responsibility - in addition to full paper billing services" icon="patient-pay-icon.svg"></Card>
          <Card ribbonColor="#de0b19" title="Claims" description="Hi tech patient-centered payment environment automatically calculates and updats patient responsibility - in addition to full paper billing services" icon="claims-icon.svg"></Card>
        </div>
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


    var imageSource = `${baseUrl}img/shutterstock_type-by-computer.jpg`;

    const Experience = () => (
        <div className="experience-grid">
        <img className="col-1 exp-img" src={imageSource}></img>
        <p className="col-2 row-1 header-text">Practice made perfect</p>
        <p className="col-2 row-2">In a world gone digital, the healthcare enterprice is one of the slowest adopters. To remedy that, Chorus leverages years of firsthand experience with behavioral health servicing to develop modern technologies that automate business processes and promote quality, reimbursable care</p>
      </div>
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
        <div className="mainContainer">
          <Header/>
          <Background/>
          <Experience/>
          <Innovations/>
          <img src={`${baseUrl}img/work-harder-section.svg`} style={{width: '60%', display:'block', margin:'20px auto 100px auto;'}}></img>
        </div>
      </div>
    );
  }
}

module.exports = Index;
