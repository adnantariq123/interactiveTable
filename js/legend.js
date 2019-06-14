
function thingy (slideName, PresentationID) {
	var LStatic = 'veeva:gotoSlide('+slideName+'.zip)';
	window.location.href = LStatic;
	
	//window.location.href = 'veeva:gotoSlide(['+slideName+'.zip],['+PresentationID+'])';
	//window.location.href = 'veeva:gotoSlide( [mediafile.zip], [presentaiton_ID] )';

	//alert(LStatic);
}







// stripOut() works with // Advanced Table AKA $(".AdvTable .col-btn") in vertical tabls
function stripOut() {
	//console.log("came to stripOut() 4m legend.js");
		$(".col-btn").removeClass("MODE");
		$("#Group1-container").removeClass("HIDE");
		$("#Group2-container").removeClass("HIDE");
		$("#Group3-container").removeClass("HIDE");
		$("#Group4-container").removeClass("HIDE");
		$(".col-btn").removeClass("OFF");
		$(".collapsible").removeClass("HIDE");
}







$(document).ready(function(evt) {



// Advanced Table
$(".AdvTable .col-btn").on("click touchstart", function(e) {
    e.preventDefault();

    if ($(".col-btn").hasClass("MODE")) {

        // show hide buttons AFTER first click
        $(this).toggleClass("OFF");

        // show hide columns AFTER first click
        var colClose = ($(this).attr("id"));
        $("." + colClose).toggleClass("HIDE");
        //console.log("came to if ($(.col-btn).hasClass(MODE))");
        

    } else {
        // show hide buttons ON first click
        $(".col-btn").not(this).toggleClass("OFF").addClass("MODE");

        // show hide columns ON first click
        var colFocus = ($(this).attr("id"));
        $(".collapsible").not("." + colFocus).toggleClass("HIDE");
    }

    // blue ... aka First group
    var buttonStateOffCountBlue = $('#Group1-btns .OFF').length;
    //console.log("the Lenght of the OFF buttonStateOffCountBlue is :" + buttonStateOffCountBlue);

    if (buttonStateOffCountBlue > 1) {
        $("#Group2-header").addClass("TALL");
        $("#Group3-header").addClass("TALL");
        $("#Group4-header").addClass("TALL");
        if (buttonStateOffCountBlue > 2) {
            $("#Group1-container").addClass("HIDE");
        } else {
            $("#Group1-container").removeClass("HIDE");
        }
    } else if (buttonStateOffCountBlue < 2) {
        $("#Group2-header").removeClass("TALL");
        $("#Group3-header").removeClass("TALL");
        $("#Group4-header").removeClass("TALL");
    }

    // green ... aka Second group
    var buttonStateOffCountGreen = $('#Group2-btns .OFF').length;
    //console.log("the Lenght of the OFF buttonStateOffCountGreen is :" + buttonStateOffCountGreen);

    if (buttonStateOffCountGreen > 1) {
        $("#Group1-header").addClass("TALL");
        $("#Group3-header").addClass("TALL");
        $("#Group4-header").addClass("TALL");
        if (buttonStateOffCountGreen > 2) {
            $("#Group2-container").addClass("HIDE");
        } else {
            $("#Group2-container").removeClass("HIDE");
        }
    } else if (buttonStateOffCountGreen < 2) {
        $("#Group1-header").removeClass("TALL");
        $("#Group3-header").removeClass("TALL");
        $("#Group4-header").removeClass("TALL");
    }


    // third group
    var buttonStateOffThirdGroup = $('#Group3-btns .OFF').length;
    //console.log("the Lenght of the OFF buttonStateOffCountGreen is :" + buttonStateOffCountGreen);

    if (buttonStateOffThirdGroup > 1) {
        $("#Group1-header").addClass("TALL");
        $("#Group2-header").addClass("TALL");
        $("#Group4-header").addClass("TALL");
        if (buttonStateOffThirdGroup > 2) {
            $("#Group3-container").addClass("HIDE");
        } else {
            $("#Group3-container").removeClass("HIDE");
        }
    } else if (buttonStateOffThirdGroup < 2) {
        $("#Group1-header").removeClass("TALL");
        $("#Group2-header").removeClass("TALL");
        $("#Group4-header").removeClass("TALL");
    }


    // 4th group  ... god help us
    var buttonStateOffForthGroup = $('#Group4-btns .OFF').length;

    if (buttonStateOffForthGroup > 1) {
        $("#Group1-header").addClass("TALL");
        $("#Group2-header").addClass("TALL");
        $("#Group3-header").addClass("TALL");
        if (buttonStateOffForthGroup > 2) {
            $("#Group4-container").addClass("HIDE");
        } else {
            $("#Group4-container").removeClass("HIDE");
        }
    } else if (buttonStateOffForthGroup < 2) {
        $("#Group1-header").removeClass("TALL");
        $("#Group2-header").removeClass("TALL");
        $("#Group3-header").removeClass("TALL");
    }
    




    if (($("#Group1-header").hasClass("TALL")) || ($("#Group2-header").hasClass("TALL"))) {
        $("#axis-header").addClass("TALL");
    } else {
        $("#axis-header").removeClass("TALL");
    }

});
         
         
         
         
         	
		// same setup for the safety button
		var $ModalOverlay = $(".modal.overlay");
		
		// as per client move the info btn to the footer and
		$ModalOverlay.appendTo("#page-wrapper");
			
	
if ($("#wrapper").find(".RightPanel").length > 0){ 
  $(".content").css("width", "880");
}	
 

$("#Mini-Nav li").on("tap", function(evt) {
		var toGO= $(this).attr("data-goto");
		// thingy is the function that has the go to slide property
		thingy (toGO);

});


function whatMini_NavNumber() {
	
/*	SADLY this super awesome code had to be turned off  :(
	NOW the mini nav will take you to different sections/presentations and NOT slides anymore
	
	var whatNumber = $("#Mini-Nav li").eq();
	var theLength = $("#Mini-Nav li").length;
	//console.log("eq #: "+ whatNumber);
	console.log("total # of li tags in Mini Nav: "+ theLength);
	
	var TotalSlides = theLength;
	$("#TotalSlides").html(TotalSlides);
	
	for (i=0; i<theLength; i++) {
		var whatTheDataGoTo = $("#Mini-Nav li").eq(i).attr("data-goto");
		//console.log(whatTheDataGoTo);
		
		if(whatTheDataGoTo ==ActualFileName){
			$("#CurrentSlide").html(i+1); //+1 becuase it starts at 0, and the first slide in any series will be considered 1
		}

	}
*/

$("#CurrentSlide").html(CurrentSlide);
}


whatMini_NavNumber()


});
// $(document).ready() ends here


