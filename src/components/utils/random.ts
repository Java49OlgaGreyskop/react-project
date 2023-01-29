export function getRandomNumber(min: number, max: number, isMinInclusive: boolean = true,
    isMaxInclusive: boolean = false): number {
    if ((min === max) && (isMinInclusive || isMaxInclusive)) {
        throw `min value cannot be equal to the max`
    }
    if (min > max) {
        [min, max] = [max, min];
    }
    min = isMinInclusive ? min : min + 1;
    max = isMaxInclusive ? max : max - 1;
    return min + Math.round(Math.random() * (max - min));
}
 export function getRandomMatrix( min: number, max:number, rows: number, columns: number): number[][]{
    const res: number[][]= new Array <number[]>(rows);
    for (let i=0; i < rows; i++){
        res [i] = new Array <number>(columns);
        for (let j=0; j< columns; j++){
res [i][j]= getRandomNumber(min, max, true, true);
 }
}return res;
 }
   export function getRandomArrayElement(array: any[]): any{
    return array[getRandomNumber(0, array.length, true, false)];
 }
  const daysInMonth: number[]=[31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
 export function getRandomDate(minYear: number, maxYear: number): Date{
const year : number= getRandomNumber(minYear, maxYear);
const minMonth: number=0, maxMonth:number=11;
const month: number= getRandomNumber(minMonth, maxMonth,true,true);
const minDay:number=1;
let maxDay: number=(year%4===0 && month==1)? daysInMonth[month]+1: daysInMonth[month];
const day: number= getRandomNumber(minDay, maxDay, true,true);
return new Date(year, month, day);
 }
 