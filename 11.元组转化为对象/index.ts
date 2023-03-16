const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const

//只有在数组(包括元组)情况下，才能够使用T[number]这种语法
//T[number] 对数组来讲 = keyof 对象 会得到一个联合类型
type TupleToObject<T extends readonly any[]> = {
  [Key in T[number]]: Key
}

type result = TupleToObject<typeof tuple> // expected { tesla: 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}

export {}