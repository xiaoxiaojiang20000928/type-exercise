interface Todo {
  title: string
  description: string
  completed: boolean
}

//注意这里&的用法
type MyReadonly2<T extends object,U extends keyof T> = Omit<T,U>&{
  readonly [key in U]:T[key]
}

const todo: MyReadonly2<Todo, 'title' | 'description'> = {
  title: "Hey",
  description: "foobar",
  completed: false,
}

todo.title = "Hello" // Error: cannot reassign a readonly property
todo.description = "barFoo" // Error: cannot reassign a readonly property
todo.completed = true // OK

export default {}