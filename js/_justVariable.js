/*
var ThisRef;

//$('#refs-list').empty().append(ThisRef);
$(document).ready(function(evt) {
$('#refs-list').empty().append(ThisRef);

})
*/;



//local Varaibles for research study - Eliquis
YAO_Cornernote = "Yao X, et al. <i>J Am Heart Assoc</i>. 2016;5:e003725.";

// MIGHT NOT NEED THE bm-hit='10'  NICE TO REMOVE IT.. BUT TEST IT OUT FIRST!
YAO_Ref = "<li bm-goto='ELIQUIS_MEDICAL_DVA_PDF/TAG_10758_ELI_Yao-Study'>" + YAO_Cornernote + "<br><span><strong>View Reference</strong></span></li>";

YAO_Long = "Yao X, et al. <i>J Am Heart Assoc</i>. 2016;5:e003725 doi:10.1161/JAHA.116.003725.";

NOSE_Cornernote = "Noseworthy PA, et al. <i>Chest</i>. 2016;150:1302-1312.";
NOSE_Ref = "<li bm-goto='ELIQUIS_MEDICAL_DVA_PDF/TAG_10758_ELI_Noseworthy-Study'>" + NOSE_Cornernote + "<br><span><strong>View Reference</strong></span></li>";


//crap for the showcase - think of these for now as placeholder
Reference_Cornernote = "References text goes here. In debitis consequat nonumes lobortis nonumes lobortis. References text goes here."
Reference_Ref = "<li bm-goto=''>" + Reference_Cornernote + "<br><span><strong>View Reference</strong></span></li>"


Abraham_Cornernote = "Abraham NS, et al. <em>Gastroenterology</em>. 2017;152:1014-1022.e1.";
Abraham_Ref = "<li bm-goto='ELIQUIS_MEDICAL_DVA_PDF/TAG_10758_ELI_Abraham-Study'>" + Abraham_Cornernote + "<br><span><strong>View Reference</strong></span></li>";


Lewis_Cornernote = "Lewis JD, et al. <em>Am J Gastroenterol</em>. 2002;97:2540-2549."
Lewis_Ref = "<li bm-goto='ELIQUIS_MEDICAL_DVA_PDF/TAG_10758_ELI_Lewis-Study'>" + Lewis_Cornernote + "<br><span><strong>View Reference</strong></span></li>";


ARISTOPHANES_Cornernote="ARISTOPHANES reference to be updated.";
ARISTOPHANES_Long="ARISTOPHANES Long version reference to be updated.";

ARISTOPHANES_Ref = "<li bm-goto='something/something-Study'>" + ARISTOPHANES_Cornernote + "<br><span><strong>View Reference</strong></span></li>";



var HCLabel = {
		y:2,
        //margin:25,
        symbolHeight: 19,
        symbolWidth: 19,
        symbolRadius: 5,
	    itemStyle: {
		 font: 'Helvetica-Regular',
		 fontSize:'11px',
		 color: '#949494'
		},
		//marker : {symbol : 'square'}
    };

var ActualFileName;


// whatIsThisFileName will display the name of the file
function whatIsThisFileName () {
	var thisFileName = window.location.href.split("/").slice(-1);
	// convert thisFileName to a string
	thisFileName = thisFileName.toString();
	// then take that string and split it from the "."
	ActualFileName = thisFileName.split(".")[0];
	
	console.log("Media File Name: " + ActualFileName);
	//alert("HTML file name:" + ActualFileName);
}


whatIsThisFileName ();






var abbrDef_list= {

  'ALP':'Alpha',
  'BRA':'<b>Bravo</b>',
  'CHAR':'Charlie',
  'DLT':'Delta',
  'ECH':'<b>Echo</b>'
};

var abrr_ul, keyAbbr;

$(document).ready(function(){

abrr_block=$('body').find('.abbr_list');  // Parent div
keyAbbr=abrr_block.find('.abr_char'); // Child list

for( leti=0; i<keyAbbr.length; i++ ) {
var keyword=$(keyAbbr[i]).text();
str=' = '+abbrDef_list[keyword];
$(keyAbbr[i]).append(str);
};

console.log(keyAbbr);

});