//console.log(HCLabel);



		// sets active tab
		
		function storeTab(dest_tab) {
			var slide_loc = window.location.href;
			var slide_output  = slide_loc.split('/').pop().split('.').shift();
			sessionStorage.setItem('NEW_Test_target_slide', slide_output);
			sessionStorage.setItem('NEW_Test_target_xyz', dest_tab);
		}


		// to remove any visited/active classes on radio Btn ALSO reset the states in the graphics
		
		/*	we turn on ALL CI, DOTS, LINE. 
			we turn off ALL SA.
			we also remove the ATTRIBUTE called CLASS on resetALLTabs
			call the function resetColors();
			remove any SELECTED class from ANY PillBtn
			remove any ACTIVE & VISITED from any RadioBtn
			TURN display back on after .5 seconds on .Safety_btn - NOT NEEDED anymore
			make sure section Original is on ALSO add class SELECTED, and section Adapted is off
			we have #toHide that needs to be turned back on on ever reset
			call the function Value_TOP_OFFFFF() and Value_DOWN_OFFFFF();
		*/
		
		function resetALLTabs() 
		{

			//removed from function resetColor. sometimes fails to 'reset' all lines dots etc from the svg
			$(".svg.split #CI").css("display", "block");
			$(".svg.split #CI >").css("display", "block");
				
			$(".svg.split #DOTS >").css("display", "block");
				
			$(".svg.split #LINE >").css("display", "block");
			
			$(".svg.split #SA >").css("display", "none");
			
				
			// we use removeAttr INSTEAD off remove class becuase we jquery CANNOT add/remove class into an SVG.
			// instead we add/remove attribute named class.
			// we are adding the attribute class, becuase we still need the css classes. don't ask, just go with the flow
			$(".svg.split #CI >").removeAttr("class");
			$(".svg.split #DOTS >").removeAttr("class");
			$(".svg.split #LINE >").removeAttr("class");
				
				
							
			resetColors();
			
			//remove selected from ALL PillBtn regardless their content
			$(".PillBtn").removeClass("SELECTED");
			
									
			$(".RadioBtn").removeClass("ACTIVE");
			$(".RadioBtn").removeClass("VISITED");
			
			$(".Legend_Panel").delay(100).animate({bottom:-220},400);
			//setTimeout(function(){$(".Safety_btn").css("display", "inline-block")}, 500);			
			

			$(".svg #AV").css("display", "none");
			

			$("section.Adapted").css("display", "none");
			//and
			//turn on Original
			$("section.Original").css("display", "block");
			$("section.Original").addClass("SELECTED");
			//$(".svg #OV").css("display", "block");
			

			$(".tab.SELECTED section.SELECTED .svg.split #toHide").css("display", "block");
			console.log("FIRED function resetALLTabs()");
			
			//$(".svg #CI >").css("display", "block");
			
			Value_TOP_OFFFFF();
			
			Value_DOWN_OFFFFF();			
			
		};
		
		/*
			resetColors()
			if CircleBtn exist, grab their Attribute 'data-color' and put it in a variable called SetColor
			and for each and ever CircleBtn add the class from SetColor also add class SELECTED
			do the same for ALL #dot
			If a tab was selected go to the selected section in that tab and turn off that SA 'child' 
			ALSO make sure #toHide display and display
		*/
		function resetColors() 
		{
			
			
				$('div.CircleBtn').each(function() {
				  	var SetColor = $(this).attr('data-color');
				  	$(this).addClass(SetColor);
				  	// trying to 'reset' the tabs will alos needs removing SELECTED class from any CircleBtn that have it
				  	$(this).removeClass("SELECTED");
				})

				
				$('div#dot').each(function() {
				   var dotColor = $(this).attr('data-color');
				   $(this).addClass(dotColor);
				})
				
				

				
				//TURN SA OFF
				$(".tab.SELECTED section.SELECTED .svg.split #SA >").css("display", "none");
				$(".RadioBtn").removeClass("ACTIVE");
				$(".RadioBtn").removeClass("VISITED");
				
				// mgiht be needed for ALL
				$(".tab.SELECTED section.SELECTED .svg.split #toHide").css("display", "block");
			
			
		}
		




		/*
			SIMPLETabs()
			used for 'simple pages that might not require the functions -Value_TOP_OFFFFF(); Value_DOWN_OFFFFF();
		*/

