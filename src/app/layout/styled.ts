import { styled } from 'styled-components'

export const DefaultLayoutContainer = styled.div`
  .container {
    margin-left: auto;
    margin-right: auto;
    width: 1140px;
  }

  @media (max-width: 1160px) {
    .container {
      width: 950px;
    }
  }

  @media (max-width: 970px) {
    .container {
      width: 800px;
    }
  }

  @media (max-width: 820px) {
    .container {
      width: 600px;
    }
  }

  @media (max-width: 600px) {
    .container {
      width: 350px;
    }
  }
`
