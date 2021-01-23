{
  // type aliases
  type Text = string;
  type Funny = number;
  const name : string = 'ahny';
  const age : Funny = 29;

  type Student = {
    name: string;
    age: number;
  }
  const student: Student ={
    name: 'a',
    age: 29
  }

  // StringLiteral Types
  type Name = 'name';
  let ahny: Name;
  ahny = 'name';

  type Hou = 'ronaldu';
  let player: Hou;
  player = 'ronaldu';
}