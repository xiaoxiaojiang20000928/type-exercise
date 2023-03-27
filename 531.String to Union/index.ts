type Test = '123';
type Result = StringToUnion<Test>; // expected to be "1" | "2" | "3"

//经典递归 没啥难度
type StringToUnion<T extends string> = T extends `${infer U}${infer R}`?U|StringToUnion<R>:never

export default {}