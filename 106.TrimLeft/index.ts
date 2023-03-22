//递归写法
type TrimLeft<T extends string> = T extends ` ${infer R}`?TrimLeft<R>:T

type trimed = TrimLeft<'  Hello World  '>// 应推导出 'Hello World  '

export default {}