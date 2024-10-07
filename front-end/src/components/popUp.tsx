import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import { Alert } from "react-bootstrap";

import { useNavigate } from "react-router-dom";

function PopUp() {
  const navigate = useNavigate();
  const submissionData = useLoaderData();
  const alertSuccess = <Alert className="mt-5" variant="success" onClose={() => {
      setAlert(<></>);
      navigate(-1);
    }} dismissible>
                        <Alert.Heading>Success</Alert.Heading>
                          <p>
                            Your document has successfully been submitted!
                          </p>
                        </Alert>

  const alertWarning = <Alert className="mt-5" variant="warning" onClose={() => {
      setAlert(<></>);
      navigate(-1);
    }} dismissible>
                        <Alert.Heading>Submission Blocked</Alert.Heading>
                          <p>
                            You already submitted a document :(
                          </p>
                        </Alert>

  const alertFail = <Alert className="mt-5" variant="danger" onClose={() => {
    setAlert(<></>);
    navigate(-1);
  }} dismissible>
                    <Alert.Heading>Submission Failed</Alert.Heading>
                      <p>
                        An internal error has occured
                      </p>
                    </Alert>

  const [alert, setAlert] = useState(() => {
    if(submissionData == '1') {
      return alertSuccess;
    } else if (submissionData == '2') {
      return alertWarning;
    } else if (submissionData == '3') {
      return alertFail;
    }
    return <></>
  });

  return(
    <>{alert}</>
  )
}

export default PopUp;