// const prefix = function(str1 , str2) {
//     // let output = ""
//     for (let i = 0; i <= str1.length-1; i++) {
//         for (let h = 0; h <= str2.length-1; h++) {
//             if (str1[i] == str2[h]) {
//                 str2 = str2.replace(str2[h], str2[h+1])
//                 break;
//             }
//         }
//     }return str2
// }
// console.log(prefix("proce" , "proceed"))

// let arr1 = ['ade' , 'new' , 'ola' , 'sow']
// console.log(arr1[0][0] + arr1[0][1])


// const prefix = function(str) {
//     for (let i = 0; i <= str.length-1; i++){
//     for (let h = 0; h <= str[i].length; h++) {
//         if (str[i][h] == str[i+1][h] && str[i][h] == str[i+2][h]) {
//             return 
//         }else return ""
//     }
//     }
// }

// console.log(prefix(["growth" , "grown" , "growing"]))

// let arr1 = []
// arr1.push(2 , 4 , "rat" , "that" , true)
// console.log(arr1)
// let poppedItems = []
// poppedItems.push(arr1.pop())
// poppedItems.push(arr1.pop())
// poppedItems.push(arr1.pop())
// console.log(arr1)
// console.log(poppedItems)

let str = "monday is best day of the week "
for (let i = 0; i < str.length; i++) {
    let splitedStr = str.split(" ")
    // let words = splitedStr[i].split("")
    // let words[i]
    // console.log(words)
}    

// console.log(word1)

// const palindrome = function(str) {
//     let str1 = str.toLowerCase().replaceAll(' ' , '').replaceAll('!', '').replaceAll('@', '').replaceAll('#', '').replaceAll('$', '').replaceAll('%', '').replaceAll('^', '').replaceAll('&', '').replaceAll('*', '').replaceAll('(', '').replaceAll(')', '').replaceAll('_', '').replaceAll('-', '').replaceAll('+', '').replaceAll('=', '').replaceAll('~', '').replaceAll('`', '').replaceAll('{', '').replaceAll('}', '').replaceAll('[', '').replaceAll(']', '').replaceAll('|', '').replaceAll(':', '').replaceAll(';', '').replaceAll("'" , '').replaceAll('<', '').replaceAll('>', '').replaceAll('?', '').replaceAll('/', '').replaceAll('.', '').replaceAll(',', '')
//     let output
//     for (let i = str1.length-1; i >= 0; i--) {
//          output = str1.charAt(i)
//     }
//     if (str1[i] === output[i]) {
//         return true
//     }else false
// }
// console.log(palindrome("Able was I, 'ere I saw Elba."))

// const palindrome = function(str) {
//     let str1 = str.toLowerCase().replaceAll(' ' , '').replaceAll('!', '').replaceAll('@', '').replaceAll('#', '').replaceAll('$', '').replaceAll('%', '').replaceAll('^', '').replaceAll('&', '').replaceAll('*', '').replaceAll('(', '').replaceAll(')', '').replaceAll('_', '').replaceAll('-', '').replaceAll('+', '').replaceAll('=', '').replaceAll('~', '').replaceAll('`', '').replaceAll('{', '').replaceAll('}', '').replaceAll('[', '').replaceAll(']', '').replaceAll('|', '').replaceAll(':', '').replaceAll(';', '').replaceAll("'" , '').replaceAll('<', '').replaceAll('>', '').replaceAll('?', '').replaceAll('/', '').replaceAll('.', '').replaceAll(',', '')
//     let i = 0
//     while (i <= (str1.length-1)/2) {
//         if (str1[i] === str1[(str1.length-1)-i]) {
//             return true
//         }else return false
//     i++
//     }
// }
// console.log(palindrome("Able was I, 'ere I saw Elba."))

// const thirdHighestNumber = function(arr) {
//     arr.sort(function(a,b){
//         return b-a
//     })
//     return arr[2]
// }
// console.log(thirdHighestNumber([54,67,34,58,9,80,32,62,53,7]))\

// const fir = function(arr) {
//     arr.filter()
// }

// const indices = function(arr,target) {
//     for (let i = 0; i <= arr.length-1; i++) {
//         if (arr[i] + arr[i+1] === target) {
//             return [arr.indexOf(arr[i]) , arr.indexOf(arr[i+1])]
//         }
//     }
// }
// console.log(indices([1,6,8,7,2] , 15))


