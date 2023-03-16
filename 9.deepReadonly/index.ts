type X = { 
  x: { 
    a: 1
    b: 'hi'
  }
  y: 'hey'
}

type Expected = { 
  readonly x: { 
    readonly a: 1
    readonly b: 'hi'
  }
  readonly y: 'hey' 
}

type BaseType =number|string|boolean|symbol|null|undefined|bigint

// 并不能看懂某些答案写的keyof T[key] extends never? 是什么写法?
// keyof T[key]无论如何都不会是never的子集吧。即便是string或number的类型，keyof也会打印出他们原型链上方法的联合

type DeepReadonly<T> = {
  readonly [Key in keyof T]:T[Key] extends BaseType?T[Key]:DeepReadonly<T[Key]>
}

type Todo = DeepReadonly<X> // should be same as `Expected`

export default {}