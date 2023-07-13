import { BannerContainer, CardContainer, InfoContainer } from './styled'
import pais from '../../../../../../assets/jo.png'
import { populationFormatted } from '../../../../utils/formatted'

interface CardPostProps {
  name: string
  flag: string
  population: number
  region: string
  capital: string
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
