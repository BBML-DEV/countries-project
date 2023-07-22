import { ReactNode, createContext, useEffect, useState } from 'react'
import { CoutriesDataProps } from '../../pages/Home'

interface Coutries {
  data: CoutriesDataProps[]
  optionValue: string
  setOptionValue: React.Dispatch<React.SetStateAction<string>>
  inputValue: string
  setInputValue: React.Dispatch<React.SetStateAction<string>>
}

interface ChildrenContextProps {
  children: ReactNode
}

export const CoutriesContext = createContext({} as Coutries)

export const CoutriesProvider = ({ children }: ChildrenContextProps) => {
  const [data, setData] = useState<Array<CoutriesDataProps>>([])
  const [optionValue, setOptionValue] = useState('')
  const [inputValue, setInputValue] = useState('')

  async function getApiData() {
    const response = await fetch('https://restcountries.com/v2/all')
    const json = await response.json()
    setData(json)
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
      }}
    >
      {children}
    </CoutriesContext.Provider>
  )
}
