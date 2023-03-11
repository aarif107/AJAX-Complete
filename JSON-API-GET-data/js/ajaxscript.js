document.getElementById("btnajax").addEventListener("click",makerequest);

let t=document.getElementById("title");
let b=document.getElementById("body");

function makerequest(){
    console.log("Button Clicked");
    const xhr=new XMLHttpRequest();
    xhr.open("GET","https://jsonplaceholder.typicode.com/posts/1",true);
    xhr.responseType="json";
    
    xhr.onload = () => {
        if(xhr.status===200){
            console.log(xhr.response);
            console.log(xhr.response.userId);
            console.log(xhr.response.id);
            console.log(xhr.response.title);
            console.log(xhr.response.body);
            t.innerText=xhr.response.title;
            b.innerText=xhr.response.body;
        }
        else{
            console.log("Problem occured");
        }
    };


    xhr.send();
}

// function makerequest(){
//     console.log("Button Clicked");
//     const xhr=new XMLHttpRequest();
//     xhr.open("GET","data.json",true);
    
//     xhr.onload = () => {
//         if(xhr.status===200){
//             console.log(xhr.response);
//             let obj=JSON.parse(xhr.response);
//             console.log(obj);
//             console.log(obj.name);
//             console.log(obj.roll);
//             n.innerText=obj.name;
//             r.innerText=obj.roll;
//         }
//         else{
//             console.log("Problem occured");
//         }
//     };


//     xhr.send();
// }
