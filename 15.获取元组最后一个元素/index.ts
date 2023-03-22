type arr1 = ['a', 'b', 'c']
type arr2 = [3, 2, 1]

// 对infer推导使用的一个例子
type Last<T extends unknown[]> = T extends [...infer R,infer L]?L:never

type tail1 = Last<arr1> // expected to be 'c'
type tail2 = Last<arr2> // expected to be 1
export default {}