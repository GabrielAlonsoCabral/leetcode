/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const foundNearByResult = findNearByTwoSums(nums, target)
    if(foundNearByResult.length){
        return foundNearByResult
    }

    const globalResult = findTwoSumsGlobal(nums, target)

    if(globalResult.length){
        return globalResult
    }

    return []
};

function findNearByTwoSums(nums, target){
    const output = []
    let previousNumber = null

    nums.forEach((num,index)=>{
        if(previousNumber===null){
            previousNumber =  num
            return
        }

        if(output.length>0) return
        const currentSum = previousNumber+num

        if(currentSum===target){
            output.push(...[index-1,index])                 
        }

        previousNumber = num
    })

    return output
}

function findTwoSumsGlobal(nums, target){
    const output = []

    nums.forEach((num,index)=>{
        if(output.length>0) return

        nums.find((_num, _index)=>{
            if(output.length>0) return
            if(_index===index) return
            if(_num+num===target){
                output.push(...[index,_index])
            }
        })
    })    
    return output
}