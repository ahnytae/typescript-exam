{
  // Array
  const fruits: string[] = ['apple', 'banna']; // readOnly 사용가능 (추천)
  const numbers: Array<number> = [1,2,3,4];
  function printArray(fruits: readonly string[]) {}

  // Tuple => 서로 다른 타입을 담을 수 있다. (*비추*) // interface, type alias 대체 추천
  let student: [string, number];
  student = ['ahny', 29];
  student[0] // ahny
  student[1] // 29
}