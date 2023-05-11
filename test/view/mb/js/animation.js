let y = 1
let rotateYInterval = null
let rotateDom = document.querySelector('#rotation')


function rotateY(){
    if(rotateYInterval){
        clearInterval(rotateYInterval)
        rotateYInterval = null
    } else {
        rotateYInterval = setInterval(()=>{
            y+=0.01
            rotateDom.setAttribute('rotation',`0,1,0,${y}`)
        },5)
    }
}


let z = 1
let rotateZInterval = null
function rotateZ(){
    if(rotateZInterval){
        clearInterval(rotateZInterval)
        rotateZInterval = null
    } else {
        rotateZInterval = setInterval(()=>{
            z+=0.01
            rotateDom.setAttribute('rotation',`0,0,1,${z}`)
        },5)
    }
}

let x = 1
let rotateXInterval = null
function rotateX(){
    if(rotateXInterval){
        clearInterval(rotateXInterval)
        rotateXInterval = null
    } else {
        rotateXInterval = setInterval(()=>{
            x+=0.01
            rotateDom.setAttribute('rotation',`1,0,0,${x}`)
        },5)
    }
}

function stopAnimation(){
    if(rotateXInterval){
        clearInterval(rotateXInterval)
        rotateXInterval = null
    }
    if(rotateZInterval){
        clearInterval(rotateZInterval)
        rotateZInterval = null
    }
    if(rotateYInterval){
        clearInterval(rotateYInterval)
        rotateYInterval = null
    }
}




let headLightDom = document.querySelector('#head')
let onOrOff = true
function headLightOnOff(){
    if(onOrOff){
        headLightDom.setAttribute('headlight','false')
        onOrOff = false
    }else {
        headLightDom.setAttribute('headlight','true')
        onOrOff = true
    }
}
function lightDefault(){
    headLightDom.setAttribute('headlight','true')
    onOrOff = true
}

function left(){
    rotateDom.setAttribute('rotation',`0,1,0,1.5`)
}

function defaultO(){
    rotateDom.setAttribute('rotation',`0,1,0,0`)

}

function right(){
    rotateDom.setAttribute('rotation',`0,1,0,-1.5`)

}
function toGitHub(){
    window.open('https://github.com/rogerxu99/Coke','blank')
}