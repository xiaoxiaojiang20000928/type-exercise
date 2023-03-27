type Replace<S extends string,From extends string,To extends string> = S extends `${infer R}${From}${infer T}`?`${R}${To}${T}`:never

type replaced = Replace<'types are fun!', 'fun', 'awesome'> // 期望是 'types are awesome!'

export default {}