const foo = (arg1: string, arg2: number): void => {}

// 涉及infer 暂时不懂
type MyParameters<T extends Function>

type FunctionParamsType = MyParameters<typeof foo> // [arg1: string, arg2: number]