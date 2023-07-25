import { styled } from 'styled-components'

export const ContentContainer = styled.section`
  display: flex;
  flex-direction: row;
  gap: 10%;
  justify-content: space-between;
`

export const BannerContent = styled.div`
  border: 1.5rem solid;
  border-color: ${({ theme }) => theme.colors.elements};
  border-radius: 5px;
  width: 45%;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  img {
    object-fit: cover;
    overflow: hidden;
    height: 100%;
    width: 100%;
  }
`

export const InfoContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
  width: 45%;

  h1 {
    color: ${({ theme }) => theme.colors.text};
  }
`
export const InfoDataContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;

  ul li {
    padding: 0.3rem 0rem;
    display: flex;
    flex-direction: row;
    gap: 0.5rem;

    span {
      color: ${({ theme }) => theme.colors.text};
      font-weight: bold;
    }
  }
`

export const InfoCoutriesBadges = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
`

export const BadgeContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  width: 280px;
  gap: 0.5rem;
`

export const Badge = styled.div`
  display: flex;
  justify-content: center;
  width: 60px;
  border-radius: 5px;
  font-size: ${({ theme }) => theme.fontSize.homeItens};
  background-color: ${({ theme }) => theme.colors.elements};
  color: ${({ theme }) => theme.colors.text};
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  font-size: 12px;
`
