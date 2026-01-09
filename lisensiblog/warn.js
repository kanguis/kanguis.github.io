(function(){
  window._W=function(msg){
    document.body.insertAdjacentHTML("beforeend",
      "<div style='position:fixed;inset:0;z-index:999999;background:rgba(0,0,0,.9);color:#fff;display:flex;align-items:center;justify-content:center;text-align:center;padding:20px'>"+
      "<div style='max-width:500px'>"+
      "<h2>⚠️ Lisensi Tidak Valid</h2>"+
      "<p>"+msg+"</p>"+
      "<p style='font-size:13px;opacity:.7'>Hubungi developer untuk aktivasi.</p>"+
      "</div></div>"
    );
    document.body.style.overflow="hidden";
  };
})();