function SIMPLETabs() 
		{

			//removed from function resetColor. sometimes fails to 'reset' all lines dots etc from the svg
			$(".svg.split #CI").css("display", "block");
			$(".svg.split #CI >").css("display", "block");
			$(".svg.split #DOTS >").css("display", "block");
			$(".svg.split #LINE >").css("display", "block");
			$(".svg.split #SA >").css("display", "none");
			
			//remove selected from ALL PillBtn regardless their content
			$(".PillBtn").removeClass("SELECTED");							
			
			//setTimeout(function(){$(".Safety_btn").css("display", "inline-block")}, 500);			


			//turn on Original
			$("section.Original").css("display", "block");
			$("section.Original").addClass("SELECTED");
			//$(".svg #OV").css("display", "block");
			

			console.log("FIRED function SIMPLE RESET()");

			
		};




		/*
			for simple pages
			turn OFF or ON:- all #SA in section.Original if the btn has a SELECTED class
			if it hasClass turn off
			if it does NOT have class turn on
			
			the btn must have a data-action='SAtoggle'
		*/
		function ToggleSA ()
		{

			if ($("section.Original [data-action='SAtoggle']").hasClass("SELECTED"))
			
			{
				$(".svg.split #OV #SA").css("display", "none");
				$(".svg.split #OV #SA >").css("display", "none");
			}
			else 
			{
				$(".svg.split #OV #SA").css("display", "block");
				$(".svg.split #OV #SA >").css("display", "block");	
				
				
			}


		}


		function ToggleCI_Lines () 
		{

		//turn on toHide
		$(".tab.SELECTED section.SELECTED .svg.split #toHide").css("display", "block");
			
			


					if ($("[data-action='CI_lines']").hasClass("SELECTED"))
		
					
					{
						// if value button is selected then
						//FIRST turn of values down if they are on
						//then turn on VALUE
						if ($("[data-action='ValueToggler']").hasClass("SELECTED"))
						
						{

						Value_DOWN_OFFFFF();				
						
						Value_TOP_ON();							
						
						console.log("value btn had selected");
						}

/*						
						$("section.SELECTED .svg.split #CI").css("display", "block");
						$("section.SELECTED .svg.split #CI >").css("display", "block");	
		
						$("section.SELECTED .svg.split #CI_DISABLED").css("display", "block");
						$("section.SELECTED .svg.split #CI_DISABLED >").css("display", "block");
						
						//for slide 4
						$("section.SELECTED .svg.split #LINE").css("display", "block");
						$("section.SELECTED .svg.split #LINE >").css("display", "block");
						$("section.SELECTED .svg.split #DOTS").css("display", "block");
						$("section.SELECTED .svg.split #DOTS >").css("display", "block");
*/
						$("section.SELECTED .svg #CI").css("display", "block");
						$("section.SELECTED .svg #CI >").css("display", "block");	
		
						$("section.SELECTED .svg #CI_DISABLED").css("display", "block");
						$("section.SELECTED .svg #CI_DISABLED >").css("display", "block");
						
						//for slide 4
						$("section.SELECTED .svg #LINE").css("display", "block");
						$("section.SELECTED .svg #LINE >").css("display", "block");
						$("section.SELECTED .svg #DOTS").css("display", "block");
						$("section.SELECTED .svg #DOTS >").css("display", "block");									
						
						resetColors();			

						
						//Value_TOP_OFFFFF();
						console.log("turn CI lines on and Value top off");
					}
					else 
					{


/*								
						$("section.SELECTED .svg.split #CI").css("display", "none");
						$("section.SELECTED .svg.split #CI >").css("display", "none");
						
						
						
						$("section.SELECTED .svg.split #CI_DISABLED").css("display", "none");
						$("section.SELECTED .svg.split #CI_DISABLED >").css("display", "none");

						$("section.SELECTED .svg.split #DOTS >").css("display", "block");
*/
						$("section.SELECTED .svg #CI").css("display", "none");
						$("section.SELECTED .svg #CI >").css("display", "none");
						
						
						
						$("section.SELECTED .svg #CI_DISABLED").css("display", "none");
						$("section.SELECTED .svg #CI_DISABLED >").css("display", "none");

						$("section.SELECTED .svg #DOTS >").css("display", "block");
						
						
						
						//might cause a problem
						$(".svg.split #CI >").removeAttr("class");
						$(".svg.split #DOTS >").removeAttr("class");
						$(".svg.split #LINE >").removeAttr("class");
						resetColors();
						$("section.SELECTED .svg.split #LINE >").css("display", "block");
						//$("section.SELECTED .svg.split #DOTS >").css("display", "none");
									
									
									if ($("section.SELECTED .svg.split #DOTS >").hasClass("SELECTED"))
									{
										
									}
									
									
									
															
						console.log("Turn off CI lines");
						Value_TOP_OFFFFF();
						
						//then do the reverse if Value btn is still on
						
						
						if ($("[data-action='ValueToggler']").hasClass("SELECTED"))
						
							{
							
							// VALUE DOWN ON
							Value_DOWN_ON()
							
							
							
							
							// VALUE TOP OFF
							Value_TOP_OFFFFF();
							
							}						
						
					}					
			
			
			
		}
		//function ToggleCI_Lines () ENDS HERE

		
			// VALUE TOP ON 
			// VALUE TOP OFF
			// VALUE DOWN ON
			// VALUE DOWN OFF
			function Value_TOP_ON()
			{
						$(".tab.SELECTED section.SELECTED .svg.split #VALUE").css("display", "block");
						$(".tab.SELECTED section.SELECTED .svg.split #VALUE >").css("display", "block");
						$(".tab.SELECTED section.SELECTED .svg.split #VALUE_DISABLED").css("display", "block");
						$(".tab.SELECTED section.SELECTED .svg.split #VALUE_DISABLED >").css("display", "block");				
			}
			
			
			
			function Value_TOP_OFFFFF()
			{
							$(".tab.SELECTED section.SELECTED .svg.split #VALUE").css("display", "none");
							$(".tab.SELECTED section.SELECTED .svg.split #VALUE >").css("display", "none");
							$(".tab.SELECTED section.SELECTED .svg.split #VALUE >").removeAttr("class");
							
							$(".tab.SELECTED section.SELECTED .svg.split #VALUE_DISABLED").css("display", "none");
							$(".tab.SELECTED section.SELECTED .svg.split #VALUE_DISABLED >").css("display", "none");
							$(".tab.SELECTED section.SELECTED .svg.split #VALUE_DISABLED >").removeAttr("class");			
			}	
			
			
			
			function Value_DOWN_ON()
			{
							$(".tab.SELECTED section.SELECTED .svg.split #VALUE_DOWN").css("display", "block");
							$(".tab.SELECTED section.SELECTED .svg.split #VALUE_DOWN >").css("display", "block");
							$(".tab.SELECTED section.SELECTED .svg.split #VALUE_DOWN_DISABLED").css("display", "block");
							$(".tab.SELECTED section.SELECTED .svg.split #VALUE_DOWN_DISABLED >").css("display", "block");				
			}	
			
			
			
			function Value_DOWN_OFFFFF()
			{
						$(".tab.SELECTED section.SELECTED .svg.split #VALUE_DOWN").css("display", "none");
						$(".tab.SELECTED section.SELECTED .svg.split #VALUE_DOWN >").css("display", "none");
						$(".tab.SELECTED section.SELECTED .svg.split #VALUE_DOWN >").removeAttr("class");
						
						$(".tab.SELECTED section.SELECTED .svg.split #VALUE_DOWN_DISABLED").css("display", "none");
						$(".tab.SELECTED section.SELECTED .svg.split #VALUE_DOWN_DISABLED >").css("display", "none");
						$(".tab.SELECTED section.SELECTED .svg.split #VALUE_DOWN_DISABLED >").removeAttr("class");
						
						//$(".tab.SELECTED section.SELECTED .svg.split #DOTS >").removeAttr("class");			
			}		
	
	
	
	
	
	
		function ValueWhole()
		{
			
			if (!$("[data-action='simpleValue']").hasClass("SELECTED"))
				{
					soSimpleTurnOn();
								
				}
			else
				{
					soSimpleTurnOFFFF();
					
				}
		}				
			
		
