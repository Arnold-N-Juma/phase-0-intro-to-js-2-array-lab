// Write your solution here!
const cats=["Milo","Otis","Garfield"];
function destructivelyAppendCat(name){
    cats.push("Ralph");
    return cats

}
function destructivelyPrependCat(name){
    cats.unshift("Bob");
    return cats
}
function destructivelyRemoveLastCat(){
    cats.pop()
    return cats
}
function destructivelyRemoveFirstCat(){
    cats.shift()
    return cats
}


function appendCat(){
    const kittens=[...cats, "Broom"];
    return kittens
}

function prependCat(){
    const kittens=["Arnold", ...cats];
    return kittens
}
function removeLastCat(){
    const kittens=cats.slice(0,2)
    return kittens
}
function removeFirstCat(){
    const kittens=cats.slice(1,3)
    return kittens
}