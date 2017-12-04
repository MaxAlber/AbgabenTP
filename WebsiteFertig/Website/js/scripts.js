// Get the modal
var modal = document.getElementsByClassName('modal');

// Get the button that opens the modal
var btn = document.getElementsByClassName("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var span1 = document.getElementsByClassName("close")[1];
var span2 = document.getElementsByClassName("close")[2];
var span3 = document.getElementsByClassName("close")[3];
var span4 = document.getElementsByClassName("close")[4];
var span5 = document.getElementsByClassName("close")[5];
var span6 = document.getElementsByClassName("close")[6];
var span7 = document.getElementsByClassName("close")[7];
var span8 = document.getElementsByClassName("close")[8];

// When the user clicks on the button, open the modal 
btn[0].onclick = function()
{
        modal[0].style.display = "block";
}

btn[1].onclick = function()
{
        modal[1].style.display = "block";
}

btn[2].onclick = function()
{
        modal[2].style.display = "block";
}

btn[3].onclick = function()
{
        modal[3].style.display = "block";
}

btn[4].onclick = function()
{
        modal[4].style.display = "block";
}

btn[5].onclick = function()
{
        modal[5].style.display = "block";
}

btn[6].onclick = function()
{
        modal[6].style.display = "block";
}

btn[7].onclick = function()
{
        modal[7].style.display = "block";
}

btn[8].onclick = function()
{
        modal[8].style.display = "block";
}



span.onclick = function()
{
    
    modal[0].style.display="none";
   
       
}
span1.onclick = function()
{
    
    modal[1].style.display="none";
   
       
}
span2.onclick = function()
{
    
    modal[2].style.display="none";
   
       
}
span3.onclick = function()
{
    
    modal[3].style.display="none";
   
       
}
span4.onclick = function()
{
    
    modal[4].style.display="none";
   
       
}
span5.onclick = function()
{
    
    modal[5].style.display="none";
   
       
}
span6.onclick = function()
{
    
    modal[6].style.display="none";
   
       
}
span7.onclick = function()
{
    
    modal[7].style.display="none";
   
       
}
span8.onclick = function()
{
    
    modal[8].style.display="none";
   
       
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event)
{
    for(var i = 0; i<9; i++)
        {
            if (event.target == modal[i])
            {
                modal[i].style.display = "none";
            }
        }
}




function rotate()
{
    var image1 = document.getElementById("eyelogo");
    
    
    var pic2  = new Image();   pic2.src  = "eye2.png";
    var pic3  = new Image();   pic3.src  = "eye3.png";
    var pic4  = new Image();   pic4.src  = "eye4.png";
    var pic5  = new Image();   pic5.src  = "eye5.png";
    var pic6  = new Image();   pic6.src  = "eye6.png";
    
    image1.src = pic2.src;
  
    
}



