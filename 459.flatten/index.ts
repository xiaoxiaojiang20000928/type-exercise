// 注意这个递归 Flatten第一个extends相当在进行for循环，第二个extends则是对循环里面每一个元素进行递归处理
type Flatten<T extends any[]> = T extends [infer U,...infer R]?U extends any[]?[...Flatten<U>,...Flatten<R>]:[U,...Flatten<R>]:[]

type flatten = Flatten<[1, 2, [3, 4], [[[5]]]]> // [1, 2, 3, 4, 5]

export default {}