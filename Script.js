

function select()
{
    option = document.getElementById("selection").value;
    return option;
}

function convert()
{
    option = select();
    
    x = document.getElementById("textbox1").value;
    
    if(x == ""){
        document.getElementById("textbox2").value = "";
        }
    else{
    
    switch(option){
        case "Dollar":
        document.getElementById("textbox2").value = x*0.014*0.9;
        document.getElementById("dollar").src = "Images/Dollar-PNG-Free-Download.png"
        document.getElementById("value").innerHTML = "1 Dollar = 72.06 Rupee";
        break;
        
        case "Euro":
        document.getElementById("textbox2").value = x*0.012*0.9;
        document.getElementById("dollar").src = "Images/euro.png";
        document.getElementById("value").innerHTML = "1 Euro = 81.61 Rupee";
        break;
        
        case "Pound":
        document.getElementById("textbox2").value = x*0.011*0.9;
        document.getElementById("dollar").src = "Images/pound.png";
        document.getElementById("value").innerHTML = "1 Pound = 90.41 Rupee";
        break;
        
        case "Yen":
        document.getElementById("textbox2").value = x*1.58*0.9;
        document.getElementById("dollar").src = "Images/yen.png";
        document.getElementById("value").innerHTML = "1 Yen = 0.64 Rupee";
        break;
        
    }
    }
            
}