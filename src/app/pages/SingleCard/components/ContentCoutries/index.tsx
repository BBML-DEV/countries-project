import {
  BannerContent,
  ContentContainer,
  InfoContent,
  InfoDataContainer,
  InfoCoutriesBadges,
  BadgeContainer,
  Badge,
} from './styled'

export const ContentCoutries = () => {
  return (
    <ContentContainer>
      <BannerContent>
        <img src="https://flagcdn.com/bj.svg" alt="" />
      </BannerContent>
      <InfoContent>
        <h1>Belgium</h1>
        <InfoDataContainer>
          <div>
            <ul>
              <li>
                <span>Native Name:</span>
              </li>
              <li>
                <span>Population:</span>
              </li>
              <li>
                <span>Region:</span>
              </li>
              <li>
                <span>Sub Region:</span>
              </li>
              <li>
                <span>Capital: </span>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <span>Top Level Domain:</span>
              </li>
              <li>
                <span>Currencies:</span>
              </li>
              <li>
                <span>Languages: </span>
              </li>
            </ul>
          </div>
        </InfoDataContainer>
        <InfoCoutriesBadges>
          <h3>Border Countries: </h3>
          <BadgeContainer>
            <Badge>France</Badge>
            <Badge>Germany</Badge>
            <Badge>Netherlands</Badge>
          </BadgeContainer>
        </InfoCoutriesBadges>
      </InfoContent>
    </ContentContainer>
  )
}
