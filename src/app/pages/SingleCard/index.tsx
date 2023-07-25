import { useParams } from 'react-router-dom'
import { ButtonBack } from './components/ButtonBack'
import { ContentCoutries } from './components/ContentCoutries'
import { SingleCardContainer } from './styled'
import { useCallback, useState, useEffect } from 'react'
import { useCountries } from '../../shared/hook/useCountries'
import { Countries } from '../../shared/Context'
import { CountriesDataProps } from '../Home'

export interface SinglePostProps extends CountriesDataProps {
  nativeName: string
  subregion: string
  topLevelDomain: string[]
  currencies: []
  borders: []
  languages: []
}

export const SingleCard = () => {
  const [countrieCardInfo, setCountrieCardInfo] = useState<SinglePostProps>(
    {} as SinglePostProps,
  )

  const { alpha2Code } = useParams()

  const { getSingleCountrie } = useCountries() as unknown as Countries

  const getCountrie = useCallback(async () => {
    const countrie = await getSingleCountrie(alpha2Code)

    setCountrieCardInfo(countrie)
  }, [getSingleCountrie, alpha2Code])

  useEffect(() => {
    getCountrie()
  }, [getCountrie, alpha2Code])

  console.log(countrieCardInfo)

  return (
    <SingleCardContainer className="container">
      <ButtonBack />
      <ContentCoutries countrie={countrieCardInfo} />
    </SingleCardContainer>
  )
}
