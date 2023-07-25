import { ReactNode, createContext, useEffect, useState } from 'react'
import { CountriesDataProps } from '../../pages/Home'
import { api } from '../libs/axios'

export interface Countries {
  data: CountriesDataProps[]
  optionValue: string
  setOptionValue: React.Dispatch<React.SetStateAction<string>>
  inputValue: string
  setInputValue: React.Dispatch<React.SetStateAction<string>>
  isDarkTheme: boolean
  setIsDarkTheme: React.Dispatch<React.SetStateAction<boolean>>
  getSingleCountrie: (alpha2Code: string) => Promise<any>
}

interface ChildrenContextProps {
  children: ReactNode
}

export const CountriesContext = createContext({} as Countries)

export const CountriesProvider = ({ children }: ChildrenContextProps) => {
  const [data, setData] = useState<Array<CountriesDataProps>>([])
  const [optionValue, setOptionValue] = useState('')
  const [inputValue, setInputValue] = useState('')
  const [isDarkTheme, setIsDarkTheme] = useState(false)

  async function getApiData() {
    const response = await fetch('https://restcountries.com/v2/all')
    const json = await response.json()
    setData(json)
  }

  async function getSingleCountrie(alpha2Code: string) {
    const response = await api.get(`${alpha2Code}`)
    return response.data
  }

  useEffect(() => {
    getApiData()
  }, [])

  return (
    <CountriesContext.Provider
      value={{
        data,
        inputValue,
        optionValue,
        setInputValue,
        setOptionValue,
        isDarkTheme,
        setIsDarkTheme,
        getSingleCountrie,
      }}
    >
      {children}
    </CountriesContext.Provider>
  )
}
