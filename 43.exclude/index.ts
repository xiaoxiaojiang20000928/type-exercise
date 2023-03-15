// 注意 extends的作用
// 1、继承
// 2、条件判断

// 条件判断又分T为泛型和非泛型情况下的判断
// T为泛型且为联合类型时，将会拆分以此比较得出结果并联合
type MyExclude<T,U> = T extends U?never:T;
type Result = MyExclude<'a' | 'b' | 'c', 'a'> // 'b' | 'c'

export default {}