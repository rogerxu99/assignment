
window.onload = function() {
  $.get('https://users.sussex.ac.uk/~zx84/3dapp/assignment/test/controller/ImageControllerApi.php?type=1',(data,status)=>{
        console.log(data)
        data.forEach(e=>{
            $('.right').append(`
                <div class="item">
                <div class="bg" style="background: url('https://users.sussex.ac.uk/~zx84/3dapp/assignment/test/controller/ImageView.php?id=${e.id}');background-size: 100% 100%"></div>
                <div class="item-text">
                    <h2>${e.headline}</h2>
                    <h2>${e.subheading}</h2>
                    <p style="width: 100%">
                    ${e.description}
               </p>
                </div>
            </div>
            
            `)
        })

    })
}

function toGitHub(){
    window.open('https://github.com/rogerxu99/Coke','blank')
}
