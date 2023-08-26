import { faker } from '@faker-js/faker'
import Task from './task'

const tarefas = [
  { description: faker.lorem.word(), isDone: faker.datatype.boolean() },
  { description: faker.lorem.word(), isDone: faker.datatype.boolean() },
  { description: faker.lorem.word(), isDone: faker.datatype.boolean() },
  { description: faker.lorem.word(), isDone: faker.datatype.boolean() },
]

export default function Tasks ({ tasks }) {
    return (
        <ul>
          {tasks.map((tarefa) => ( //coloca um parêntes a mais para não precisar escrever return
            <Task
              key={tarefa}
              task={tarefa}
            /> // o key cria um sistema de cache, onde estrá atualizando apenas o que precisa ser atualizado. É uma chave específica, ou seja, é uma chave única, não pode se repetir.
          ))}
        </ul>       
    )  
}