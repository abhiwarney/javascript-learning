//again this switch is also same like java , nothing much to explore

//example

let month = 6;

switch (month) {
  case 1:
    console.log("january");
    break;
  case 2:
    console.log("february");
    break;
  case 3:
    console.log("march");
    break;   //if we skip a break statement , the flow executes below cases until break is reached!
  case 4:
    console.log("april");
    break;
  default:
    console.log("invalid month");
    break;
}
