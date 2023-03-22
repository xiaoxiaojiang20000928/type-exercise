interface Cat {
  type: 'cat'
  breeds: 'Abyssinian' | 'Shorthair' | 'Curl' | 'Bengal'
}

interface Dog {
  type: 'dog'
  breeds: 'Hound' | 'Brittany' | 'Bulldog' | 'Boxer'
  color: 'brown' | 'white' | 'black'
}

//还是利用extends的特性
type LookUp<T,U> = T extends {type:U}?T:never

type MyDog = LookUp<Cat | Dog, 'dog'> // expected to be `Dog`

export default {}