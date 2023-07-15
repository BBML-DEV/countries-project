import { useEffect, useState } from 'react'
import { Header } from '../../shared/components/Header'
import { Inputs } from '../../shared/components/Inputs'
import { List } from '../../shared/components/List'
import { HomeContainer } from './styled'

export interface CoutriesDataProps {
  id: number
  name: string
  flag: string
  population: number
  region: string
  capital: string
}

export const Home = () => {
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
    <HomeContainer>
      <Header />
      <Inputs
        data={data}
        optionValue={optionValue}
        setOptionValue={setOptionValue}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
      <List data={data} optionValue={optionValue} inputValue={inputValue} />
    </HomeContainer>
  )
}
