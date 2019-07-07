/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');
const NavHeader = require(process.cwd() + '/core/NavHeader.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class Index extends React.Component {
  render() {
    const { config: siteConfig, language = '' } = this.props;
    const { baseUrl } = siteConfig;

    const Card = props => (
      <div className="card">
        <div className="card-content">
          <img className="card-icon col-1" src={`${baseUrl}img/${props.icon}`}></img>
          <p className="header-text-secondary col-2 card-header">{props.title}</p>
          <p className="card-description">{props.description}</p>
        </div>
        <div className="ribbon" style={{background: props.ribbonColor}}/>
      </div>
    );

    const Background = () => (
      <div>
        <img style={{position: "relative"}} src={`${baseUrl}img/home-page-gradient.svg`}></img>
        <img style={{width: '35%;', position: "absolute", top:'5%;', right:'115px;', bottom:'-20'}} src={`${baseUrl}img/home-page-header-chart.svg`}></img>
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

    var imageSource = `${baseUrl}img/shutterstock_type-by-computer.jpg`;

    const Experience = () => (
        <div className="experience-grid">
        <img className="col-1 exp-img" src={imageSource}></img>
        <p className="col-2 row-1 header-text">Practice made perfect</p>
        <p className="col-2 row-2">In a world gone digital, the healthcare enterprice is one of the slowest adopters. To remedy that, Chorus leverages years of firsthand experience with behavioral health servicing to develop modern technologies that automate business processes and promote quality, reimbursable care</p>
      </div>
    );

    return (
        <div>
          <NavHeader baseUrl={baseUrl} theme="dark"/>
          <div className="page-content">
            <Background/>
            <Experience/>
            <Innovations/>
            <object data={`${baseUrl}img/work-harder-section.svg`} type="image/svg+xml" style={{width: '60%', display:'block', margin:'20px auto 100px auto;'}}></object>
          </div>
        </div>
    );
  }
}

module.exports = Index;