const indices = function(arr,target) {
    for (let i = 0; i <= arr.length-1; i++) {
        for (let h = 0; h < arr.length; h++) {
            if ((arr[i] + arr[h] === target) && i != h && h > i) {
            return [i,h]
            }
        }
    }
}
// console.log(indices([4,7,8,9,2] , 10))
 
let arr = ['tiger', 'lion', 'leopard', 'cheetah', 'cat']
let newArr1 = arr.find(function(item, i ,arr) {
    return (item.length < 5)
})
let newArr2 = arr.filter(function(item, i, arr) {
    return item.length < 5
})
let newArr3 = arr.map(function(item) {
    return item + "ess"
})        
let newArr4 = arr.forEach(function(item) {
    return item + "esss"
})
// console.log(newArr1)

const capitalizer1 = str=> {
    let arr = str.split(" ")
    arr = arr.map((item,i)=> {
        return item[0].toUpperCase() + item.slice(1)
    })
    str = arr.join(" ")
    return str
}
// console.log(capitalizer1("the boy is not bad but not good"))

// Strings

// No 1

const stringOrNot = function(str) {
    if (typeof(str) == "string") {
        return true
    }else return false
}  

// No 2

const blank = function(str) {
    if (str == "") {
        return true
    }else return false
}

//No 3

const split = function(str) {
    return str.split(" ")
}

//No 4

const truncate = function(str , value) {
    return str.slice(0 , value)
}

// No 5

// const abbreviation = function(str) {
//     return str.slice(0 , str.indexOf(" ")) + " " + str[str.indexOf(" ")+1].toUpperCase() + "."
// }

//No 6

const protect_email = function(str) {
    return str.slice((str.indexOf("_")+1) , str.indexOf("@"))
}

// No 7

const parameterize = function(str) {
    return str.toLowerCase().replaceAll('!', '').replaceAll('@', '').replaceAll('#', '').replaceAll('$', '').replaceAll('%', '').replaceAll('^', '').replaceAll('&', '').replaceAll('*', '').replaceAll('(', '').replaceAll(')', '').replaceAll('-', '').replaceAll('+', '').replaceAll('=', '').replaceAll('~', '').replaceAll('`', '').replaceAll('{', '').replaceAll('}', '').replaceAll('[', '').replaceAll(']', '').replaceAll('|', '').replaceAll(':', '').replaceAll(';', '').replaceAll("'" , '').replaceAll('<', '').replaceAll('>', '').replaceAll('?', '').replaceAll('/', '').replaceAll('.', '').replaceAll(',', '').split(" ").join("-")
}

//No 8

const firstLetter = function(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
}

//No 9 
const capitalizer = function(word) {
    let output =  " "
    let count = 0
    for (let i = 0; i <= word.length-1; i++) {
        if (word[i] === " ") {
        count++ 
        }
    }
    for (let i = 0; i <= count-1; i++) {
        output = `${output}${word[0].toUpperCase()}${word.slice(1 , word.indexOf(" "))} `
        word = word.slice(word.indexOf(" ") + 1)
    }
    return output
}  

//No 10
const swapCase = function(str) {
    let output = ""
    for (let i = 0; i<= str.length-1; i++) {
        if (str.includes(str[i].toLowerCase())) {
            output = output + str[i].toUpperCase()
        }else if (str.includes(str[i].toUpperCase())) {
            output = output + str[i].toLowerCase()
        }
    }
    return output 
}



// const split = str=> str.split(" ")
// console.log(split("you are a girl not a boy"))

// const callback = arr=> arr.map(item=>item*10)

// console.log(callback([2,4,5,6,7,8]))

// const callback2 = arr=> arr.map(item=>item*10).sort((a,b)=>b-a)
// console.log(callback2([2,4,5,6,7,8]))

// const uncapitalizer = str=> str.toLowerCase()
// console.log(uncapitalizer("THEY ARE GOOD ,YES THEY REALLY ARE"))


// const split_1 = function(str) {
//     return str.split(" ")
// }



// const removeDuplicates = function (nums) {
//     for (let i = 0; i< nums.length; i++) {
//         if (nums[i] == nums[i+1]) {
//             nums.splice(i , 1)
//         }
//     }
//     return nums
// }

