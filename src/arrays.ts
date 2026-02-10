/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
  if (numbers.length === 0)
    return [];
  else if (numbers.length === 1)
    return [...numbers, ...numbers];
  else
    return [numbers[0], numbers[numbers.length-1]]
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    return numbers.map((currentNum: number): number => currentNum *3);
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    return numbers.map((currentNum: string): string => {
      let currentIntNum:number = parseInt(currentNum);
      if (Number.isNaN(currentIntNum))
        return 0;
      else
        return currentIntNum;
    });
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    let dollarlessNums:string[] = amounts.map((currentNum:string): string => {
      if (currentNum[0] === "$")
        currentNum = currentNum.substring(1);
      return currentNum;
    });
    return stringsToIntegers(dollarlessNums);
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    let shouting:string[] = messages.map((currentMsg:string):string => {
      if (currentMsg[currentMsg.length-1] === "!")
        currentMsg = currentMsg.toUpperCase();
      return currentMsg;
    });
    let noQuestions:string[] = shouting.filter((newMsg:string):boolean => {
      return (newMsg[newMsg.length-1] !== "?");
    });
    return noQuestions;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    let shortWords:string[] = words.filter((word:string):boolean => {
      return word.length < 4;
    });
    return shortWords.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    let BASERGB:string[] = ["red", "blue", "green"];

    let notRGB:string[] = colors.filter((color:string):boolean => {
      return !(BASERGB.includes(color.toLowerCase()));
    });
    return notRGB.length === 0;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    if (addends.length == 0)
      return "0=0";
    let sum:number = addends.reduce((currentTotal:number, num:number) =>
      currentTotal+num, 0);
    return String(sum) + "=" + addends.join("+");
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    let hasNegative:boolean = values.some((value:number): boolean => {
      return value < 0;
    });
    if (hasNegative)
    {
      let negativeIndex:number = values.findIndex((value:number):boolean => {
        return value < 0;
      });
      let positiveValues:number[] = values.slice(0, negativeIndex);
      let sum = positiveValues.reduce((currentTotal:number, num:number) =>
        currentTotal+num, 0);
      let result = [...values];
      result.splice(negativeIndex+1, 0, sum);
      return result;
    }
    else
    {
      let sum = values.reduce((currentTotal:number, num:number) =>
        currentTotal+num, 0);
      let result = [...values];
      result.splice(result.length, 0, sum);
      return result;
    }
}
