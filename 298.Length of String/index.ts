//利用递归将字符串类型转为数组类型，对数组类型求长度即可
//字符串类型直接求长度只会获得number类型
type Str2Arr<S> = S extends `${infer U}${infer R}`?[U,...Str2Arr<R>]:[]

type LengthOfString<S> = Str2Arr<S>['length']

export default {}