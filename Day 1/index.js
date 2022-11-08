console.log("Hello World")
let message; //declare variable
message = "Hello" //assign
// var = redeclare dan reassigned
// let = reassgined tapi tidak redeclare
// const = tidak dapat di assigned dan di declare

const width = 3 
const length = 5
const area = width * length
console.log(area)

const perimeter = (width + length) * 2
console.log(perimeter)

const jarijari = 10
const diameter = 2 * jarijari
console.log(diameter)

const phi = 3.14
const keliling_lingkaran= 2 * phi * jarijari
console.log(keliling_lingkaran)

const luas_lingkaran = phi * jarijari**2
console.log(luas_lingkaran)

const a = 60 
const b = 60 
const angles = 180 - a - b
console.log(angles)

let date1 = new Date("2022-11-05")
let date2 = new Date("2022-11-07")

let difference_in_date = date1.getDate()-date2.getDate()
console.log(difference_in_date)

let days = 400 
let tahun = Math.floor(400/365)
let bulan = Math.floor((400%365)/30)
let hari = 400%365%30
console.log(tahun,bulan,hari)
console.log(tahun + " tahun " + " , " + bulan + " bulan " + " , "  + hari + " hari ")



