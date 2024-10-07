import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import { ListGroup } from 'react-bootstrap';
import Profile from '../assets/profile-pic.jpg';

function Copy() {
  navigator.clipboard.writeText("gavin@fallingonline.com");
  alert("Email Copied to Clipboard");
}

function Home() {
  return(
    <Container data-bs-theme="dark" className='py-5'>
      <Row className='mb-0'>
        <div className='col-7 col-md-5 col-lg-4 col-xl-3 mx-auto'>
          <Card>
            <Card.Img variant='top' src={Profile} className='w-100'/>
            <Card.Body className='p-1'>
              <Accordion data-bs-theme="dark" flush>
                <Accordion.Item eventKey='0'>
                  <Accordion.Header>Personal Contact Info</Accordion.Header>
                  <Accordion.Body>
                    <i className="bi bi-envelope-fill me-3"></i>
                    <Card.Link style={{cursor: "pointer"}} onClick={Copy}>gavin@fallingonline.com</Card.Link>
                    <hr />
                    <i className="bi bi-linkedin me-3"></i>
                    <Card.Link href='http://www.linkedin.com/in/gavin-mcguinness-csi'>My LinkedIn</Card.Link>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Card.Body>
          </Card>
        </div>
        <div className='col-md-7 col-lg-8 col-xl-9 my-0-lg mt-5 mt-md-0'>
          <Card className='border h-100'>
            <Card.Body>
              <Card.Title>My Objective</Card.Title>
              <hr></hr>
              <Card.Text>
                My current objective for is to find any internship, volunteer position,
                or job position at any pay, where I can gain programming experience 
                while learning how to program better, develop on a team, and learn
                about industry standards. After gaining experience on front and back end
                web development, I would then like to start working on lower level 
                programming and eventually learn how to make tools for web development
                such as build tools.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </Row>

      <Accordion defaultActiveKey="0" data-bs-theme="dark" className='mt-5'>
        <Accordion.Item eventKey="0">
          <Accordion.Header>My Bio</Accordion.Header>
          <Accordion.Body>
            I am a first-year student at The University of Georgia studying computer
            science and Russian. We are currently studying Java in our computer science
            classes, but outside of that I have been diving deep into web development, 
            learning about HTML, CSS, JavaScript, as well as how to use component libraries,
            how to make single page applications, react, and how to build REST APIs. On the 
            Russian front, this is my first year learning any foreign language, and I have
            decided to join the Russian flagship program. This summer, we are currently planning
            to go to Armenia and Georgia to further enhance our speaking abilities. I am currently 
            sitting at an intermediate low rating.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>My Coding Goals</Accordion.Header>
          <Accordion.Body className='ps-2 px-0'>
            <Row className='mx-5'>
              <ListGroup className='col-xl-6 mb-xl-0 mb-3'>
                <ListGroup.Item variant='dark'><strong>Web Development</strong></ListGroup.Item>
                <ListGroup.Item variant='light'>Learn MUI and other component libraries</ListGroup.Item>
                <ListGroup.Item variant='light'>How to use TypeScript better</ListGroup.Item>
                <ListGroup.Item variant='light'>Learn NX</ListGroup.Item>
                <ListGroup.Item variant='light'>Learn progressive web app development</ListGroup.Item>
                <ListGroup.Item variant='light'>Learn Angular</ListGroup.Item>
                <ListGroup.Item variant='light'>Learn React Native and / or Flutter</ListGroup.Item>
              </ListGroup>
              <ListGroup className='col-xl-6 mb-xl-0 mb-3'>
                <ListGroup.Item variant='dark'><strong>Other Future Goals</strong></ListGroup.Item>
                <ListGroup.Item variant='light'>Native app development for iOS, Android, and Windows</ListGroup.Item>
                <ListGroup.Item variant='light'>Lower level programming with Rust </ListGroup.Item>
                <ListGroup.Item variant='light'>How to make programming languages</ListGroup.Item>
                <ListGroup.Item variant='light'>Explore programming AI</ListGroup.Item>
              </ListGroup>
            </Row>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>More About Me</Accordion.Header>
          <Accordion.Body>
            Throughout my time learning about web development, I have developed a passion for  
            it and easily spend many hours of my free time learning about new concepts or building 
            projects. Music is also a passion of mine and I love to play the piano and accordion. I  
            am currently learning Choppin Ballade 1 and All of Me on piano, and on accordion I am  
            learning Bach Toccata and Fuge. I am also thinking next year I will pick up trumpet  
            again, and join the UGA Red Coats. 
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  )
}

export default Home