const fn = (v: boolean) => {
  if (v)
    return 1
  else
    return 2
}

// 涉及infer部分 暂时不懂
type MyReturnType

type a = MyReturnType<typeof fn> // 应推导出 "1 | 2"