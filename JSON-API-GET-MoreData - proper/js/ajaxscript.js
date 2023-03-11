document.getElementById("btnajax").addEventListener("click",makerequest);
let table=document.getElementById("table");
function makerequest(){
    console.log("Button Clicked");
    const xhr=new XMLHttpRequest();
    xhr.open("GET","https://jsonplaceholder.typicode.com/posts",true);
    xhr.responseType="json";
    
    xhr.onload = () => {
        if(xhr.status===200){
            console.log(xhr.response);
            x=xhr.response;
            for(i=0;i<x.length;i++){
            table.innerHTML+=
            "<tr><td>"+
            x[i].id+
            "</td><td>"+
            x[i].title+
            "</td><td>"+
            x[i].body+
            "</td></tr>";
        }
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
