import { Card } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';


function FakeDocument() {
  const docData: any = useLoaderData();

  if(docData == -1) {
    return(
      <Card className='mt-5 p-5 text-center d-flex justify-content-center'>
        <hr />
        <i className="bi bi-archive-fill mb-0 mt-3"></i>
        <Card.Text>Document Not Submitted</Card.Text>
        <hr />
      </Card>
    )
  }

  return (
    <Card className='mt-5 pb-2'>
      <Card.Body>
        <Card.Title>Your Fake Document</Card.Title>
        <Card.Text>
          Name: {docData.name}
        </Card.Text>
        <hr />
        <Card.Text>
          Email: {docData.email}
        </Card.Text>
        <hr />
        <Card.Text>
          Comments: <br />
          {docData.comments}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default FakeDocument;