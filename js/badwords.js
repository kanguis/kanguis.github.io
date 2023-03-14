var spamer = document.getElementsByClassName('comment-content');   for(var i=0;i<spamer.length;i++){
       spamer[i].innerHTML = comt[i].innerHTML.replace(/anjeng|asu|tai|goblok/gi, "**Astagfirulloh**");
}  
