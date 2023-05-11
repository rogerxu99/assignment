let front = document.querySelector('#front');


window.onload = function() {
    $.get("https://users.sussex.ac.uk/~zx84/3dapp/assignment/test/controller/ImageControllerApi.php?type=2", function (data, status) {
        console.log(data)
        data.forEach(e=>{
            $('.img-content').append(
`    <img src="https://users.sussex.ac.uk/~zx84/3dapp/assignment/test/controller/ImageView.php?id=${e.id}">
`
            )
        })
    })
    changeName('coke')

}

let tdDom = document.querySelector('#tdModels');
console.log(tdDom)
function changeName(val){

    if(val == 'papper'){
        front.setAttribute('position','-3.07427 50.25329 310.79608')
    }else{
        front.setAttribute('position','-3.07427 50.25329 2010.79608')

    }
    $.get(`https://users.sussex.ac.uk/~zx84/3dapp/assignment/test/controller/X3dControllerApi.php?name=${val}`, function (data, status) {
        tdDom.url = data[0].img_src
        console.log(data)
        $('.sub-title').text(data[0].subheading)
        $.get(`https://users.sussex.ac.uk/~zx84/3dapp/assignment/test/controller/ImageView.php?id=${data[0].id}`,function (res,sta){
            console.log(res)
        })
    })
}
