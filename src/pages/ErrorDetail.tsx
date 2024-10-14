
import { isRouteErrorResponse, useRouteError } from 'react-router-dom'

type Props = {}

function ErrorDetail({}: Props) {
  const errorDetail = useRouteError()

  return (
    <div>{isRouteErrorResponse(errorDetail) ? 'La Página no existe ':
    `Ha ocurrido un error ${(errorDetail as Error).message}`}</div>
  )
}

export default ErrorDetail