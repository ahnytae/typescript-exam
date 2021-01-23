{
  // Enum
  // const DAYS_ENUM = Object.freeze({"MONDAY": 0, "TUESDAY": 1});
  // const newDay = DAYS_ENUM.MONDAY; // 0
  // console.log(newDay);

  // type Days = "Monday" | "Tuesday" | "Thursday";
  enum Days {
    Monday = "a",
    Tuesday = "b",
    Thursday = "c",
  }
  let a:Days = Days.Monday;
  a = 'asdf';

}