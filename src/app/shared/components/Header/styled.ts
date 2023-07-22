import { styled } from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  padding: 2rem 0rem;
  background-color: ${({ theme }) => theme.colors.white};
  -moz-box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
`

export const HeaderContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  button {
    display: flex;
    align-items: center;
    flex-direction: row;
    color: ${({ theme }) => theme.colors.text};

    gap: 0.5rem;

    svg {
      width: 0.8rem;
      height: 0.8rem;
      background-color: ${({ theme }) => theme.colors.white};
    }

    span {
      font-size: ${({ theme }) => theme.fontSize.defailtPage};
      font-weight: 600;
    }
  }
`
