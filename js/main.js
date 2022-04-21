'use strict';

(function() {
    
})();
var previousClickedarrow = [];
var previousClickedEle = [];
var previousClickedBeam = [];
var previousClickedMainBeam = [];
var mainBeamDisplay = [];  
function onSelection() {
    var selectedRadio = document.getElementsByTagName("input");
    //console.log(selectedRadio);
    var value;
    for (var i = 0; i < selectedRadio.length; i++) {
        if (selectedRadio[i].type === 'radio' && selectedRadio[i].checked) {
            // get value, set checked flag or do whatever you need to
            value = selectedRadio[i].value;
    //var selectedRadioval = selectedDropdown.options[selectedDropdown.selectedIndex].text;
    if (value === "P P") {
       // document.getElementById("procedure-message").innerHTML = "<li>Select the load type, check the input parameters and click on Start button</li>" + "<li>Observe the beam of Deflection and pay attention to the shear force and bending moment in the observation section </li>";
        document.getElementById("main-beam1").style.display="block"; 
        moveArrowDown("arrow", 97);
        const myTimeout = setTimeout(function() {
            cantiPlBeam("#canti-pl-main-beam", "#canti-beam-pl");
                previousClickedBeam.push("beam1");
                document.getElementById("beam1").style.display = "none";
                // console.log("beam1");
                previousClickedMainBeam.push("main-beam1");
                document.getElementById("main-beam1").style.display = "none";
                mainBeamDisplay.push("main-beam1");
                document.getElementById("main-beam1").style.display = "block";
        }, 2000); 
        

    } else if (value === "Fi Fi") {
        // document.getElementById("main-beam1").style.display = "none";
        // document.getElementById("procedure-message").innerHTML = "<li>Select the load type, check the input parameters and click on Start button</li>" + "<li>Observe the beam of Deflection and pay attention to the shear force and bending moment in the observation section </li>";
        document.getElementById("main-beam3").style.display="block"; 
        moveArrowDown("arrow", 97);
        const myTimeout = setTimeout(function() {
            fixedPlBeam("#fixed-pl-main-beam", "#fixed-beam-pl");
            previousClickedBeam.push("beam3");
            document.getElementById("beam3").style.display = "none";
            previousClickedMainBeam.push("main-beam3");
            document.getElementById("main-beam3").style.display = "block";
        }, 2000);
        

    } else if (value === "F P") {
        // document.getElementById("main-beam1").style.display = "none";
        // document.getElementById("procedure-message").innerHTML = "<li>Select the load type, check the input parameters and click on Start button</li>" + "<li>Observe the beam of Deflection and pay attention to the shear force and bending moment in the observation section </li>";
        document.getElementById("main-beam5").style.display="block"; 
        moveArrowDown("arrow", 97);
        const myTimeout = setTimeout(function() {
            onessPlBeam("#oness-pl-main-beam", "#oness-beam-pl");
                previousClickedBeam.push("beam5");
                document.getElementById("beam5").style.display = "none";
                previousClickedMainBeam.push("main-beam5");
                document.getElementById("main-beam5").style.display = "none";
                mainBeamDisplay.push("main-beam5");
                document.getElementById("main-beam5").style.display = "block";
        }, 2000);
    } else if (value === "Fi Fr") {
        // document.getElementById("main-beam1").style.display = "none";
        // document.getElementById("procedure-message").innerHTML = "<li>Select the load type, check the input parameters and click on Start button</li>" + "<li>Observe the beam of Deflection and pay attention to the shear force and bending moment in the observation section </li>";
        document.getElementById("main-beam7").style.display="block"; 
        moveArrowDown("arrow", 97);
        const myTimeout = setTimeout(function() {
            twossPlBeam("#twoss-pl-main-beam", "#twoss-beam-pl");         
                previousClickedBeam.push("beam7");
                document.getElementById("beam7").style.display = "none";
                // console.log("beam1");
                previousClickedMainBeam.push("main-beam7");
                document.getElementById("main-beam7").style.display = "none";
                mainBeamDisplay.push("main-beam7");
                document.getElementById("main-beam7").style.display = "block";
        }, 2000);
    }
}
}

//this function shows the animations in the observations section 
function showObservations(ele1, ele2) {
    var path1 = document.getElementsByClassName(ele1)[0].getElementsByTagName("path")[0];
    var path1Val = path1.getAttribute("d")
    var path2 = document.getElementsByClassName(ele2)[0].getElementsByTagName("path")[0];
    var path2Val = path2.getAttribute("d")
    animateObserve(ele1, path1Val);
    console.log(path1Val);
    // animateObserve(ele2, path2Val);
    console.log(path2Val);
}

}