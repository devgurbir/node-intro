function sum(a){
    return function(b) {
        if(b){
            return sum(a+b)
        }
        else {
            return a
        }
    }
}

module.exports = sum