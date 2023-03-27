type Test = { id: '1' }

// 这里熟悉一下Record泛型函数即可
type AppendToObject<T extends object,U extends string,R> = T & Record<U,R>

type Result = AppendToObject<Test, 'value', 4> // expected to be { id: '1', value: 4 }

export default {}