const duplicatedNums = (nums)=> {
    nums = nums.map((item , i)=>{
        if (nums[i] === nums[i+1]) {
            return item = "_"
        }else return item
    })
    nums = nums.filter(item=> item!=="_")
    let k = nums.length
    return nums
}
// console.log(duplicatedNums([0,0,0,1,1,1,2,2,2,3,3,3,4,6,6,7,9,10,10]))

// reptiles = ['crocs', 'snake', 'lizard', 'aligator']

// let [frep , srep, ...rest] = reptiles
// console.log(frep)
// console.log(srep)
// console.log(rest)
// console.log(freps)

// let reptiles2 = [...reptiles]
// reptiles2.pop()
// console.log(reptiles2)
// console.log(reptiles)

// let str1 = "that boy is not bad but not good"
// let arr1 = str1.split(" ")
// let obj1 = {
//     item1: arr1[0],
//     item2: arr1[1],
//     item3: arr1[2],
//     item4: arr1[3],
//     item5: arr1[4],
//     item6: arr1[5],
//     item7: arr1[6],
//     item8: arr1[7],
// }
// let obj2 = {
//     items1: obj1.item1[0].toUpperCase() + obj1.item1.slice(1),
//     items2: obj1.item2[0].toUpperCase() + obj1.item2.slice(1),
//     items3: obj1.item3[0].toUpperCase() + obj1.item3.slice(1),
//     items4: obj1.item4[0].toUpperCase() + obj1.item4.slice(1),
//     items5: obj1.item5[0].toUpperCase() + obj1.item5.slice(1),
//     items6: obj1.item6[0].toUpperCase() + obj1.item6.slice(1),
//     items7: obj1.item7[0].toUpperCase() + obj1.item7.slice(1),
//     items8: obj1.item8[0].toUpperCase() + obj1.item8.slice(1),
// }
// let capitalizedarr = `${obj2.items1} ${obj2.items2} ${obj2.items3} ${obj2.items4} ${obj2.items5} ${obj2.items6} ${obj2.items7} ${obj2.items8}`
// console.log(capitalizedarr)

// let student1 = {
//     name: "Taiwo",
//     class: "SSS3",
//     age: 18,
//     hobbies: ["talking" , "singing"],
//     friends: [{name: "Ogechi",hobbies: ["writing" , "music"]}, {name: "ada" , hobbies: ["movies" , "music"]}],
//     siblings: {
//         name: ["Kenny" , " Habeeb"],
//         age: [18 , 20]
//     }
// }
// console.log(student1)

let student2 = {
    name: "joe",
    dob: "23/23/23",
    gender: 'male',
    age: 21,
    likes: ['football', 'pingpong', 'money', 'cars'],
    friends: [{name: "selim", hobbies: ['playstation', 'tiktok']},{name: 'taofiq', hobbies: ['js', 'table-tennis']},{}],
    laughMode: function () {
        return('😊')
    }
}
// console.log(student2.friends[1].hobbies[1])
// console.log(student2.likes[1])
// console.log(student2.friends[0].name)


// const palindrome = function(str) {
//         let str1 = str.toLowerCase().replaceAll(' ' , '').replaceAll('!', '').replaceAll('@', '').replaceAll('#', '').replaceAll('$', '').replaceAll('%', '').replaceAll('^', '').replaceAll('&', '').replaceAll('*', '').replaceAll('(', '').replaceAll(')', '').replaceAll('_', '').replaceAll('-', '').replaceAll('+', '').replaceAll('=', '').replaceAll('~', '').replaceAll('`', '').replaceAll('{', '').replaceAll('}', '').replaceAll('[', '').replaceAll(']', '').replaceAll('|', '').replaceAll(':', '').replaceAll(';', '').replaceAll("'" , '').replaceAll('<', '').replaceAll('>', '').replaceAll('?', '').replaceAll('/', '').replaceAll('.', '').replaceAll(',', '')
//         let output
//         for (let i = str1.length-1; i >= 0; i--) {
//              output = str1.charAt(i)

//             if (str1[i] === output[i]) {
//                 return true
//             }else false
//         }
//     }
// console.log(palindrome("Able was I, 'ere I saw Elba."))




// let arr1 = ["strong" , "sink" , "lion" , "mail"]
// let arr2 = arr1.map(item=> item + "ess")
// let arr3 = arr1.map((item,i)=> item[0] +2)
// console.log(arr3)




