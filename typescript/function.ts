type func = (x:number,y:number) => number;

const sum: func = (x,y) => {
    return x+y;
}

console.log(sum(12,23));