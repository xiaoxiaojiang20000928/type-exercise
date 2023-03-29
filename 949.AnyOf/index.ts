type False = ''|0|[]|undefined|null|false

// 递归对比即可
// 注意typescript的一个坑，任何类型都可以被{}限定，甚至const obj:{} = 1都不会报错，平时不要用{}限定
type AnyOf<T extends any[]> = T extends [infer U,...infer R]?U extends False?AnyOf<R>:true:false

type Sample1 = AnyOf<[1, '', false, []]> // expected to be true.
type Sample2 = AnyOf<[0, '', false, []]> // expected to be false.

export default {}