import { Container } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { Form } from "react-bootstrap"
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import 'bootstrap-icons/font/bootstrap-icons.css'
import { Outlet, Form as RouterForm } from 'react-router-dom';

function Contact() {
  return(
    <Container data-bs-theme="dark" className='my-5 text-white'>
      <h1>Automated Message</h1>
      <hr />

      <Outlet />

      <Card className='border mt-5'>
        <Card.Body>
          <RouterForm method='POST' id='automated-message'>
            <Form.Label>Contact Info:</Form.Label>

            <Form.Group className="mb-3" controlId="firstName">
              <Form.Control name='firstName' type="text" placeholder="First Name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="lastName">
              <Form.Control name='lastName' type="text" placeholder="Last Name" />
            </Form.Group>

            <InputGroup className="mb-3">
              <InputGroup.Text><i className="bi bi-building-fill"></i></InputGroup.Text>
              <Form.Control id='company' name='company' placeholder="Company" aria-describedby='company'/>
            </InputGroup>

            <InputGroup className="mb-3">
              <InputGroup.Text><i className="bi bi-envelope-fill"></i></InputGroup.Text>
              <Form.Control id='email' name='email' placeholder="Email" type='email' aria-describedby='email'/>
            </InputGroup>

            <Form.Group className="mb-3">
              <Form.Label>Your Message:</Form.Label>
              <FloatingLabel label="Message">
                <Form.Control id='message' name='message' as="textarea" placeholder="Leave a comment here" style={{ height: '100px' }}/>
              </FloatingLabel>
            </Form.Group>

            <Button variant="primary" type="submit">
              Send
            </Button>
          </RouterForm>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default Contact