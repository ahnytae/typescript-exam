{
  // js function
  function jsAdd(num1, num2) {
    return num1 + num2;
  }

  // typescript function
  function tsAdd(num1: number, num2: number): number {
    return num1 + num2;
  }

  // js function
  function jsFetchNum(id) {
    //..
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }

  // typescript function
  function tsFetchNum(id: string): Promise<number> {
    // ..
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }

  // function
  
  // Optional parameter => ok
  // Default parameter => ok
  // Reset parameter
  function addNumbers(...numbers: number[]):number {
    return 123;
  }
}