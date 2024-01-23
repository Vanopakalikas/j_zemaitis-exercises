let skaicius = []
for(let i = 0; i < 99; i++){
    skaicius[i] = Math.floor(Math.random() * 9999);
}
console.log(skaicius);
skaicius.forEach(lyginis => {
    if(lyginis % 2 == 0){
        console.log(lyginis);
    }
})