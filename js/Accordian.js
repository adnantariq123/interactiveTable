
	
	
$(document).ready(function(evt) {
	
			
//OriginalAccordian_iScrollRefresh();		


	
		var acc = document.getElementsByClassName("accordion");
		var i;
		
		
		
		for (i = 0; i < acc.length; i++) {
		  acc[i].onclick = function() {
			
			
			//iScrollRefresh function is called everytime the acordian btn is clicked becuase it needs to refresh
			//OriginalAccordian_iScrollRefresh();
		    this.classList.toggle("active");
		    
		    //NOT the best approach using nextElementSibling  but it will work!
		    var panel = this.nextElementSibling;
		    panel.classList.toggle("active");
		    
		    
		    
		    if (panel.style.maxHeight){
		      panel.style.maxHeight = null;
		      panel.style.lineHeight = null;
		      panel.style.height = null;
		      //OriginalAccordian_iScrollRefresh();
		      
		    } else {
			  panel.classList.add("active");  
		      panel.style.maxHeight = panel.scrollHeight + "px";
		      panel.style.lineHeight = panel.scrollHeight + "px";
		      panel.style.height = panel.scrollHeight + "px";
		      
		      
		     
		    }
		    
		    setTimeout(function(){
		    HHistoScroll = $(".istoScroll").height();
		    console.log("istoScroll new height is :" + HHistoScroll);
		    OriginalAccordian_iScrollRefresh();
		    
		    },300);
		  }
		}

	
//Document ready ends here
});	






//class accordian is the 2nd version of the accordian
function classAccordian() {
	$(".AccClass").on("click touchstart", function(e) {	 
		console.log("came to classAccordian"); 	
		
		//AccClass_iScrollRefresh();
	    this.classList.toggle("active");
	    
	    var SquaTD = ("." + $(this).attr("id"));
	    
	    $(SquaTD).toggleClass("active");
	    
	});
}






    function AccClass_iScrollRefresh(){
       setTimeout(function(){
        AccordionScroll.refresh();
		//for Accordian class tables
        if($(".AdvTable .iScrollIndicator").css('display') == 'none') {
			$(".AdvTable .iScrollVerticalScrollbar").css("display","none");
			$(".AdvTable .iScrollVerticalScrollbar").css("background","#fff");			
			 
		}else {
			$(".AdvTable .iScrollVerticalScrollbar").css("display","block");
			$(".AdvTable .iScrollVerticalScrollbar").css("background","#ccc");
			 
		} 
				         
		//console.log("CHECKED for AccClass_iScrollRefresh()");
		AccordionScroll.refresh();

      }, 300);
    }
    






    function OriginalAccordian_iScrollRefresh(){
       setTimeout(function(){
        AccordionScroll.refresh();
        
        //for original accordian
        if($(".Ac_Contain .iScrollIndicator").css('display') == 'none') {
			$(".Ac_Contain .iScrollVerticalScrollbar").css("display","none");
			$(".Ac_Contain .iScrollVerticalScrollbar").css("background","#fff");
			 
		}else {
			$(".Ac_Contain .iScrollVerticalScrollbar").css("display","block");
			$(".Ac_Contain .iScrollVerticalScrollbar").css("background","#ccc");
		}
		
				         
		//console.log("fired OriginalAccordian_iScrollRefresh()");
		AccordionScroll.refresh();
		
		// is required for more info button scroll if it was code for accordian class table was inside more info button or overlay
		//but we are going to seprate that, so commented out. Why? cause it would cause an error.
		//InfoResetScroll();
		//SlideOverLay_RefreshScrolls();
		//JustRefreshOverlayScrolls();
      }, 30);
    }
    
    
    

		

	var AccordionScroll;
		
	function AccordianResetScroll(placement) {
		
		
	console.log("AccordianResetScroll reached and placement is:" +placement);
	var xx = 0;
			
		if ( AccordionScroll == null ) {
			
		AccordionScroll = new IScroll(placement, {scrollbars: 'custom'});

			OriginalAccordian_iScrollRefresh();
			// keep this as well
			AccClass_iScrollRefresh();
		
		}
		else {
			AccordionScroll.destroy();
			AccordionScroll = null;
			
			setTimeout(function(){
			AccordionScroll = new IScroll(placement, {scrollbars: 'custom'});
			
			AccordionScroll.refresh();	
			AccordionScroll.scrollTo(0,0);
			OriginalAccordian_iScrollRefresh();
			// keep this as well
			AccClass_iScrollRefresh();
       		}, 100);
      

			//console.log("came to destory");		
		}
		
		//turnOffScrollBackground ();	
	};






























