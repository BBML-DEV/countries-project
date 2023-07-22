import { useContext } from 'react'
import { CoutriesContext } from '../Context'

export function useCoutries() {
  const context = useContext(CoutriesContext)
  return context
}
