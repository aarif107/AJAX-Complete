//http://dummy.restapiexample.com/create

document.getElementById("btnajax").addEventListener("click",makerequest);

function makerequest(){
    console.log("Button Clicked");
    const xhr=new XMLHttpRequest();
    xhr.open("POST","http://dummy.restapiexample.com/api/v1/create",true);
    xhr.responseType="json";
    
    xhr.onload = () => {
        if(xhr.status===200){
            console.log(xhr.response);
            document.getElementById("info").innerText="Data Inserted";
        }
        else{
            console.log("Problem occured");
        }
    };

    mydata=	'{"name":"Aarif","salary":"10","age":"23"}';
    xhr.send(mydata);
}

