


//changing color buttons//////////
function change_color(color) {
    document.getElementById("stylesheet").setAttribute('href', "./css/css" + color + ".css");
    window.location.reload;
}
var coloru = "#f14f2b";
function color(a) {
    coloru = a;
    document.getElementById("views_i").style.color = coloru;
}
//------changing color show and hide-----------
document.getElementById('change_color').style.left = '0px'
function change_color_f(){
    if (document.getElementById('change_color').style.left == '0px') 
        document.getElementById('change_color').style.left = "-" + document.getElementById("change_color_left").scrollWidth + "px";
    else document.getElementById('change_color').style.left = '0px';
}
//--------------giving the intro a width and height to be full screen-------------
var intro = document.getElementById("intro");
intro.style.width = window.innerWidth + "px";
intro.style.height = window.innerHeight + "px";


//-----------------------intro typing--------------------------------------
//variables
var space_num = 1, space_name = document.getElementById("space" + space_num), intro_h = document.getElementById("intro_h"), intro_p = document.getElementById("intro_p"), str = "Welcome to MALVIN", tag = '<pre id="intro_h_pre"></pre>';
//starting the typing after page loads
document.onload = setTimeout(function () {
    var iii = 0;
    space_name.innerHTML = tag;
    document.getElementById("intro_h_pre").style.padding = "30px 0";
    intro_h.innerHTML += str[iii];
    string_out(intro_h,iii);
}, 3000);
//typing function
function string_out(place,iii){
    iii++;
    setTimeout(function(){
        
        place.innerHTML += str[iii];

    },300);
    if (iii < str.length-1) setTimeout(function () { string_out(place, iii); }, 200);
    else {
        setTimeout(function () {space_name.style.display = "none";}, 3000)
                
    }
}   


//----------------the drop down menu------------------
//drop function onclick 
function drop_menu() {
    if (document.getElementById('navbar_links').style.display == 'block')
    {
        document.getElementById('drop_up').style.display = 'none';
        document.getElementById('drop_down').style.display = 'inline-block';
        document.getElementById('navbar_links').style.display = 'none';
    } else
    {
        document.getElementById('drop_up').style.display = 'inline-block';
        document.getElementById('drop_down').style.display = 'none';
        document.getElementById('navbar_links').style.display = 'block';
    }
}


//-------------------------scroll functio to manipulate the navbar while scrolling---------------------
//declaring variables
var navbar = document.getElementById('navbar');
var navbar_links = document.getElementById('navbar_links'), section = document.getElementsByTagName("section");
//function onscroll of the body
function scroll_func() {
  
    //the navbar manipulation
    if ((document.documentElement.scrollTop || document.body.scrollTop) >= 10) {
            navbar.style.backgroundColor = "rgba(255,255,255,0.9)"; 
            navbar.style.color = "#1f1f1f";
            navbar.style.boxShadow = "0 0 10px grey";
            navbar.style.position = "fixed";
           // document.getElementById("space").style.paddingTop = "40px";
    }
    if ((document.documentElement.scrollTop || document.body.scrollTop) <= 5) {
           navbar.style.backgroundColor = "rgba(0,0,0,0)"; 
            navbar.style.color = "#1f1f1f";
            navbar.style.boxShadow = "0 0 rgba(0,0,0,0)";
            navbar.style.position = "static";
            navbar.style.backgroundColor = "transparent";
           // document.getElementById("space").style.paddingTop = "0px";
    }
}



//content function 
function onclick_content(content) {
    if(document.getElementById(content + '_hover').style.display == 'block')
        document.getElementById(content + '_hover').style.display = 'none';
    else
    {
        var con = content;
        for(var ii=1;ii<=2;ii++)
        {
            content = "tools_a";
            document.getElementById(content + '_hover').style.display = 'none';
            content = "languages_a";
            document.getElementById(content + '_hover').style.display = 'none';
            content = "gothelpfrom_a";
            document.getElementById(content + '_hover').style.display = 'none'
        } content = con;
        document.getElementById(content + '_hover').style.display = 'block';
    }
}

// A counter for the views
var views_var = 0;
window.onload = function () {
    views_var +=1; 
    document.getElementById("views_p").innerHTML = views_var;
    change_color_f();
}

var r = 1, b=0;
//A counter for the likes
function likes_func()  {
    if (r == 1) { b++; r++; document.getElementById("views_i").style.color = coloru; }
    else if (r >= 2)
    { b--; document.getElementById("views_i").style.color = "white"; r--; }
    document.getElementById("likes_p").innerHTML = b;
    
}
// window.location.reload = {}

