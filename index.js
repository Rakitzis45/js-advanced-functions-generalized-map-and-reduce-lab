function map(sourceCode, cb){
    return sourceCode.map(e => cb(e))
}

function reduce(sourceCode, cb, starting=0){
    return sourceCode.reduce(cb, starting)
}