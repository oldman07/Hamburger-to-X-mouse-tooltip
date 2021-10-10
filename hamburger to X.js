jQuery(document).ready(function( $ ){
	var prevUrl = "";
  	var domain = window.location.origin;
  	var pagesToShowHamburger = [domain+'/', domain+'/projekte/', domain+'/landschaft/', domain+'/architektur/', domain+'/projekte-liste/', domain+'/team/', domain+'/buero/', domain+'/jobs/', domain+'/kontakt/'];
  
  	setInterval(()=>{
      var currentUrl = window.location.href;
      if(prevUrl != currentUrl){
        prevUrl = currentUrl;
        if (pagesToShowHamburger.includes(currentUrl)){
          console.log("SHOW")
          showHamburger();
          backUrl = window.location.href;
        }
        else{
          console.log("HIDE");
          hideHamburger();
        }
      }
    }, 500)
  
  	function showHamburger(){
      $('#back_btn').removeClass('menuToggle').css('display', 'none');
      let hamburger = $('.menuToggle');
      $("input[class='menu-checkbox']").prop('checked', false);
      $("input[class='menu-checkbox']").css('display', 'block');
      $(hamburger[0]).css('display', 'block');
    }
  
  	function hideHamburger(){
//       let crossIcon = '<button id="back_btn" style="display: block; width:0.5rem; height:0.5rem; position: fixed; top: 30px; right: 30px; font-size: x-large; font-weight: 900; border: 0; background: none; z-index: 100">X</button>';
      let crossIcon = `<div id="back_btn" class="menuToggle menu-allSite" style="display: block;">
    <span class="hamburger"></span>
    <span class="hamburger hamburger-2"></span>
    <span class="hamburger hamburger-3"></span>
	</div>`;
      let hamburger = $('.menuToggle');
      
      $(hamburger[0]).css('display', 'none')
//       $(hamburger[0]).append(crossIcon)
      $(crossIcon).insertBefore($(hamburger[0]))
      $("input[class='menu-checkbox']").prop('checked', true);
	  $("input[class='menu-checkbox']").css('display', 'none');
      
      //   	add event listener on back btn
      $("#back_btn").on("click", function(){
        window.history.back();
      });
//       $("input[class='menu-checkbox']").on("click", function(){
//         window.history.back();
//       })
      
    }
  
  
  
  
//   	let crossIcon = '<input class="menu-checkbox" type="checkbox">';
//   	let url = window.location.href;
//   	let targetPage = 'projekte';
//     let hamburger = $('.menuToggle')

// 	if(url.includes(targetPage)){
//       console.log("yes yes")
//       $(hamburger[0]).css('display', 'none')
//       $(hamburger[0]).append(crossIcon)
//       console.log("hamburger: ", hamburger)
//     }
//   	else{
//       $(hamburger[0]).css('display', 'block')
//     }
//   	console.log(window.location.href);
});