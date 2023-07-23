import { ButtonBack } from './components/ButtonBack'
import { ContentCoutries } from './components/ContentCoutries'
import { SingleCardContainer } from './styled'

export const SingleCard = () => {
  return (
    <SingleCardContainer className="container">
      <ButtonBack />
      <ContentCoutries />
    </SingleCardContainer>
  )
}
