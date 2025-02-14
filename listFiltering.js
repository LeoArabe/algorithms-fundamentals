let list = [1,2,'a','b','123',0,-1];

function filter_list(l) {
    let li = l.filter((i) => Number.isInteger(i) && i >= 0 );
    return li
}

console.log(filter_list(list))