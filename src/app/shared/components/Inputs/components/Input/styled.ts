import { styled } from 'styled-components'

export const InputTextContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 40%;
  padding: 1rem;
  gap: 0.5rem;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 5px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

  svg {
    color: ${({ theme }) => theme.colors['light-mode-input']};
  }

  input {
    border: none;
    background-color: none;
    width: 100%;
  }

  input::placeholder {
    font-size: ${({ theme }) => theme.fontSize.defailtPage};
    color: ${({ theme }) => theme.colors['light-mode-input']};
  }
  input:focus {
    outline: none;
  }
`
