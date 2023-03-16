const foo = (arg1: string, arg2: number): void => {}

//注意...args就是一个数组
type MyParameters<T> = T extends (...args:infer U)=>any?U:never  

type FunctionParamsType = MyParameters<typeof foo> // [arg1: string, arg2: number]