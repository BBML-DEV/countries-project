import { SinglePostProps } from '../..'
import { populationFormatted } from '../../../../shared/utils/formatted'
import {
  BannerContent,
  ContentContainer,
  InfoContent,
  InfoDataContainer,
  InfoCoutriesBadges,
  BadgeContainer,
  Badge,
} from './styled'

interface CoutrieCard {
  countrie: SinglePostProps
}

export const ContentCoutries = ({ countrie }: CoutrieCard) => {
  console.log(countrie.borders)

  return (
    <ContentContainer>
      <BannerContent>
        <img src={countrie.flag} alt="" />
      </BannerContent>
      <InfoContent>
        <h1>{countrie.name}</h1>
        <InfoDataContainer>
          <div>
            <ul>
              <li>
                <span>Native Name:</span>
                <p>{countrie.nativeName}</p>
              </li>
              <li>
                <span>Population:</span>
                <p>
                  {countrie.population &&
                    populationFormatted(countrie.population)}
                </p>
              </li>
              <li>
                <span>Region:</span>
                <p>{countrie.region}</p>
              </li>
              <li>
                <span>Sub Region:</span>
                <p>{countrie.subregion}</p>
              </li>
              <li>
                <span>Capital: </span>
                <p>{countrie.capital}</p>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <span>Top Level Domain:</span>
                {countrie.topLevelDomain}
              </li>
              <li>
                <span>Currencies:</span>
                {countrie.currencies &&
                  countrie.currencies.map((currency) => (
                    <p key={currency.code}>{currency.code}</p>
                  ))}
              </li>
              <li>
                <span>Languages:</span>
                {countrie.languages &&
                  countrie.languages.map((language) => (
                    <p key={language.name}>{language.iso639_2}</p>
                  ))}
              </li>
            </ul>
          </div>
        </InfoDataContainer>
        <InfoCoutriesBadges>
          <h3>Border Countries: </h3>
          <BadgeContainer>
            {countrie.borders
              ? countrie.borders.map((content) => (
                  <Badge key={content}>{content}</Badge>
                ))
              : null}
          </BadgeContainer>
        </InfoCoutriesBadges>
      </InfoContent>
    </ContentContainer>
  )
}
