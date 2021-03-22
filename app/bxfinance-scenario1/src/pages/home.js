// Packages
import React from 'react';
import { Button, Jumbotron, Container, Row, Col } from 'reactstrap';

// Components
import NavbarMain from '../components/NavbarMain';
import CardRewards from '../components/CardRewards/';
import FooterMain from '../components/FooterMain';
import TrackingInput from '../components/TrackingInput';
import BottomBar from '../components/BottomBar';

// Data
import data from '../data/home.json';

// Styles
import '../styles/pages/home.scss';

function Home() {
  return (
    <div className="home">
      <div
        className={'homePageDiv'}
      >
      <NavbarMain></NavbarMain>
      <div
        className="mainPageBodyPhoto"
      >
        <TrackingInput/>
      </div>
      <div
        style={{
          textAlign: 'center',
          padding: '48px 300px 48px 300px'
        }}
      >
        <h2>
          Our roots in sustainability run deep
        </h2>
        <br/>
        <p>
          FedEx is designating more than $2 billion of initial investment in three key areas: vehicle
          electrification, sustainable energy, and carbon sequestration, with a goal of becoming carbon
          neutral by 2040. Learn about our sustainability efforts.
        </p>
      </div>

      {/* Manage your shipments and returns
      <h3>

      </h3> */}
      {/* <Jumbotron fluid className="jumbotron-hero-home" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/images/home-hero-background.jpg)`}}>
        <Container>
          <Row>
            <Col md="6" lg="8">
              <h1 className="display-3" dangerouslySetInnerHTML={{__html: data.hero.title}}></h1>
              <p className="lead">{data.hero.subtitle}</p>
              <Button color="primary">{data.hero.button}</Button>
            </Col>
            <Col md="6" lg="4">
              <CardRewards />
            </Col>
          </Row>
        </Container>
      </Jumbotron>
      <section className="section-home-cta-bar">
        <Container>
          <h3 dangerouslySetInnerHTML={{__html: data.cta_bar}}></h3>
        </Container>
      </section>
      <section className="section-home-features">
        <Container>
          <Row>
            {data.features.map((item, i) => {
              return (
                <Col md="4" key={i}>
                  <h4>{item.title}</h4>
                  <p>{item.content}</p>
                  <Button color="link" className="text-info">{item.button}</Button>
                </Col>
              );
            })}
          </Row>
        </Container>
      </section> */}
      {/* <FooterMain></FooterMain> */}
      </div>
      <BottomBar/>
    </div>
  );
}

export default Home;
