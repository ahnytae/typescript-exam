{
  // intersection types: & 같은 의미 (유니온과 반대)
  type Student = {
    name: string;
    score: number;
  };

  type Worker = {
    empolyeeId: number;
    work: () => void;
  };

  function internWork(person: Student & Worker) {
    console.log(person.empolyeeId);
  }

  internWork({
    name:'ahny',
    score: 1,
    empolyeeId: 123,
    work: () => {}
  })
}