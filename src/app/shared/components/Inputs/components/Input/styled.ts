import { styled } from 'styled-components'

export const InputTextContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 40%;
  padding: 1rem;
  gap: 0.5rem;
  background-color: ${({ theme }) => theme.colors.elements};
  border-radius: 5px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

  svg {
    color: ${({ theme }) => theme.colors.input};
  }

  input {
    border: none;
    background-color: transparent;
    width: 100%;
    color: ${({ theme }) => theme.colors.text};
  }

  input::placeholder {
    font-size: ${({ theme }) => theme.fontSize.defailtPage};
    color: ${({ theme }) => theme.colors.text};
  }
  input:focus {
    outline: none;
  }

  @media (max-width: 820px) {
    width: 90%;
  }

  @media (max-width: 600px) {
    width: 90%;
  }
`
