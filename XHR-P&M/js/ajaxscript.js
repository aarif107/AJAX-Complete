document.getElementById("btnajax").addEventListener("click",makerequest);

function makerequest(){
    console.log("Button Clicked");
    const xhr=new XMLHttpRequest();
    xhr.open("GET","data.txt",true);
    xhr.withCredentials=true;
    xhr.responseType="Text";
    xhr.setRequestHeader("Content-Type","application/json");
    
    xhr.onload = () => {
        if(xhr.status===200){
            console.log("XHR Object",xhr);
            console.log("ResponseText",xhr.responseText);
            console.log("StatusText",xhr.statusText);
            console.log("Response",xhr.response);
            console.log("Response-URL",xhr.responseURL);
            console.log("With-Credentials",xhr.withCredentials);
            console.log("",xhr.getResponseHeader("Last-Modified"));
            console.log("",xhr.getAllResponseHeaders());
        }
        else{
            console.log("Problem occured");
        }
    };

    xhr.send();
}
