let name_1 = {
    a:'Nigga',
    b:'Kanye',
    c:23,
    d:47,
    e:2
}
console.log(name_1)
let name_2 = {
    q:'Nigger',
    w:'West',
    y:73,
    r:97,
    t:20
}
console.log(name_2)
function random() {
    for(let key in name_1) {
        if (typeof(name_1[key])== 'number'){
            name_1[key] *= 2
        }
    }
}
function random_2() {
    for(let key in name_2) {
        if (typeof(name_2[key])== 'number'){
            name_2[key] *= 2
        }
    }
}
random()
random_2()
console.log(name_1)
console.log(name_2)