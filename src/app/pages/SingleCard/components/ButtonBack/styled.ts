import { styled } from 'styled-components'

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin: 2rem 0rem;
`

export const BtnBack = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0.5rem 1.5rem;
  gap: 0.5rem;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.elements};
  color: ${({ theme }) => theme.colors.text};
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`
