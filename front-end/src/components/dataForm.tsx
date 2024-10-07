import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { FloatingLabel } from "react-bootstrap";
import { Outlet, Form as RouterForm } from 'react-router-dom'

function DataForm() {
  return(
    <>
    <Outlet />
    <Card data-bs-theme="dark" className='mt-5 p-4'>
      <Card.Title>Database Demonstration</Card.Title>
      <hr></hr>
      <RouterForm method="POST" id="fake-data-form">
          
        <Form.Group className="mb-3" controlId="fakeName">
          <Form.Label>Fake Name</Form.Label>
          <Form.Control name="fakeName" type="text" placeholder="Fake Name" aria-label="Fake Name"/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="fakeEmail">
          <Form.Label>Fake Email Address</Form.Label>
          <Form.Control name="fakeEmail" type="email" placeholder="Enter email" aria-label="Fake Email"/>
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Additional Comments</Form.Label>
          <FloatingLabel controlId="fakeComments" label="Comments">
            <Form.Control
              as="textarea"
              placeholder="Leave a comment here"
              style={{ height: '100px' }}
              aria-label="Fake Comments"
              name="fakeComments"
            />
          </FloatingLabel>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </RouterForm>
    </Card>
    </>
  )
}

export default DataForm;