function soSimpleTurnOn()
{
					console.log("Turn on VALUE");
					$(".tab.SELECTED section.SELECTED .svg.split #VALUE").css("display", "block");
}	
	
function soSimpleTurnOFFFF() 
{
					console.log("Turn off VALUE");
					$(".tab.SELECTED section.SELECTED .svg.split #VALUE").css("display", "none");	
}	
	
		
		
		
		function Toggle_Value()				
		{
		
		
		//might cause a Problem
		resetColors();
			
		//turn on toHide
		$(".tab.SELECTED section.SELECTED .svg.split #toHide").css("display", "block");
		$(".tab.SELECTED section.SELECTED .svg.split #SA").css("display", "none");
		$(".tab.SELECTED section.SELECTED .svg.split #CI >").css("display", "block");
		$(".tab.SELECTED section.SELECTED .svg.split #DOTS >").css("display", "block");		
		
		$(".svg.split #CI >").removeAttr("class");
		$(".svg.split #DOTS >").removeAttr("class");
		$(".svg.split #LINE >").removeAttr("class");
		$(".svg.split #VALUE >").removeAttr("class");
						
			//if it does NOT have selected	
		if (!$("[data-action='ValueToggler']").hasClass("SELECTED"))
			{
				console.log("Turn on VALUE");
				
				if ($("[data-action='CI_lines']").hasClass("SELECTED"))
				{
					

				Value_DOWN_ON();
								
				}
				else
				{
				Value_TOP_ON();
				}			
			}
		else
			{
				console.log("Turn off VALUE");
				Value_TOP_OFFFFF();
				
				Value_DOWN_OFFFFF();				
				
			}
		}	
		
		
		
		
		



//TurnOnSelectedSA can stay outside on document ready

function TurnOnSelectedSA() {

   	$(".tab.SELECTED .Legend_Panel .CircleBtn").removeClass().addClass("CircleBtn");
   	
   		
  	$(".tab.SELECTED section.SELECTED .svg.split #SA").css("display", "block");
   	$(".tab.SELECTED section.SELECTED .svg.split #SA >").css("display", "none");
   	
   	$(".tab.SELECTED section.SELECTED .svg.split #CI").css("display", "block");
   	$(".tab.SELECTED section.SELECTED .svg.split #CI >").css("display", "none");
   	$(".tab.SELECTED section.SELECTED .svg.split #CI >").removeAttr("class");
   	
   	$(".tab.SELECTED section.SELECTED .svg.split #LINE >").css("display", "none");
   	$(".tab.SELECTED section.SELECTED .svg.split #LINE >").removeAttr("class");
   	
   	//for slide 4
    $(".tab.SELECTED section.SELECTED .svg.split #DOTS >").css("display", "none");
   	$(".tab.SELECTED section.SELECTED .svg.split #DOTS >").removeAttr("class");
   	
   	
   	Value_DOWN_OFFFFF();
   	Value_TOP_OFFFFF();
   	
   	//also hide toHide for SA sections
   	$(".tab.SELECTED section.SELECTED .svg.split #toHide").css("display", "none");
   	
   	//turn PARENT value id on
   	$(".tab.SELECTED section.SELECTED .svg.split #VALUE").css("display", "block");
   	

   	
   	$(".tab.SELECTED .Legend_button .btn #dot").removeClass();
   	
   	

   	$(".tab.SELECTED section.SELECTED .svg.split #CI_DISABLED >").css("display", "block");
   	$(".tab.SELECTED section.SELECTED .svg.split #CI_DISABLED").css("display", "block");
   	
   	//hell
   	$(".tab.SELECTED [data-action='ValueToggler']").removeClass("SELECTED");
   	$(".tab.SELECTED [data-action='CI_lines']").removeClass("SELECTED");
   	
	  for (var i = 0; i < arguments.length; i++) {
	    console.log(arguments[i]);
	    
	    
		    if (typeof arguments[i] === 'string' || arguments[i] instanceof String)
		    {
			 	//console.log("stringer"); 
			 	$(".tab.SELECTED section.SELECTED .svg.split #SA #"+ arguments[i]).css("display", "block");  
		    }
		    else
		    {
			   $(".tab.SELECTED section.SELECTED .svg.split #CI #CI_"+ arguments[i]).css("display", "block");
			   $(".tab.SELECTED section.SELECTED .svg.split #LINE #LINE_"+ arguments[i]).css("display", "block");
			   
			   //for slide 4
			   $(".tab.SELECTED section.SELECTED .svg.split #DOTS #DOTS_"+ arguments[i]).css("display", "block");
			   $(".tab.SELECTED section.SELECTED .svg.split #VALUE #VALUE_"+ arguments[i]).css("display", "block");
			   
			   // to add color class back to the dots. we must first grab the color for attribute data-color
			   var GrabColor = $(".tab.SELECTED .Legend_button #btn" +arguments[i] +" #dot").attr('data-color');
			   $(".tab.SELECTED .Legend_button #btn"+ arguments[i] + " #dot").addClass(GrabColor);
			   $(".tab.SELECTED .Legend_button #btn"+ arguments[i] + " #dot").addClass("removeMe");

			   
			   /*eg: <section class="Q4" id="04">*/
			   $(".tab.SELECTED .Legend_Panel section#0"+ arguments[i] + " div.CircleBtn").addClass(GrabColor);
			   //$(".tab.SELECTED .Legend_Panel section#0"+ arguments[i] + " div.CircleBtn").addClass("SELECTED");
			   $(".tab.SELECTED .Legend_Panel section#0"+ arguments[i] + " div.CircleBtn").addClass("removeMe");
			   //console.log(GrabColor);
		    }
		    
	  }
  

}





