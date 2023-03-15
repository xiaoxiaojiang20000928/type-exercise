//
type MyPick<T,K extends keyof T> = {
  [Key in K]:T[Key]
}

interface Todo {
  title: string
  description: string
  completed: boolean
}

type TodoPreview = MyPick<Todo, 'title' | 'completed'>

const todo: TodoPreview = {
    title: 'Clean room',
    completed: false,
}

type Func = () => Promise<string>

type get<T> = T extends () => Promise<infer U> ? U : never
type x = get<Func> // string

export {};