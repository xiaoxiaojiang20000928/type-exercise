// 106的plus版本，把三种空字符串情况都考虑进去
type Trim<T> = T extends ` ${infer R}`|`${infer R} `|` ${infer R} `?Trim<R>:T

type trimed = Trim<'  Hello World  '> // expected to be 'Hello World'

export default {}