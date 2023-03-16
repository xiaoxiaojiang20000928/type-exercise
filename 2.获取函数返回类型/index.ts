const fn = (v: boolean) => {
  if (v)
    return 1
  else
    return 2
}

// 对函数接收参数不做限制时 参考写法：...args:any
// 这里直接将infer理解为可以提取某个类型内部的某个类型
type MyReturnType<T> = T extends (...args:any)=>infer R?R:never

type a = MyReturnType<typeof fn> // 应推导出 "1 | 2"