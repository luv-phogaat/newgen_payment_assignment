$(document).ready(function(){
    $("#two").hide();
    $("#three").hide();
    $("#four").hide();  
    $("#five").hide();  
    
    $("#onehref").click(function(){
       document.getElementById("hrefone").style.display="block";
       document.getElementById("two").style.display="none";
       document.getElementById("three").style.display="none";
       document.getElementById("four").style.display="none";
       document.getElementById("five").style.display="none";
        
    });
    $("#twohref").click(function(){
       document.getElementById("hrefone").style.display="none";
       document.getElementById("two").style.display="block";
       document.getElementById("three").style.display="none";
       document.getElementById("four").style.display="none";
       document.getElementById("five").style.display="none";
        
    });
    $("#threehref").click(function(){
       document.getElementById("hrefone").style.display="none";
       document.getElementById("two").style.display="none";
       document.getElementById("three").style.display="block";
       document.getElementById("four").style.display="none";
       document.getElementById("five").style.display="none";
        
    });
    $("#fourhref").click(function(){
       document.getElementById("hrefone").style.display="none";
       document.getElementById("two").style.display="none";
       document.getElementById("three").style.display="none";
       document.getElementById("four").style.display="block";
       document.getElementById("five").style.display="none";
        
    });
    $("#fivehref").click(function(){
       document.getElementById("hrefone").style.display="none";
       document.getElementById("two").style.display="none";
       document.getElementById("three").style.display="none";
       document.getElementById("four").style.display="none";
       document.getElementById("five").style.display="block";
        
    });
    
    $('li').click(function() {
        $('li').removeClass();
        $(this).addClass('active active1');
    });
    
});