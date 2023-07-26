import { styled } from 'styled-components'

export const ListContainer = styled.div`
  max-width: 1440px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 2rem;
  row-gap: 2.5rem;
  padding-bottom: 6rem;

  @media (max-width: 1160px) {
    width: 950px;
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 970px) {
    grid-template-columns: repeat(2, 1fr);
    width: 800px;
  }

  @media (max-width: 820px) {
    grid-template-columns: repeat(1, 1fr);
    width: 800px;
  }

  @media (max-width: 600px) {
    width: 350px;
  }
`
