import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ButtonContainer, BtnBack } from './styled'
import { Link } from 'react-router-dom'

export const ButtonBack = () => {
  return (
    <ButtonContainer>
      <Link to="/">
        <BtnBack>
          <FontAwesomeIcon icon={faArrowLeft} />
          Back
        </BtnBack>
      </Link>
    </ButtonContainer>
  )
}
