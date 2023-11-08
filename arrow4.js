let arry = [4, 8, 3, 8, 6, 9, 2, 1, 12, 13, 14, 15];
for (let i = 0; i < arry.length; i++)
    for (let j = 0; j < i; j++)
        if (arry[i] < arry[j]) {
            let result = arry[i];
            arry[i] = arry[j];
            arry[j] = result;
        }
console.log(arry);



