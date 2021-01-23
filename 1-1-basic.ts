{
  // number
  const number:number = 123;

  // string
  const string: string = 'hello';

  // boolean
  const boolean: boolean = true;

  // undefined
  let age: number | undefined = 123; // union type
  age = 123;
  age = undefined;

  // null
  let person: string | null;
  person = "HI";
  person = null;

  // unknow => 무슨 타입이 올지 모르겠다.. (*bad type*)
  let notSure: unknown = 0;
  notSure = 'asdf';
  notSure = 123;

  // any => 어떤 것이든지 아무거나 ㄱㄱ (*So bad type*)
  let a: any = 'asdf';
  a = 123;

  // function
  function print(): void {
    console.log('hello');
    return;
  }

  function find(): number | undefined {
    return 123;
  }

  const find02 = (): number | undefined => {
    return 123;
  }

  // never => 절대 리턴 없음의 의미
  function throwError(message: string): never {
    throw new Error(message);
    // while(true) {}
  }

  // object (*bad type*)
  let obj: object;
  function aceptSomeObject(obj: object) {};
  aceptSomeObject({name: 'ahny'})
}