function supercoder(iteam_1, iteam_2) {

    let mass = "hello!!!!!!"
    console.log(mass, iteam_1, iteam_2)
    console.log(mass, iteam_1 + iteam_2)
}

supercoder(255, 516)


function MF1() {
    console.log("We loved our pappys")
}
let m1 = 10
let m2 = 20

let MF2 = () => { console.log("i am arrived here") }
let MF3 = (m1, m2) => { console.log("Sum = ", m1 + m2) }

MF1()
MF3(m1, m2)



/* function MF1() {
    console.log("We loved our pappys")
}
let m1 = 10
let m2 = 20
let m3 = 30
let m4 = 40

let MF2 = () => { console.log("i am arrived here") }
let MF3 = (m1, m2) => { console.log("Sum = ", m1 + m2) }

let MF4 = (m1 < m2) ?
    (s1, s2) => console.log("order = ", s1 + s2) :
    (mm1, mm2) => console.log("order = ", mm1 - mm2);

MF4(m3, m4) */


function yolochka() {};

yolochka.prototype.fast = function() {
    console.log("Fast!!")
}
yolochka.prototype.green = function(sun, co2) {
    console.log("Green = ", sun, ' + ', co2)
}
yolochka.prototype.shishki = function() {
    console.log('shishki == yolki')
}

let forest = new yolochka()

forest.fast()
forest.green(4500, 50)
forest.shishki()