jQuery(document).ready(function( $ ){
  
    var prevUrl = "";

    setInterval(()=>{
    var currentUrl = window.location.href;
    if(prevUrl != currentUrl){
      prevUrl = currentUrl;
      setTimeout(()=>enableTooltip(),1000 )
    }
  }, 500)

    function enableTooltip(){
    console.log("ENABLED");
        var showTooltip = false;
      var counter = 0;

      $(".thumb-rel").mousemove(function (event) {
          showTooltip = true;
          counter ++;
            var title = $(this).siblings()[0]
          let titleText = $(title).text();
          if (counter <= 1){
//          	hide the current title
                  $(title).removeClass('below-image');

              //create tooltip
              let tooltip = `<p class="tooltip" id="active_tooltip">${titleText}</p>`
              $(this).append(tooltip)
          }
    
//    		relative to the parent
            var parentOffset = $(this).parent().offset(); 
           var relX = event.pageX - parentOffset.left;
           var relY = event.pageY - parentOffset.top;
    
    //	stick tooltip to cursor
            $("#active_tooltip").css({
              display: 'inline-block',
                 position: 'absolute',
              padding: '0',
                margin: '0',
                'font-family': 'ObjektivMk1_Bd',
              'font-size': '20px',
              'font-weight': 'bolder',
                'z-index': 1,
              color: 'black',
              left: relX,
              top: relY,
          });
    
      });
      $(".thumb-rel").mouseleave(function (event) {
        showTooltip = false;
        counter = 0;
        $("#active_tooltip").remove();
        var title = $(this).siblings()[0];
        $(title).addClass('below-image');
      });
  }
  
});