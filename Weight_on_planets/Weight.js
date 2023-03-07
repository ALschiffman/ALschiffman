function searchKeyPress(e)
{
    // look for window.event in case event isn't passed in
    e = e || window.event;
    if (e.keyCode == 13)
    {
        document.getElementById('btn').click();
        return false;
    }
    return true;
}

function compute (){
var a = document.planets.input.value

//Mercury
var me = Math.round(a*.38*100)/100

document.getElementById("mercury").value = me

//Venus
var ve = Math.round(a*.9*100)/100
document.getElementById("venus").value = ve

//Earth
document.getElementById("Earth").value = a

//Mars
var ma = Math.round(a*.38*100)/100
document.getElementById("Mars").value = ma

//Jupiter
var ju = Math.round(a*2.53*100)/100
document.getElementById("Jupiter").value = ju

//Saturn
var sa = Math.round(a*1.07*100)/100
document.getElementById("Saturn").value = sa

//Uranus
var ur = Math.round(a*.89*100)/100
document.getElementById("Uranus").value = ur

//Neptune
var ne = Math.round(a*1.14*100)/100
document.getElementById("Neptune").value = ne

//Sun
var su = Math.round(a*28*100)/100
document.getElementById("Sun").value = su

}

