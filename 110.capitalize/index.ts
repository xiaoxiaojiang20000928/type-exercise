//新出现了一个泛型函数Uppercase，注意一下即可
type Capitalize<T extends string> = T extends `${infer F}${infer R}`?`${Uppercase<F>}${R}`:never

type capitalized = Capitalize<'hello world'> // expected to be 'Hello world'

export default {}