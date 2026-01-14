/*
  11 - Tuple to Object
  -------
  by sinoon (@sinoon) #easy #object-keys

  ### Question

  Given an array, transform it into an object type and the key/value must be in the provided array.

  For example:

  ```ts
  const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const

  type result = TupleToObject<typeof tuple> // expected { 'tesla': 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}
  ```

  > View on GitHub: https://tsch.js.org/11
*/

/* _____________ Your Code Here _____________ */

type TupleToObject<T extends readonly (PropertyKey)[]> = { [Key in T[number]]: Key}

/*
  КАК РАБОТАЕТ TupleToObject:
  Теория - https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html
  1. `T extends readonly (PropertyKey)[]`
     - Ограничивает T быть readonly массивом (tuple)
     - Элементы должны быть типами, которые могут быть ключами объекта (string | number | symbol)
     - `PropertyKey` = string | number | symbol
  
  2. `T[number]` - это специальный синтаксис TypeScript!
     - `number` здесь НЕ переменная, а специальный индексный тип
     - `T[number]` означает "все возможные значения, которые можно получить по числовому индексу"
     - Для tuple ['a', 'b', 'c'] это будет 'a' | 'b' | 'c'
     - Это называется "indexed access type" с числовым индексом
  
  3. `[Key in T[number]]` - mapped type
     - Проходит по каждому элементу union типа T[number]
     - Для каждого Key создаёт свойство в объекте
  
  4. `: Key` - значение равно ключу
     - Каждое свойство имеет то же значение, что и его ключ

  ПРИМЕР:
  type Test = TupleToObject<['tesla', 'model 3']>
  
  Шаг 1: T = readonly ['tesla', 'model 3']
  Шаг 2: T[number] = 'tesla' | 'model 3'  (все элементы tuple)
  Шаг 3: { [Key in 'tesla' | 'model 3']: Key }
  Шаг 4: { 'tesla': 'tesla', 'model 3': 'model 3' }

  ПОЧЕМУ НЕЛЬЗЯ ИСПОЛЬЗОВАТЬ keyof T?
  
  `keyof T` для tuple вернёт:
  - Для ['a', 'b']: keyof вернёт "0" | "1" | "length" | "push" | "pop" | ...
  - Это индексы массива (строки "0", "1") и методы массива, НЕ значения!
  
  Нам нужны ЗНАЧЕНИЯ из tuple, а не индексы, поэтому используем T[number]

  T[number] vs keyof T:
  - T[number] = значения элементов: 'a' | 'b'
  - keyof T = индексы и методы: "0" | "1" | "length" | ...
*/

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const
const tupleNumber = [1, 2, 3, 4] as const
const sym1 = Symbol(1)
const sym2 = Symbol(2)
const tupleSymbol = [sym1, sym2] as const
const tupleMix = [1, '2', 3, '4', sym1] as const

type cases = [
  Expect<Equal<TupleToObject<typeof tuple>, { 'tesla': 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y' }>>,
  Expect<Equal<TupleToObject<typeof tupleNumber>, { 1: 1, 2: 2, 3: 3, 4: 4 }>>,
  Expect<Equal<TupleToObject<typeof tupleSymbol>, { [sym1]: typeof sym1, [sym2]: typeof sym2 }>>,
  Expect<Equal<TupleToObject<typeof tupleMix>, { 1: 1, '2': '2', 3: 3, '4': '4', [sym1]: typeof sym1 }>>,
]

// @ts-expect-error
type error = TupleToObject<[[1, 2], {}]>

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/11/answer
  > View solutions: https://tsch.js.org/4/solutions
  > More Challenges: https://tsch.js.org
*/
