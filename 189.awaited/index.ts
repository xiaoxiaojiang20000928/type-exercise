type ExampleType = Promise<string>

type MyAwaited<T extends Promise<any>> = T extends Promise<infer R>?R:never

type Result = MyAwaited<ExampleType> // string

export default {};