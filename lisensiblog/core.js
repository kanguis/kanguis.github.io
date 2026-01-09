(function(){
  window._C=function(){
    if(typeof _L!=="function" || typeof _W!=="function"){
      document.body.innerHTML="<h2 style='text-align:center;margin-top:20%'>Theme Rusak</h2>";
      return;
    }
    _L();
    document.body.style.visibility="visible";
  };
})();
