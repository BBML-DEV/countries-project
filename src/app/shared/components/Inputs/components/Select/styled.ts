import { styled } from 'styled-components'

export const SelectContainer = styled.div`
  select {
    padding: 1rem 1.5rem;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    border-radius: 5px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    border: none;
    outline: none;
  }
`
