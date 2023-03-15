interface Todo {
  title: string
  description: string
  completed: boolean
}

type MyOmit<T extends object,U extends keyof Todo> = Pick<T,Exclude<keyof T,U>>

type TodoPreview = MyOmit<Todo, 'description' | 'title'>

const todo: TodoPreview = {
  completed: false,
}

export default {}