type ExampleType = Promise<string>

type Result = MyAwaited<ExampleType> // string

export default {};