/*
	document.onmousemove = function(e){
	var x = e.pageX;
	var y = e.pageY;
	e.target.title = "X is "+x+" and Y is "+y;
	};
		
*/
		



	//$(document).ready begins here
	//adnan tariq
	$(document).ready(function(e) {
		

	


	

	
	
		
		//USED FOR BAZINGA
		// ON LOAD data-color attribute is added to ALL .CircleBtn and #dot
		// BUT only add where there is a split of svg. otherwise ignore
		
		if($(".svg").hasClass("split"))
		{
			var color ="color";
			// Code to grab all circleBtn div and add a unique attribute data-color
			
			$('div.CircleBtn').each(function() {
			   var haha = ($(this).attr('class'));
			   haha = haha.slice(10);
			   $(this).attr('data-' + color, haha);
			   //console.log(haha);
			})
	
	
			// same for the Dot's
	
	
			var color ="color";
			
			$('div#dot').each(function() {
			   var yoyo = ($(this).attr('class'));
			   $(this).attr('data-' + color, yoyo);
			   //console.log(haha);
			})		
		
		//alert("has split bro");
		}

		
		
		
		
		
		
		//MOVE info_btn from the tab to the footer
		var $info_btn = $(".info_btn");
		
		// as per client move the info btn to the footer and
		$info_btn.appendTo(".nav_btns .Dip");


		
		//turn on the first one ONLY
		//$info_btn.css("display", "inline-flex");	this would turn them ALL on, we don't wnat that!
		$("footer").find(".info_btn").eq(0).css("display", "-webkit-inline-flex");	

		
		// then turn them on based on tab clicked
		
		$(".LeftBtn").on("click touchstart", function(evt) {
		
			if ( $info_btn.length > 1 ) {
				$info_btn.css("display", "none");

				var WhichLeftBtn = $(this).attr("id") - 1;
				console.log(WhichLeftBtn);
				$("footer").find(".info_btn").eq(WhichLeftBtn).css("display", "-webkit-inline-flex");
			}
		
		});




		

		// same setup for the safety button
		var $Safety_btn = $(".Safety_btn");
		
		// as per client move the info btn to the footer and
		$Safety_btn.appendTo(".nav_btns .Dip");
		
		//turn on the first one ONLY
		//$Safety_btn.css("display", "inline-flex");	this would turn them ALL on, we don't wnat that!
		$("footer").find(".Safety_btn").eq(0).css("display", "-webkit-inline-flex");	

		
		// then turn them on based on tab clicked

		$(".LeftBtn").on("click touchstart", function(evt) {
		
			if ( $Safety_btn.length > 1 ) {
				$Safety_btn.css("display", "none");

				var WhichLeftBtn = $(this).attr("id") - 1;
				console.log(WhichLeftBtn);
				$("footer").find(".Safety_btn").eq(WhichLeftBtn).css("display", "-webkit-inline-flex");
			}
		
		});		

//making margin right zero
$('.nav_btns .Dip div:last').css('margin-right','0');



	
	
		//ryan's code
		var isOpen = true, closeTimer, closedisArt;
		
		setTimeout( function(){isOpen = false;}, 500 );
		

		$(".eular_dots").on("click touchstart", function(e) {
			var elm = $(this).parent("#EULAR_btn").find("#Mini-Nav");
			console.log( "event: " + elm.get(0) );
			e.stopPropagation();

			var pos = $("#Mini-Nav").position();
			//if ( !isOpen && pos.top > 181 ) { showMenu(); }
			if ( !isOpen && pos.top > pos.top - 1) { showMenu(); }
			else {
				hideMenu()
			}
			return false;
			
		});


		function showMenu () {
			clearTimeout(closeTimer);
			clearTimeout(closedisArt);
			closeTimer = setTimeout(hideMenu,25000);
			$("#EULAR_btn").addClass("BIGGER");
			$("#Mini-Nav").addClass("SHOW");
			closedisArt = setTimeout(function() {$(".disArt").addClass("SHOW")}, 350);
			
			
			isOpen = true;
		};
		
		function hideMenu() {
			$(".disArt").removeClass("SHOW");
			$("#Mini-Nav").removeClass("SHOW");
			$("#EULAR_btn").removeClass("BIGGER");
			isOpen = false;
		};



/*
		$(".eular_dots").on("click touchstart", function() {
			var pos = $("#Mini-Nav").position();
			
			if ( isOpen && pos.top < pos.top + 1) 
			{ 
				hideMenu();
			}
			else 
			{
			var elm = $(this).parent("#EULAR_btn").find("#Mini-Nav");
			//console.log( "event: " + elm.get(0) );
			

			var pos = $("#Mini-Nav").position();
			if ( !isOpen && pos.top > pos.top - 1) {
				showMenu();
			}

			return false;				
			}
			
		});
		
			evt.preventDefault();
			Toggle_Value();
			$(this).toggleClass("SELECTED");
*/









	
		
		
		//.LeftPanel with .TWORightPanel
		// html page will probably have two left panels as well. so make sure to add .TWORightPanel class to both

		//for 2 right panel we TURN OFF display for both panel and then toggle using the following code		
		//DEFAULT turn on the first .RightPanel regardless of btn clicked
		$(".RightPanel.one").css("display", "block");
	
		//#1
		$(".LeftPanel.TWORightPanel #1").on("click touchstart", function(evt) {
		$(".RightPanel.one").css("display", "block");
		$(".RightPanel.two").css("display", "none");	
		
		$(".RightPanel.one").css("top", "185px");	
		});
		
		//#2
		$(".LeftPanel.TWORightPanel #2").on("click touchstart", function(evt) {
		$(".RightPanel.one").css("display", "none");
		$(".RightPanel.two").css("display", "block");	
		
		$(".RightPanel.two").css("top", "185px");	
		});
		
		//#3
		$(".LeftPanel.TWORightPanel #3").on("click touchstart", function(evt) {
		
		$(".RightPanel.one").css("display", "block");
		$(".RightPanel.two").css("display", "block");
	
		$(".RightPanel.one").css("top", "124px");
		$(".RightPanel.two").css("top", "354px");
		
		
		});
		
		//#4
		$(".LeftPanel.TWORightPanel #4").on("click touchstart", function(evt) {
	
		$(".RightPanel.one").css("display", "block");
		$(".RightPanel.two").css("display", "block");
	
		$(".RightPanel.one").css("top", "124px");
		$(".RightPanel.two").css("top", "354px");	
		});
			


		
		//check if one of the section has class Adapted. IF yes turn if off.
		if ($("section").hasClass("Adapted")) 
		{
			$("section.Adapted").css("display", "none");
		}
		
		
		
		
		
		
		//data-action='SAtoggle'
		//keep SA for new pages
		$("section.Original [data-action='SAtoggle']").on("click touchstart", function(evt) 
		{
			evt.preventDefault();
			ToggleSA();
			$(this).toggleClass("SELECTED");
			
		});		
		
		
		
		
		
		//data-action='CI_lines'
		$("[data-action='CI_lines']").on("click touchstart", function(evt) 
		{
			evt.preventDefault();
			ToggleCI_Lines();
			$(this).toggleClass("SELECTED");
			
		});





		//data-action='ValueToggler'
		$("[data-action='ValueToggler']").on("click touchstart", function(evt) 
		{
			evt.preventDefault();
			Toggle_Value();
			$(this).toggleClass("SELECTED");
			
			
		});



		//data-action='simpleValue'
		$("[data-action='simpleValue']").on("click touchstart", function(evt) 
		{
			evt.preventDefault();
			ValueWhole();
			$(this).toggleClass("SELECTED");
			
			
		});


		//AWESOME
		$(".RadioCheckBox").on("click touchstart", ".RadioBtn", function (e)
			{
				e.preventDefault();
			    var callback = jQuery(e.currentTarget).data("action");
			
			    var x = eval(callback)
			    //to handle the function reference
			    if (typeof x == 'function') {
			        x()
			    }
			    console.log("this is some testing - AWESOME!!");
		});
		
		
		
		


// TurnOn_sectionOriginal
	$("[data-action='TurnOn_sectionOriginal']").on("click touchstart", function(evt) 
	{
			evt.preventDefault();
			resetALLTabs();
			
			// hide n show the section
			$("section.Adapted").css("display", "none");
			$("section.Adapted").removeClass("SELECTED");
						
			$("section.Original").css("display", "block");
			$("section.Original").addClass("SELECTED");
			
			//toggle the images
			$(".svg #OV").css("display", "none");
			$(".svg #AV").css("display", "block");
			//IF a seprate image is provided turn on/off that as well
			//MAKE SURE TO GIVE IT ID AV
			$("#AV").css("display", "block");			
			

	});
	
	
	
// TurnOn_sectionAdapted
	$("[data-action='TurnOn_sectionAdapted']").on("click touchstart", function(evt) 
	{
			evt.preventDefault();
			resetALLTabs();
			
			// hide n show the section
			$("section.Adapted").css("display", "block");
			$("section.Adapted").addClass("SELECTED");
				
			$("section.Original").css("display", "none");
			$("section.Original").removeClass("SELECTED");
			
			//toggle the images
			$(".svg #OV").css("display", "block");
			$(".svg #AV").css("display", "none");
			//IF a seprate image is provided turn on/off that as well
			//MAKE SURE TO GIVE IT ID AV
			$("#AV").css("display", "none");
			
			
	
	});








		//CONVERT img tag with .svg class to an XML format.
        jQuery('img.svg.split').each(function()
        {
            var $img = jQuery(this);
            var imgID = $img.attr('id');
            var imgClass = $img.attr('class');
            var imgURL = $img.attr('src');

            jQuery.get(imgURL, function(data) {
                // Get the SVG tag, ignore the rest
                var $svg = jQuery(data).find('svg');

                // Add replaced image's ID to the new SVG
                if(typeof imgID !== 'undefined') {
                    $svg = $svg.attr('id', imgID);
                }
                // Add replaced image's classes to the new SVG
                if(typeof imgClass !== 'undefined') {
                    $svg = $svg.attr('class', imgClass+' replaced-svg');
                }

                // Remove any invalid XML tags as per http://validator.w3.org
                $svg = $svg.removeAttr('xmlns:a');

                // Replace image with new SVG
                $img.replaceWith($svg);
                
                console.log("jQuery img.svg did work?");

            }, 'xml');
        });





		// animate up or down
		$(".clickable").on("click touchstart", function(evt) 
		{
			evt.preventDefault();
			$(".Legend_Panel").delay(100).animate({bottom:-2},400);
			//$(".Safety_btn").css("display", "none");
		});
			
		$(".PanelBtn").on("click touchstart", function(evt) 
		{
			evt.preventDefault();
			$(".Legend_Panel").delay(100).animate({bottom:-220},400);
			
			//setTimeout(function(){$(".Safety_btn").css("display", "inline-block")}, 500);
		});







		//biff code to REMOVE ACTIVE STATE
	
       sessionStorage.removeItem("CurrentID");
        var getCurrentID;
        var getNewID;
       $(".RadioBtn").on('click touchstart', function(){ // the button clicked/touched
            if($(this).attr("id") === "Radio_one") {
                    console.log("RadioBtn: one");
                    getCurrentID = '#Radio_one';
                    getNewID = "";
            } else if($(this).attr("id") === "Radio_two") {
                    console.log("RadioBtn: two");
                    getCurrentID = '#Radio_two';
                    getNewID = "";
            } else if($(this).attr("id") === "Radio_third") {
                    console.log("RadioBtn: third");
                    getCurrentID = '#Radio_third';
                    getNewID = "";
            }

            var testID = $(".RadioBtn.active").prop("id");
            if(testID === undefined) {
                testID = getCurrentID;
            } else {
                testID = "#"+testID;
            }
            console.log("testID = " + testID);

            $(".RadioBtn").removeClass("ACTIVE");
            $(getCurrentID+".RadioBtn").removeClass("VISITED").addClass("ACTIVE");
            sessionStorage.setItem("VISITED", getCurrentID);
            sessionStorage.setItem("NewID", testID);
            if(sessionStorage.NewID !== sessionStorage.CurrentID) {
                $(sessionStorage.NewID+".RadioBtn").addClass("VISITED");
            }
        });






		
		//rob's code for Sessions. Default tab #one is selected	
		/*var loc = window.location.href;
		var fileNameIndex = loc.lastIndexOf("/") + 1;
		var dotIndex = loc.lastIndexOf('.');
		var output = loc.substr(fileNameIndex, dotIndex < fileNameIndex ? loc.length : dotIndex);*/
		var loc = window.location.href;
		var output  = loc.split('/').pop().split('.').shift();
		//alert(output);
		if (sessionStorage.TAG_04971_ORC_target_xyz && sessionStorage.TAG_04971_ORC_target_slide === output) 
		{
			//$info_btn.css("display", "none");
            var target_screen = sessionStorage.TAG_04971_ORC_target_xyz;
            if (target_screen === 'one') {
                $('#one, .LeftBtn#1').addClass('SELECTED');
        		//$info_btn.eq(0).css("display", "inline-block");		
            } else if (target_screen === 'two') {
                $('#two, .LeftBtn#2').addClass('SELECTED');
				//$info_btn.eq(1).css("display", "inline-block");		
            } else if (target_screen === 'three') {
                $('#three, .LeftBtn#3').addClass('SELECTED');
				//$info_btn.eq(2).css("display", "inline-block");
            } else if (target_screen === 'four') {
                $('#four, .LeftBtn#4').addClass('SELECTED');
				//$info_btn.eq(3).css("display", "inline-block");		
            }
            //sessionStorage.removeItem('TAG_04971_ORC_target_xyz');
        } else {
            $('#one, .LeftBtn#1').addClass('SELECTED');
            
            
            //older stuff ignore
    		//$info_btn.eq(0).css("display", "inline-block");
        }
        
        




//Legend_Panel START HERE for ALL CircleBtn


//bazinga!!!!  ^_^
//adnan tariq

$(".Legend_Panel .CircleBtn").on("click touchstart", function(evt) 
	{
		evt.preventDefault();
		//reset_SA1_tabOne();
		
		
		var colorClass = $(this).attr('class');
		//console.log(colorClass);
		//because 'this' has two classes we remove one by using slice 10
		var actualClass = colorClass.slice(10);
		//console.log(" css class to toggle is :" + actualClass);
		
		// parentID should match the value, ci, dots etc
		var parentID = $(this).parent().attr("id");
		//console.log(" Parent id of the btn clicked is :" + parentID);
		
		
		// we take parent id and remove the first integer, which is 0 to get justNum
		var justNum = parseInt(parentID.slice(1));
		//console.log(justNum);
		
		
		var GrabColor = $(this).attr('data-color');
		

		

		// we then make DotParent .. O_o why?
		var DotParent = "btn" + parentID.slice(1);
		
		
		
		//might cause trouble
		//$(".Legend_Panel .CircleBtn").removeClass().addClass("CircleBtn");
		
		//code that needs to be turned on regardless of what state the btn is in
		$(".tab.SELECTED section.SELECTED .svg.split #CI").css("display", "block");
		$(".tab.SELECTED section.SELECTED .svg.split #CI_DISABLED").css("display", "block");
		$(".tab.SELECTED section.SELECTED .svg.split #CI_DISABLED >").css("display", "block");
		$(".PillBtn.SELECTED").removeClass("SELECTED");
		$(".tab.SELECTED section.SELECTED .svg.split #SA >").css("display", "none");
		$(".tab.SELECTED section.SELECTED .svg.split #LINE >").css("display", "none");
		$(".tab.SELECTED section.SELECTED .svg.split #CI >").css("display", "none");
		
		//might be needed for slide 4
		$(".tab.SELECTED section.SELECTED .svg.split #VALUE >").css("display", "none");
		$(".tab.SELECTED section.SELECTED .svg.split #DOTS >").css("display", "none");		
		
		//turn on toHide
		$(".tab.SELECTED section.SELECTED .svg.split #toHide").css("display", "block");
		
		$(".RadioBtn").removeClass("ACTIVE");
		//$(".RadioBtn").removeClass("VISITED");
		
		if($(this).hasClass("SELECTED") && $(this).hasClass(actualClass))
		{
			console.log("REMOVE SELECTED only");
			
			$(this).removeClass(actualClass);
			$(this).removeClass("SELECTED");
			$(".tab.SELECTED .Legend_button #"+ DotParent + " #dot").removeClass(actualClass);
			
			$(".tab.SELECTED section.SELECTED .svg.split #CI #CI_" + justNum).css("display", "none");
			$(".tab.SELECTED section.SELECTED .svg.split #CI #CI_" + justNum).removeAttr("class");
						
			$(".tab.SELECTED section.SELECTED .svg.split #DOTS #DOTS_" + justNum).css("display", "none");
			$(".tab.SELECTED section.SELECTED .svg.split #DOTS #DOTS_" + justNum).removeAttr("class");
			
			$(".tab.SELECTED section.SELECTED .svg.split #LINE #LINE_" + justNum).css("display", "none");
			$(".tab.SELECTED section.SELECTED .svg.split #LINE #LINE_" + justNum).removeAttr("class");
			

			//code for Flow1_Q1_Slide4
			$(".tab.SELECTED section.SELECTED .svg.split #DOTS #DOTS_" + justNum).css("display", "none");
			$(".tab.SELECTED section.SELECTED .svg.split #DOTS #DOTS_" + justNum).removeAttr("class");

			$(".tab.SELECTED section.SELECTED .svg.split #VALUE #VALUE_" + justNum).css("display", "none");
			$(".tab.SELECTED section.SELECTED .svg.split #VALUE #VALUE_" + justNum).removeAttr("class");			

		}		
		
		else if(!$(this).hasClass(actualClass))
		{
			console.log("ADDED the GrabColor. Also added SELECTED back");
			
			//$(".Legend_Panel .CircleBtn").removeClass().addClass("CircleBtn");
			
			
			//remove me class section
			if ($(".tab.SELECTED .Legend_Panel .CircleBtn").hasClass("removeMe"))
			{
				$(".tab.SELECTED .Legend_Panel .CircleBtn").removeClass().addClass("CircleBtn");
			}

			if ($(".tab.SELECTED .Legend_button .btn #dot").hasClass("removeMe"))
			{
				$(".tab.SELECTED .Legend_button .btn #dot").removeClass();
			}		
			
			$(this).addClass(GrabColor);
			$(this).addClass("SELECTED");
			//console.log(GrabColor);
			
			$(".tab.SELECTED .Legend_button #"+ DotParent + " #dot").addClass(GrabColor);

			
			$(".tab.SELECTED section.SELECTED .svg.split #CI #CI_" + justNum).css("display", "block");
			$(".tab.SELECTED section.SELECTED .svg.split #CI #CI_" + justNum).attr('class',"SELECTED");

			$(".svg #LINE #LINE_" + justNum).css("display", "block");
			$(".tab.SELECTED section.SELECTED .svg.split #LINE #LINE_" + justNum).attr('class',"SELECTED");

			
			//code for Flow1_Q1_Slide4 - don't ya just love it
			$(".tab.SELECTED section.SELECTED .svg.split #DOTS #DOTS_" + justNum).css("display", "block");
			$(".tab.SELECTED section.SELECTED .svg.split #DOTS #DOTS_" + justNum).attr('class',"SELECTED");
			

			$(".tab.SELECTED section.SELECTED .svg.split #VALUE #VALUE_" + justNum).css("display", "block");
			$(".tab.SELECTED section.SELECTED .svg.split #VALUE #VALUE_" + justNum).attr('class',"SELECTED");						
									
		}
		
		else if($(this).hasClass(actualClass))
		{
			
			console.log("TURN OFF all other, show SELECTED color only");
			
			//remove all the color class BUT also add back the CircleBtn css class by using the .attr thingy
			$(".tab.SELECTED .Legend_Panel .CircleBtn").attr('class', "CircleBtn");
			
			$(this).addClass(actualClass);
			$(this).addClass("SELECTED");
			
			
			
			//first remove all color classes 
			$(".tab.SELECTED .Legend_button .btn > #dot").removeClass();
			// then just add the actualClass
			$(".tab.SELECTED .Legend_button #"+ DotParent + " #dot").addClass(actualClass);
			//$(".Legend_button #"+ DotParent + " #dot").addClass("SELECTED");
			
			$(".tab.SELECTED section.SELECTED .svg.split #CI").css("display", "block");
			$(".tab.SELECTED section.SELECTED .svg.split #CI >").css("display", "none");
			$(".tab.SELECTED section.SELECTED .svg.split #CI #CI_" + justNum).css("display", "block");
			$(".tab.SELECTED section.SELECTED .svg.split #CI #CI_" + justNum).attr('class',"SELECTED");
			
			//not sure if dots need to be there 
			$(".tab.SELECTED section.SELECTED .svg.split #DOTS >").css("display", "none");
			$(".tab.SELECTED section.SELECTED .svg.split #DOTS #DOTS_" + justNum).css("display", "block");
			$(".tab.SELECTED section.SELECTED .svg.split #DOTS #DOTS_" + justNum).attr('class',"SELECTED");
			
			$(".tab.SELECTED section.SELECTED .svg.split #LINE >").css("display", "none");
			$(".tab.SELECTED section.SELECTED .svg.split #LINE #LINE_" + justNum).css("display", "block");
			$(".tab.SELECTED section.SELECTED .svg.split #LINE #LINE_" + justNum).attr('class',"SELECTED");
			

			//code for Flow1_Q1_Slide4
			$(".tab.SELECTED section.SELECTED .svg.split #DOTS >").css("display", "none");
			$(".tab.SELECTED section.SELECTED .svg.split #DOTS #DOTS_" + justNum).css("display", "block");
			$(".tab.SELECTED section.SELECTED .svg.split #DOTS #DOTS_" + justNum).attr('class',"SELECTED");

			$(".tab.SELECTED section.SELECTED .svg.split #VALUE").css("display", "block");
			$(".tab.SELECTED section.SELECTED .svg.split #VALUE >").css("display", "none");
			$(".tab.SELECTED section.SELECTED .svg.split #VALUE #VALUE_" + justNum).css("display", "block");
			$(".tab.SELECTED section.SELECTED .svg.split #VALUE #VALUE_" + justNum).attr('class',"SELECTED");
						
			Value_DOWN_OFFFFF();
			
			//remove me class section
			if ($(".tab.SELECTED .Legend_Panel .CircleBtn").hasClass("removeMe"))
			{
				$(".tab.SELECTED .Legend_Panel .CircleBtn").removeClass("removeMe");
			}

			if ($(".tab.SELECTED .Legend_button .btn #dot").hasClass("removeMe"))
			{
				$(".tab.SELECTED .Legend_button .btn #dot").removeClass("removeMe");
			}
		
		}
		//if($(this).hasClass(actualClass))
		
		
	});			
                
//bazinga ends ere
//legend panel ends here










/*$(document).ready(function(e) ends here*/		
		});	







		
	