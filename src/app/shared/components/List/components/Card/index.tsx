import { BannerContainer, CardContainer, InfoContainer } from './styled'
import { populationFormatted } from '../../../../utils/formatted'
import { CountriesDataProps } from '../../../../../pages/Home'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

type CardPostProps = {
  data: CountriesDataProps
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
          <p>
            {data.capital ? (
              data.capital
            ) : (
              <FontAwesomeIcon icon={faXmark} style={{ color: '#ff0000' }} />
            )}
          </p>
        </div>
      </InfoContainer>
    </CardContainer>
  )
}
