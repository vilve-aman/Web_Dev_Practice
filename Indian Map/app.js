console.log("In Indian Mapp")

let regions = document.querySelectorAll("path");
console.log(regions);

console.log(regions[0]);


for(let i=0;i<regions.length-1; i++ )
{
    regions[i].addEventListener( onmouseover,showname() );
}

function showname(){
    console.log('moover');
}






for(let i=0;i<regions.length-1; i++ )
{
    let temp=regions[i].childNodes;
        //console.log(temp[0]);
        let state=stName(temp[0].innerHTML);
        console.log(state);
}

function stName(txt) {
    
    //console.log(txt);
    var index=findName(txt);
    var stname="";
    for(let i=index;i<txt.length;i++)
    {
        stname=stname.concat(txt[i]);
    }
    return stname;
}


function findName(txt) {
    for(let i=0 ; i<txt.length-1 ; i++)
    {
        if((txt[i]==" ")&&(txt[i-1]=="m"))
        {
            return i+1;
        }

    }
            
}


