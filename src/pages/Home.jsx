import {Container, Row, Col} from 'react-bootstrap';
import {HeroImage} from '../assets/hero.gif';

const Home = () => {
  return (
    <div className="home">
      <header className="w-100 min-vh-100">
        <Container>
          <Row className='header-box'>
            <Col>
              <img src={HeroImage} alt="hero-img" />
            </Col>
            <Col>
              <h1 className='fs-1 fw-bold text-light'>Hello Everyone!!</h1>
              <h3 className='fs-3 fw-bold text-light'>I'm Reifal Hafizh Satria</h3>
              <p className='fw-medium text-light'>I am a student at Dian Nuaswantoro University, I like anything related to programming, because coding is fun..!!</p>
            </Col>
          </Row>
        </Container>
      </header>
    </div>
  )
}

export default Home