const mean = num=> {
    return num.reduce((acc, curr)=> (acc += curr) , 0) / num.length
}
// console.log(mean([2, 13 , 4 , 5, 27 , 2, 1, 45 , 45, 234]))

// console.log(range([2, 13 , 4 , 5, 27 , 2, 1, 45 , 45, 234]))
// let nums = nums1.concat(nums2)

// const rem = (nums)=> {
//     for(let i =0; i < nums.length; i++) {
//         for(j=i+1; j<nums.length; j++) {
//             if(nums[i] == nums[j]) {
//                 nums.splice(j, 1, '_')
//             }
//         }
//     }
//     nums.sort()
//     let count = 0
//     nums.forEach(item=> {
//         if(item!=='_') {
//             count++
//         }
//     })
//     return `${count}, nums = [${nums}]`
//         }
    
// console.log(rem([0,0,1,1,1,2,2,3,3,1]))    

// let 
//     return nums.map((item , i , arr)=> {
//         if (arr[0] == item) {
            
//         }
//     })
// const mode = nums=> {
//     let count1 = 0
//     let count2 = 0
    // let count3 = 0
    // // for (let i = 0; i <  nums.length; i++) {
    //     let i = 0
    //     while (i <= nums.length-1) {
    //         for (let i = 0; i <= nums.length-1; i++) {
    //         if (nums[0] == nums[i]) {
    //             count1++
    //         }
    //         }
    //         for (let i = count1; i <= nums.length-1; i++) {
    //             if (nums[count1] == nums[i]) {
    //                 count2++
    //             }
    //         }

    //         for (let i = 0; i <= count1-1; i++) {
    //             if (count2 > count1) {
    //                 nums.splice(0 , count1)
    //             }
    //         }
    //         for (let i = 0; i <= count2-1; i++) {
    //             if (count1 > count2) {
    //                 nums.splice(count1 , count2)
    //             }
    //         }
    //         i++
    //     }
        // for (let i =  count1; i <= nums.length-1; i++) {
        //     if (nums[count1] == nums[i]) {
        //         count2++
        //     }
        // }
        // for (let i = 0; i <= count1.length-1; i++) {
        //     if (count2 > count1) {
        //         nums.splice(0 , count1)
        //     }
        // }
        // for (let i = 0; i<= count2.length-1; i++) {
        //     if (count1 > count2) {
        //         nums.splice(count1 , count2)
        //     }
        // }
        // for (let i =  count1; i <= nums.length-1; i++) {
        //     if (nums[count1] == nums[i]) {
        //         count2++
        //     }
        //     if (count2 > count1) {
        //         nums.splice(0 , count1)
        //         count1 = 0
        //      }else if (count1 > count2) {
        //          nums.splice(count1 , count2)
        //          count2 = 0
        //      }
        // }
        
    // }
    
//     return nums
// }
// else if (count1 == count2) {
//     let count = count1 + count2
//     for (let i =  count; i <= nums.length-1; i++) {
//         if (nums[count] == nums[i]) {
//             count3++
//         }
//     }
//     if (count3 > count1 && count3 > count2) {
//         nums.splice(0 , count)
//     }
// }

//No 1
const median = nums=> {
    nums.sort((a,b)=> a-b)
    if (nums.length % 2 == 0) {  
        return (Number(nums.splice((nums.length-1)/2 , 1)) + Number(nums.splice(nums.length/2 , 1)))/2
    }else return Number(nums.splice((nums.length-1)/2 , 1)) 
}

//No 2
// const mode = nums=> {
//     let counts = []
//     let countOfHighestOccuringNumber = 0
//     let highestOccuringNumber = 0
//     nums.sort((a,b)=> a - b)
//     nums = nums.map(item=> {
//         if (counts[item] === undefined) {
//             return counts[item] = 1
//         }else return counts[item]++
//     })
    
//     nums.map(item=> {
//         if(countOfHighestOccuringNumber < counts[item]) {
//             highestOccuringNumber = item
//             countOfHighestOccuringNumber = counts[item]
//         }
//     })
//     return highestOccuringNumber
// }

//No 3
const range = nums=> {
    nums.sort((a,b)=> a-b)
    return nums[nums.length-1] - nums[0]
}


// console.log(mode([1,2,3,4,4,5,6,7,1]))

