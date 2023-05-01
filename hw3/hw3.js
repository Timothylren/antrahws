// 1.  Write a JavaScript function that reverse a number. Assuming the input number is a positive integer.
    function reverseNumber(num) {
        let reverseNum = 0;
        while(num > 0) {
            reverseNum = reverseNum * 10 + num % 10;
            num = Math.floor(num / 10);
        }

        return reverseNum;
    }

    console.log(reverseNumber(32243));
    console.log(reverseNumber(1234567));

/* 2.  Write a JavaScript function that checks whether a passed string is palindrome or not? 
A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g.,
madam or nurses run. */

    function checkPalindrome(str) {
        const cleanStr = str.replace(/\s+/g, '');
        let i = 0;
        let j = cleanStr.length - 1;

        while (i < j){
            if (cleanStr.charAt(i).toUpperCase() != cleanStr.charAt(j).toUpperCase()){
                return false;
            }
            i++;
            j--;
        }

        return true;

    }

    console.log("madam -> " + checkPalindrome("madam"));
    console.log("nurses run -> " + checkPalindrome("nurses run"));
    console.log("data -> " + checkPalindrome("data"));
    console.log("1234321 -> " + checkPalindrome("1234321"));

    /*3. Write a JavaScript function that generates all combinations of a string.*/

    function findAllSubstring(str) {
        let result = [];

        for(let i = 0; i < str.length; i++){
            for(let j = i + 1; j <= str.length; j++){
                result.push(str.substring(i, j));
            }
        }

        return result;
    }

    console.log(findAllSubstring("dog"));

    /*4. Write a JavaScript function that returns a passed string with letters in alphabetical order. */

    const sortString = str => str.split("").sort().join("");

    console.log(sortString("webmaster"));
    console.log(sortString("bcad"));

    /*5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of
    each word of the string in upper case.*/

    const firstLetterToUpper = str => {
        let words = str.split(" ");

        for(let i = 0; i < words.length; i++){
            words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
        }
        return words.join(' ');

    };

    console.log(firstLetterToUpper("this is a test"));
    console.log(firstLetterToUpper("this is a  difficult test"));

    /*6. Write a JavaScript function that accepts a string as a parameter and find the longest word
    within the string.*/

    const findLongestWord = str => {
        let words = str.split(' ');
        let result = "";

        for(let word of words){
            if (word.length > result.length){
                result = word;
            }
        }
        return result;
    };

    console.log(findLongestWord("a aa aaa aaaa aaaaa"));
    console.log(findLongestWord("web development tutorial"));

    /*7. Write a JavaScript function that accepts a string as a parameter and counts the number of
    vowels within the string.*/

    const countVowls = str => {
        const vowels = 'aeiou';
        let count = 0;

        for(let i = 0; i < str.length; i++){
            if(vowels.indexOf(str.charAt(i).toLowerCase()) !== -1){
                count++;
            }
        }

        return count;
    };

    console.log(countVowls("the quick brown fOx"));

    /*8. Write a JavaScript function that accepts a number as a parameter and check the number is
    prime or not.*/

    const checkPrime = num => {
        if (num <= 1){
            return false;
        }
        const maxFactor = Math.sqrt(num);
        for (let i = 2; i < maxFactor; i++){
            if(num % i === 0){
                return false;
            }
        }

        return true;
    };

    console.log(checkPrime(7));
    console.log(checkPrime(97));
    console.log(checkPrime(1001));
    //9. Write a JavaScript function which accepts an argument and returns the type. 

    const checkType = obj => typeof obj;
    //const checkType = obj => Object.prototype.toString.call(obj);

    //10. Write a JavaScript function which returns the n rows by n columns identity matrix. 

    const createIdentityMat = n =>{
        let result = [];
        for(let i = 0; i < n; i++){
            let row = [];
            for(let j = 0; j < n; j++){
                if(i===j){
                    row.push(1);
                }else{
                    row.push(0);
                }
            }
            result.push(row);
        }
        return result;
    };

    console.log(createIdentityMat(3));
    console.log(createIdentityMat(1));

    //11. Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively. 

    const findNum = nums =>{
        nums.sort((a, b) => a - b);

        const i = nums[1];
        const j = nums[nums.length - 2];

        return [i , j];
    };

    console.log(findNum([1,2,3,4,5]));

    //12. Write a JavaScript function which says whether a number is perfect. 

    const checkPerfectNum = num =>{
        let sum = 0;
        for(let i = 1; i < num; i++){
            if(num % i === 0){
                sum += i;
            }
        }

        return num === sum;
    };

    console.log(checkPerfectNum(8128));

    console.log(checkPerfectNum(69420));

    //13. Write a JavaScript function to compute the factors of a positive integer.

    /*const findPrimeFactors = num =>{
        let result = [];
        while(num > 1){
            for(let i = 2; i <= num; i++){
                if(num % i === 0){
                    result.push(i);
                    num /= i;
                    break
                }
            }
        }

        return result;
    }*/

    const findFactors = num =>{
        let result = [];
        for (let i = 1; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                result.push(i);
                if (i !== num / i) {
                result.push(num / i);
                }
            }
        }
        return result;
    };

    console.log(findFactors(6));
    console.log(findFactors(69420));

    // 14. Write a JavaScript function to convert an amount to coins.
    const convertToCoin = (amount, coins) => {
        let result = [];

        for (let i = 0; i < coins.length; i++) {
            while (amount >= coins[i]) {
                result.push(coins[i]);
                amount -= coins[i];
            }
        }
      
        return result;
    };

    // 15. Write a JavaScript function to compute the value of bn where n is the exponent and b is the bases. Accept b and n from the user and display the result. 
    const calcExpo = () => {
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout,
        })
        readline.question("Input base and exponent separated by single space: ", n => {
            let nums = n.split(' ').map(n => parseInt(n));
            console.log(nums);
            console.log("result is: ", Math.pow(nums[0], nums[1]));
            readline.close();
        })
    };

    // 16. Write a JavaScript function to extract unique characters from a string. 
    const getUniqueCharNum = str => {
        let result = "";
      
        for (let i = 0; i < str.length; i++) {
            if (result.indexOf(str[i]) === -1) {
                result += str[i];
            }
        }
      
        return result;
    };

    // 17. get occurrences of each characters of a given string;
    const getFreq = str => {
        const counts = {};
        for (let i = 0; i < str.length; i++) {
            const char = str[i];
            counts[char] = counts[char] ? counts[char] + 1 : 1;
        }
        return counts;
    };

    // 18. Write a function for searching JavaScript arrays with a binary search. 
    const bsearch = (arr, target) => {
        let left = 0;
        let right = arr.length - 1;
      
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (arr[mid] === target) {
                return mid;
            } else if (arr[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
      
        return -1;
    };
    // 19. Write a JavaScript function that returns array elements larger than a number. 
    const getLargerNums = (arr, num) => {
        const largerElements = [];
      
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > num) {
                largerElements.push(arr[i]);
            }
        }
      
        return largerElements;
    };

    // 20. Write a JavaScript function that generates a string id (specified length) of random characters. 
    const getRandomStr = length => {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
      
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
      
        return result;
    };

    // 21. Write a JavaScript function to get all possible subset with a fixed length (for example 2) combinations in an array. 
    const getSubsets = (arr, k) => {
        const result = [];
        const len = arr.length;
        const getCombos = (start, combo) => {
            if (combo.length === k) {
                result.push(combo);
            } else {
                for (let i = start; i < len; i++) {
                getCombos(i + 1, combo.concat(arr[i]));
                }
            }
        };
        getCombos(0, []);
        return result;
    };

    // 22. Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string. 
    const countLetter = (str, letter) => {
        let count = 0;
        for (let i = 0; i < str.length; i++) {
            if (str.charAt(i) === letter) {
                count++;
            }
        }
        return count;
    };

    // 23. Write a JavaScript function to find the first not repeated character. 
    const getFirstNonRepeatedChar = str =>  {
        let charCount = {};
        
        for (let i = 0; i < str.length; i++) {
            if (charCount[str[i]]) {
                charCount[str[i]]++;
            } else {
                charCount[str[i]] = 1;
            }
        }
      
        for (let i = 0; i < str.length; i++) {
            if (charCount[str[i]] === 1) {
                return str[i];
            }
        }
      
        return;
    };

    // 24. bubble sort
    const bubbleSort = arr => {
        for (let i = 1; i < arr.length; ++i) {
            for (let j = 0; j < arr.length - i; ++j) {
                if (arr[j] > arr[j + 1]) {
                    [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                }
            }
        }
        return arr;
    }

    // 25. Write a JavaScript function that accept a list of country names as input and returns the longest country name as output. 
    const getLongestCountryName = countryNames => {
        let result = '';
        for (let i = 0; i < countryNames.length; i++) {
            if (countryNames[i].length > result.length) {
                res = countryNames[i];
            }
        }
        return res;
    }

    // 26. Write a JavaScript function to find longest substring in a given a string without repeating characters. 
    const findLongestSubstr = str => {
        let mem = {};
        let res = '';
        for (let i = 0, j = 0; i < str.length;) {
            while (!(str[i] in mem)) {
                mem[str[i]] = i;
                i ++;
            }
            if (i - j > res.length) {
                res = str.slice(j, i);
            }
            
            j = mem[str[i]] + 1;
            delete mem[str[i]];
        }
        return res;
    }

    // 27. Write a JavaScript function that returns the longest palindrome in a given string. 
    const longestPalindrome = str =>  {
        let longest = '';
        for (let i = 0; i < str.length; i++) {
            for (let j = i + 1; j <= str.length; j++) {
                let substring = str.slice(i, j);
                if (checkPalindrome(substring) && substring.length > longest.length) {
                longest = substring;
                }
            }
        }
        return longest;
      }

    // 28. Write a JavaScript program to pass a 'JavaScript function' as parameter. 
    const exec = (func, ...args) => func(...args);

    // 28. Write a JavaScript function to get the function name. 
    const reflectFuncName = func => func.name;