import { log } from "console"

function isPalindromeSlowerApproach(num:number):boolean{
    if(num<0) {
        return false
    }

    const originalArray:string[] = num.toString().split("")
    if(JSON.stringify(originalArray)===JSON.stringify(originalArray.reverse())) return true
    return false
}

function isPalindrome(num:number):boolean{
    if(num<0) return false
    if(num===0) return true
    if(num %10 ===0) return false

    let original:number = num;
    let reversed:number = 0

    while (num > 0) {
        reversed = reversed * 10 + num % 10;
        num = Math.floor(num / 10);
    }

    return original===reversed
}

log(isPalindrome(121))