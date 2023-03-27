type foo = {
  name: string;
  age: string;
}

type coo = {
  age: number;
  sex: string
}

// &不能复写属性，复写属性只能用接口，Pick无法挑选不存在泛型里面的属性
type Merge<T extends object,U extends object> = Omit<T,keyof U>&U

type Result = Merge<foo,coo>; // expected to be {name: string, age: number, sex: string}

export default {}