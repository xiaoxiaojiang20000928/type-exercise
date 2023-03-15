// infer部分 暂时不懂

type Includes<T extends unknown[],U>

type isPillarMen = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'> // expected to be `false`

export default {}