type Foo = {
  a: string;
  b: number;
}
type Bar = {
  a: string;
  c: boolean
}

// 和Merge思想一样
type Diff<T extends object,U extends object> = Omit<T,keyof U>&Omit<U,keyof T>

type Result1 = Diff<Foo,Bar> // { b: number, c: boolean }
type Result2 = Diff<Bar,Foo> // { b: number, c: boolean }

export default {}