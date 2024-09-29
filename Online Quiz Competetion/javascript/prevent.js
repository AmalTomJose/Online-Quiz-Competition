function prevent() {
    document.oncontextmenu = function () {
      return false;
    };
    $(document).on("keydown", function (ev) {
      if (ev.keyCode) {
        console.log(ev);
        ev.stopPropagation();
        ev.preventDefault();
        return false;
      }
  
      // if ( ev.keyCode) {
      //   console.log(ev);
      //   ev.preventDefault();
  
      //   return false;
      // }
      // if(ev.keyCode===91){
      //   console.log(ev)
      //   ev.preventDefault();
      //   return false;
      // }
    });
  }