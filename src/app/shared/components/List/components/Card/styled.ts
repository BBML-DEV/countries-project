import { styled } from 'styled-components'

export const CardContainer = styled.div`
  width: 260px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`
export const BannerContainer = styled.div`
  img {
    object-fit: cover;
    height: 10rem;
    overflow: hidden;
    width: 100%;
  }
`
export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem 2rem 2.5rem 2rem;

  h2 {
    padding-bottom: 1rem;
  }

  > div {
    display: flex;
    flex-direction: row;
    gap: 0.5rem;

    span {
      color: ${({ theme }) => theme.colors.input};
      font-size: ${({ theme }) => theme.fontSize.defailtPage};
      font-weight: 800;
    }

    p {
      font-size: ${({ theme }) => theme.fontSize.homeItens};
      color: ${({ theme }) => theme.colors.input};
      font-weight: 300;
    }
  }
`
