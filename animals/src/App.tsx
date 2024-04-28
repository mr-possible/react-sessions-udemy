import './css/App.css'
import { ReactElement } from "react"
import { useState } from "react"
import AnimalShow from "./AnimalShow"

function getRandomAnimal(): string {
  const animals: string[] = ['bird', 'cat', 'cow', 'dog', 'alligator', 'horse']
  return animals[Math.floor(Math.random() * animals.length)]
}

function App(): ReactElement {
  const [animals, setAnimals] = useState<string[]>([])

  function handleClick(): void {
    setAnimals([...animals, getRandomAnimal()])
  }

  const renderedAnimals = animals.map((animal, index) => {
    return <AnimalShow type={animal} key={index} />
  })

  return (
    <div className='app'>
      <button onClick={handleClick}>Add Animal</button>
      <div className='animal-list'>{renderedAnimals}</div>
    </div>
  )
}

export default App
