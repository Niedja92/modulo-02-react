import { faker } from '@faker-js/faker'
import Tasks from './components/tasks'
// import './App.css'

const tarefas = [
  {
    description: faker.lorem.word(),
    isDone: faker.datatype.boolean()
  },
  {
    description: faker.lorem.word(),
    isDone: faker.datatype.boolean()
  },
  {
    description: faker.lorem.word(),
    isDone: faker.datatype.boolean()
  },
  {
    description: faker.lorem.word(),
    isDone: faker.datatype.boolean()
  },
] //1º cria uma variável com um array de tarefas

function App() {
  
  return (
    <>
      <Tasks tasks={tarefas} />
    </>
  )
}

export default App
