import { Link } from 'react-router-dom'
import { useCountries } from '../../hook/useCountries'
import { Card } from './components/Card'
import { ListContainer } from './styled'

enum ContinentOptions {
  Asia = 'Asia',
  Americas = 'Americas',
  Africa = 'Africa',
  Europe = 'Europe',
  Oceania = 'Oceania',
}

const isOptionValid = (option: string): option is ContinentOptions => {
  return Object.values(ContinentOptions).includes(option as ContinentOptions)
}

export const List = () => {
  const { inputValue, data, optionValue } = useCountries()

  const filterListOfRegions = data.filter((item) => item.region === optionValue)

  const inputFilter = data.filter((item) =>
    item.name.toLowerCase().includes(inputValue.toLowerCase()),
  )

  return (
    <ListContainer className="container">
      {inputValue.length > 0
        ? inputFilter.map((item) => (
            <Link key={item.id} to={`/SingleCard/${item.alpha2Code}`}>
              <Card key={item.id} data={item} />
            </Link>
          ))
        : isOptionValid(optionValue)
        ? filterListOfRegions.map((item) => (
            <Link key={item.id} to={`/SingleCard/${item.alpha2Code}`}>
              <Card key={item.id} data={item} />
            </Link>
          ))
        : data.map((item) => (
            <Link key={item.id} to={`/SingleCard/${item.alpha2Code}`}>
              <Card key={item.id} data={item} />
            </Link>
          ))}
    </ListContainer>
  )
}
