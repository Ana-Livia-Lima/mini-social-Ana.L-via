let likeCount = 0;
let curtido = false; //fleg bourana
function curtir() {

  if(curtido == false){
    likeCount++;
  document.getElementById("likeCount").innerText = likeCount;

  }else{
likeCount --;
document.getElementById("likeCount").innerText = likeCount;

  }
  }
document.getElementById("likeBtn").addEventListener("click", curtir);