// let obj1 = {
//     school: [[1,2,3],[4,6,7, {a:8,b:9,c:10, d: [11,12]}]],
//     clinic: {a:13,b:14,c:15, d: [16,17]}
// }
// console.log(obj1.school[1][3].d[0])
// console.log(obj1.clinic.a)
// console.log(obj1.clinic.b)
// console.log(obj1.clinic.c)
// console.log(obj1.clinic.d[0])
// console.log(obj1.clinic.d[1])
// console.log(obj1.school)

const plusOne = (digits)=> (BigInt(digits.join("")) + 1n).toString().split("").map(item=> Number(item))

// console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]))
// console.log(plusOne([4,3,2,1]))
// console.log(plusOne([9]))

const searchRange = function(nums, target) {
   return [nums.indexOf(target) , nums.lastIndexOf(target)]
}
// console.log(searchRange([5,7,7,8,8,10], 4))

const addTwoNumbers = (l1, l2)=> {
    return (BigInt(l1.join("")) + BigInt(l2.join(""))).toString().split("").map(item=> Number(item))
}
// console.log(addTwoNumbers([99] , [91]))

const multiply = (num1, num2)=> (BigInt(num1)*BigInt(num2)).toString()
// console.log(multiply("123456789" , "987654321"))

const to = s=> {
  if (s[0] == NaN) {
    s = s.split(" ").pop()
    return Number(s)
  }
}
// console.log(to("4193 with words"))
// console.log(to("words and 987"))

// let slot = Number(prompt("Enter the number of your slot"))

// switch (slot) {
//     case 1: 
//        console.log("You won a brand new car")
//        break
//     case 2:
//         console.log("You won a generator")
//         break
//     case 3:
//         console.log("You won Samsung Z flip 5")
//         break
//     case 4:
//         console.log("You won a ticket to Switzerland")
//         break
//     case 5:
//         console.log("You won a blackpink sweatshirt")
//         break
//     default: console.log("Better luck next time") 
// }

var removeElement = function(nums, val) {
     return nums.map(item=>{
        if (item == val) {
            return item = "_"
        }else return item
    }).filter(item=> item!=="_")
};
// console.log(removeElement([3,2,2,3] , 3))
let array = [1,1,1,1,2,2,2,3,3,4,5,5,5,5]
const mode = (arr)=> {
    let counter1 = 1 // this counts the occurences of the each number
    let counter2 = 0  //this tracks the total no of elements counted so far
    let obj = {} //this is to hold {element:no of occurence} as key: value pair
    arr.sort((a,b)=> a-b)
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i+1]) {   // compares the current element with the next element
            counter1++     // if the current element is the same as the next element counter is incremented
        }
        else{     //otherwise the cuurent elem is nt same as the next element, meaning the count of the current element is complete...
            obj[arr[i]] = counter1   // then we make the {element:no of occurence}
            counter2 = counter2 + counter1  // the update total no of elements counted so far...
            i = counter2 -1   // then set index to the last element counted completed
            counter1 = 1   // reset counter1 to count the next unique element
        }
        // at the end of the loop, the obj is holding all the elements and their counts as key:value pairs...
    }
let numss =[]
    let maxValue = Math.max(...Object.values(obj))  //this picks the highest value (count) in the obj 
for(let prop in obj) {
   if(obj[prop] === maxValue) {  // then iterate through the obj and determine the number (key) that has the highest value
     numss.push(Number(prop))   //return that number that has the highest value
   } 
    }
    return numss
}
// console.log(mode(array))

// let str3 = "the cat is dog"
// for (let item of str3) {
//     console.log(item)
// }

// let nums = nums1.concat(nums2)
//     nums.sort((a,b)=> a-b)
//     if (nums.length % 2 == 0) {  
//         return (Number(nums.splice((nums.length-1)/2 , 1)) + Number(nums.splice(nums.length/2 , 1)))/2
//     }else return Number(nums.splice((nums.length-1)/2 , 1))

const wordBreak = (s, wordDict)=> {
    wordDict = wordDict.join("")
    if (s == "") return false
    else if (s.includes(wordDict) || wordDict.includes(s)) return true
    else return false
}
// console.log(wordBreak("abcd", ["a" , "abc" , "b" ,"cd"]))

const reverseWords = (s)=> s.trim().split(" ").filter(item=> item !== '').reverse().join(" ")
// console.log(reverseWords("the sky is  blue"))

var removeElement = function(nums, val) {
    for (item of nums) {
        if (item == val) {
            item == "_"
        }
    }
    return nums
};