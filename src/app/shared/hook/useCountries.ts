import { useContext } from 'react'
import { CountriesContext } from '../Context'

export function useCountries() {
  const context = useContext(CountriesContext)
  return context
}
