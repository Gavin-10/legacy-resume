import { Container } from "react-bootstrap"
import { Accordion } from "react-bootstrap"
import { Nav } from "react-bootstrap"

import { Outlet } from 'react-router-dom';

import { useState } from "react";

import { useNavigate } from "react-router-dom";

function About() {
  const initialSelected = (window.location.pathname).substring(17, 21);
  const [selected, setSelected] = useState(initialSelected);
  const navigate = useNavigate();

  
  return(
    <Container data-bs-theme="dark" className="text-white py-5" id="top">
      <h1>About This Website</h1>
      <hr></hr>

      <Accordion defaultActiveKey="0" data-bs-theme="dark" className='mt-5'>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Front End</Accordion.Header>
          <Accordion.Body>
            The front end of this web app utilizes some of the most modern dev  
            tools and coding practices. The individual pages are made from tsx  
            components using react, and are put together using the react router  
            dom. The router is specifically a data router which also uses actions  
            and loaders to pass data throughout the website. Finally, the web app  
            is encompassed by Vite for optimal speed through pre bundling and compiling  
            the web app to a single page application. 
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Styling</Accordion.Header>
          <Accordion.Body>
            Styling on this page comes from bootstrap, and specifically, the react bootstrap 
            library to maximize react components. Bootstrap was chosen for this web app because 
            of bootstraps mobile first approach. The custom color scheme comes from sass files 
            which are set up as instructed on the bootstrap website. Finally, the only true custom
            styling component is the color change animation on the "Gavin McGuinness" link which is 
            also done using sass. 
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Back End</Accordion.Header>
          <Accordion.Body>
            The back end is a separate web app made with express to handle  
            GET and POST requests made by the front end. These requests are handled  
            using Axios to connect the two web apps. The back end only allows 
            requests from the front-end web app and no other website in order to  
            maintain data security. In the back-end server, there is a Mongo driver 
            to pass any data requests to the mongo server. The server has  
            one database for this web app with two columns, one for the database demonstration,  
            and one for submitted messages. Below is a demonstration of form handling  
            where you can submit a document to the database through the rest Api and query 
            it back again for 1 MINUTE before it is automatically deleted. You can only  
            submit one document at a time and must wait for it to be deleted before submitting  
            another one. 
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <Nav variant="tabs" className="mt-5" activeKey={selected}>
        <Nav.Item>
          <Nav.Link eventKey="data" onClick={() => {
            setSelected("data")
            navigate("data-form");
            }}>
              Form
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="fake" onClick={() => {
            setSelected("fake")
            navigate("fake-document")
            }}>
              Document
          </Nav.Link>
        </Nav.Item>
      </Nav>

      <Outlet />
    </Container>
  )
}

export default About