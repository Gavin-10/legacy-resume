import { useRouteError } from "react-router-dom"

function ErrorPage() {
  const error: any = useRouteError();
  return(
    <i>{error.statusText || error.message}</i>
  )
}

export default ErrorPage