console.log("hello there");



function rps(i){
  
    var j=botchoice();
    var k=winn(i,j);
    print_i(i);
    print_i(k+4);
    print_i(j);
    
    console.log(i);
    console.log(j);
    //console.log(k);
}


function botchoice(){
    //console.log(Math.round(Math.random()*2));
    var bc=Math.round(Math.random()*2);
    return bc;
}

function winn(r,c){
    console.log(r);
    console.log(c);
   switch(r){
       case 0 :if(c=0) {return 0;} 
               else if(c=1){return -1;}                  
               else if(c=2){return 1;}                
                    
            break;
       case 1 :if(c=0) {return 1;} 
                else if(c=1){return 0;}                  
                else if(c=2){return -1;}                
            
            break;
       case 2 :if(c=0) {return -1;} 
               else if(c=1){return 1;}                  
               else if(c=2){return 0;}                
            
            break;
        default : break;
   }
}


function print_i(a){

    var r_img= document.createElement("img");
    r_img.setAttribute("height","150px");
    r_img.setAttribute("width","150px");

    switch(a){
        case 0 : r_img.setAttribute("src","rock.jpg");
            break;
        case 1 :r_img.setAttribute("src","paper.jpg");
            break;
        case 2 :r_img.setAttribute("src","scissors.jpg");
            break;
        case 3 :r_img.setAttribute("src","lose.jpg");
            break;
        case 4 :r_img.setAttribute("src","tied.jpg");
            break;
        case 5 :r_img.setAttribute("src","win.jpg");
            break;
        default: console.log("not found"); 

    }
    var add=document.getElementById("result");
    add.appendChild(r_img);
}

















