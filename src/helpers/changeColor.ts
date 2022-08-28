function getColorList(params:string[]): string[] {
  return [""]
}

export function changeColor(input?: string): string[] {
  let list : string[];
  
  if (input === undefined) {
    return ["#000000"]
  } else {
    return ["1", "2", "3"];
  }
}

export default changeColor;
