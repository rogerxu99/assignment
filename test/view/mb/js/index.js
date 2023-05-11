window.onload = function() {
    // 本地启动之后请将 所有的请求地址设置为localhost:8080
    $.get('https://users.sussex.ac.uk/~zx84/3dapp/assignment/test/controller/ImageControllerApi.php?type=1',(data,status)=>{
        console.log(data)
        data.forEach(e=>{
            $('.content').append(`
      <div class="con-hd">
        <h4>
          ${e.headline +'    '+ e.subheading}
        </h4>
      </div>
      <div class="imgBg" style="background: url('https://users.sussex.ac.uk/~zx84/3dapp/assignment/test/controller/ImageView.php?id=${e.id}'); background-size: 100% 100%;"></div>
      <div class="content-text">
      ${e.description}
</div>
            `)
        })
    })
}
function toGitHub(){
  window.open('https://github.com/rogerxu99/Coke','blank')
}
