const matrix = [
    {animal: 'dog', Year: 200},
    {animal: 'cat', Year: 100},
    {animal: 'mouse', Year: 150}
];

const god = matrix.filter(function(item){ 
        return item.Year >= 100;
});

const mathe = [5,1,3,8,9,4];

const mathe1 = mathe.splice(1,3,"y","h","k","fdsfs")
console.log(mathe1)
console.log(mathe)

/*const b = god.concat({animal: 'fish', Year: 210});
console.log(b)

console.log(god)

const a = god.concat({animal: 'snake', 'Year': 1000});
console.log(a);*/
