import { BannerContainer, CardContainer, InfoContainer } from './styled'
import pais from '../../../../../../../assets/jo.png'

export const Card = () => {
  return (
    <CardContainer>
      <BannerContainer>
        <img src={pais} alt="" />
      </BannerContainer>
      <InfoContainer>
        <h2>Jordânia</h2>
        <div>
          <span>Population:</span>
          <p>334.300</p>
        </div>
        <div>
          <span>Region:</span>
          <p>Americanas</p>
        </div>
        <div>
          <span>Capital:</span>
          <p>Brasilia</p>
        </div>
      </InfoContainer>
    </CardContainer>
  )
}
