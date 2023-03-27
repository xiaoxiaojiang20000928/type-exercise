type Fn = (a: number, b: string) => number

type AppendArgument<F extends Function,A> = F extends (...args:infer U)=>infer R?(a:U[0],b:U[1],x:A)=>R:never

type Result = AppendArgument<Fn, boolean> 
// 期望是 (a: number, b: string, x: boolean) => number

export default {}