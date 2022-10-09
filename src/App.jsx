import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import PersonClassComponent from './components/PersonClassComponent'
import {PersonFunctionalComponent} from './components/PersonFunctionalComponent'

const HEROES = [
  { name: 'John Batman', job: 'Pretend Hero' },
  { name: 'Spider Pig', job: 'Actual Hero' },
  { name: 'Saitama', job: 'Hero for fun' }
];

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="">
      <PersonClassComponent heroes={HEROES} />
      <PersonFunctionalComponent heroes={HEROES} />
    </div>
  )
}

export default App
