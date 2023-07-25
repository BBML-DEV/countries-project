import { ReactNode, createContext, useEffect, useState } from 'react'
import { CoutriesDataProps } from '../../pages/Home'
import { api } from '../libs/axios'

export interface Coutries {
  data: CoutriesDataProps[]
  optionValue: string
  setOptionValue: React.Dispatch<React.SetStateAction<string>>
  inputValue: string
  setInputValue: React.Dispatch<React.SetStateAction<string>>
  isDarkTheme: boolean
  setIsDarkTheme: React.Dispatch<React.SetStateAction<boolean>>
  getSingleCoutrie: (name: string) => Promise<any>
}

interface ChildrenContextProps {
  children: ReactNode
}

export const CoutriesContext = createContext({} as Coutries)

export const CoutriesProvider = ({ children }: ChildrenContextProps) => {
  const [data, setData] = useState<Array<CoutriesDataProps>>([])
  const [optionValue, setOptionValue] = useState('')
  const [inputValue, setInputValue] = useState('')
  const [isDarkTheme, setIsDarkTheme] = useState(false)

  async function getApiData() {
    const response = await fetch('https://restcountries.com/v2/all')
    const json = await response.json()
    setData(json)
  }

  async function getSingleCoutrie(name: string) {
    const response = await api.get(`${name}`)
    return response.data
  }

  useEffect(() => {
    getApiData()
  }, [])

  return (
    <CoutriesContext.Provider
      value={{
        data,
        inputValue,
        optionValue,
        setInputValue,
        setOptionValue,
        isDarkTheme,
        setIsDarkTheme,
        getSingleCoutrie,
      }}
    >
      {children}
    </CoutriesContext.Provider>
  )
}
