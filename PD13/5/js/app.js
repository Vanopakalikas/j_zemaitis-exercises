const { text } = require("express")

let spindulys = 2
let kIlgis = 3
let sIlgis = 5
let sPlotis = 4
temp = []

temp[0] = spindulys*3.14**2
temp[1] = kIlgis**2
temp[2] = sIlgis* sPlotis

for(i = 0; i < 3; i++){
    if(temp[i] > spindulys)
    spindulys = temp[i]
}
console.log(spindulys)
console.log(temp)