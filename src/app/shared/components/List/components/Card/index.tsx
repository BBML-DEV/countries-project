import { BannerContainer, CardContainer, InfoContainer } from './styled'
import { populationFormatted } from '../../../../utils/formatted'
import { CoutriesDataProps } from '../../../../../pages/Home'

type CardPostProps = {
  data: CoutriesDataProps
}

export const Card = ({ data }: CardPostProps) => {
  return (
    <CardContainer>
      <BannerContainer>
        <img src={data.flag} alt="" />
      </BannerContainer>
      <InfoContainer>
        <h2>{data.name}</h2>
        <div>
          <span>Population:</span>
          <p>{populationFormatted(data.population)}</p>
        </div>
        <div>
          <span>Region:</span>
          <p>{data.region}</p>
        </div>
        <div>
          <span>Capital:</span>
          <p>{data.capital}</p>
        </div>
      </InfoContainer>
    </CardContainer>
  )
}
