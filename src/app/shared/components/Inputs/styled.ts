import { styled } from 'styled-components'

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 10rem;
  padding-bottom: 2rem;

  @media (max-width: 820px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;
  }
`
