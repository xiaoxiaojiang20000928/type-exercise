//infer和extends配合的时候 infer推断的类型变量只会在true分支运用                                                                                                                            
type Func<T> = T extends ()=>infer R?R:boolean;

const func:Func<number> = true;
const func1:Func<()=>Promise<number>> = Promise.resolve(1);

//当sex，age属性类型不同时，返回的R为联合类型
type Obj<T> = T extends {sex:infer R,age:infer R}?R:number;
const obj1:Obj<string> = 1;
const obj2:Obj<{sex:string,age:number}> = 'man' 

//直接将infer理解为可以提取某个类型内部的某个类型

export default {}       