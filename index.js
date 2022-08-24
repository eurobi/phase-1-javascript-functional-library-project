function myEach(collection, callback){
    let newObj = Object.assign({}, collection)
    for(let ele of Object.entries(newObj)){
        callback(ele[1])
    }
    return collection
}

function myMap(collection, callback){
    const newCollection = Object.assign({}, collection)
    const mappedCollection = []
    for(let ele of Object.entries(newCollection)){
        mappedCollection.push(callback(ele[1]))
    }
    return mappedCollection
}

function myReduce(collection, callback, acc=0){
    const collectionCopy = Object.assign({}, collection)
    let total = acc
    for(let val of Object.values(collectionCopy)){
        total = callback(total, val, collection)
        console.log(total)
     }
     console.log(total)
     return total
}

function myFind(collection, predicate){
    const collectionCopy = Object.assign({}, collection)
    for(let val of Object.values(collectionCopy)){
        if(predicate(val)){
            return val
        }
    }
}

function myFilter(collection, predicate){
    const collectionCopy = Object.assign({}, collection)
    const newCollection = []
    for(let val of Object.values(collectionCopy)){
        if(predicate(val)){
            newCollection.push(val)
        }
    }
    return newCollection
}


function mySize(collection){
    const collectionCopy = Object.assign({}, collection)
    return Object.values(collectionCopy).length

}

function myFirst(collection, n=1){
    if(n>1){
        return collection.slice(0,n)
    }else{
        return collection.slice(0,1)[0]
    }

}

function myLast(collection, n=1){
    if(n>1){
        return collection.slice(collection.length-n)
    }else{
        return collection.slice(-1)[0]
    }
}

function myKeys(object){
    const keyList = []
    for(let key of Object.keys(object)){
        keyList.push(key)
    }
    return keyList
}

function myValues(object){
    const valueList = []
    for(let value of Object.values(object)){
        valueList.push(value)
    }
    return valueList
}

