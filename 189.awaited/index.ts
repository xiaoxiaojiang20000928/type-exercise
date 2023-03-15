type ExampleType = Promise<string>

// 暂未看懂 有infer部分

type Result = MyAwaited<ExampleType> // string

export default {};