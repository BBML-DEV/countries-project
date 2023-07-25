import { useParams } from 'react-router-dom'
import { ButtonBack } from './components/ButtonBack'
import { ContentCoutries } from './components/ContentCoutries'
import { SingleCardContainer } from './styled'
import { useCallback, useState, useEffect } from 'react'
import { useCoutries } from '../../shared/hook/useCoutries'
import { Coutries } from '../../shared/Context'
import { CoutriesDataProps } from '../Home'

export interface SinglePostProps extends CoutriesDataProps {
  nativeName: string
  subregion: string
  topLevelDomain: string[]
  currencies: []
  borders: []
  languages: []
}

export const SingleCard = () => {
  const [coutrieCardInfo, setCoutrieCardInfo] = useState<SinglePostProps>(
    {} as SinglePostProps,
  )

  const { name } = useParams()

  const { getSingleCoutrie } = useCoutries() as unknown as Coutries

  const getCoutrie = useCallback(async () => {
    const coutrie = await getSingleCoutrie(name)

    setCoutrieCardInfo(coutrie)
  }, [getSingleCoutrie, name])

  useEffect(() => {
    getCoutrie()
  }, [getCoutrie, name])

  console.log(coutrieCardInfo)

  return (
    <SingleCardContainer className="container">
      <ButtonBack />
      <ContentCoutries coutrie={coutrieCardInfo} />
    </SingleCardContainer>
  )
}
