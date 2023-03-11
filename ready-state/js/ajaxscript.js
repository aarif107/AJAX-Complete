document.getElementById("btnajax").addEventListener("click",makerequest);

function makerequest(){
    console.log("Button Clicked");
    const xhr=new XMLHttpRequest();
    console.log("Before open",xhr.readyState);
    xhr.open("GET","data.txt",true);
    console.log("After open",xhr.readyState);
    xhr.onreadystatechange = () =>{
        console.log("readystate",xhr.readyState);
        if(xhr.readyState === XMLHttpRequest.DONE){
            if(xhr.status === 200){
                console.log(xhr);
                console.log(xhr.responseText);
            }else{
                console.log("problem Ocurred");
            }
        }
    };
    xhr.send();
}