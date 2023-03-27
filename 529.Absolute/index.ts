type Test = -100;
type Result = Absolute<Test>; // expected to be "100"

// 注意 number和bigint类型同样可以用模板字符串来匹配
type Absolute<T extends string|number|bigint> = `${T}` extends `-${infer U}`?`${U}`:`${T}`

export default {}