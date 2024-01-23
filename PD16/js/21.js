function myliuVaclova(aukstis,ilgis,plotis, meileKvadratu){
    skaiciavke = meileKvadratu(aukstis,ilgis,plotis);
    return 'meiles dydis ' + skaiciavke + ' m^3';
}
function meileKvadratu(aukstis,ilgis,plotis){
    var plotas = aukstis * ilgis * plotis;
    return plotas;
}
console.log(myliuVaclova(2,3,4,meileKvadratu));

// let me know if you checked this out XD