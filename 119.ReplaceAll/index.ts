// 走递归
type ReplaceAll<T extends string,From extends string,To extends string> = T extends `${infer R}${From}${infer U}`?`${R}${To}${ReplaceAll<U,From,To>}`:T

type replaced = ReplaceAll<'t y p e s', ' ', ''> // 期望是 'types'

export default {} 