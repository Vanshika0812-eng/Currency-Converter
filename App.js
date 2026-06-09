let url="https://latest.currency-api.pages.dev/v1/currencies/usd.json";
let optionVal=document.querySelectorAll("option");
let select_body=document.querySelectorAll("select");
let input=document.querySelector('#amount');
let message=document.querySelector('.msg');
let btn=document.querySelector("button");
function selectFun(){
for(let ele of select_body){
    for(let i in countryList){
     ele.innerHTML+=`<option value=${i}>${i}</option>`;
    }
}
}

 let f="USD"
 let t="INR";
 f=f.toLowerCase();
 t=t.toLowerCase();

for(let ele of select_body){
ele.addEventListener("change",()=>{
        ele.previousElementSibling.setAttribute("src",`https://flagsapi.com/${countryList[ele.value]}/flat/64.png`);
        if(ele.getAttribute("id")=="from"){
             f=ele.value.toLowerCase();
            url=`https://latest.currency-api.pages.dev/v1/currencies/${f}.json`;
            // url=url.toLowerCase();
            // console.log(url);
        }   
        if(ele.getAttribute("id")=="to"){
            t=ele.value.toLowerCase();
        } })
}  

           btn.addEventListener("click",(evt)=>{
            evt.preventDefault();  //to prevent other default event handling
             let promise=fetch(url);
       promise.then((resp)=>{
        return resp.json();
        }).then((data)=>{ 
            if(input.value>0){
       message.innerText=`${input.value} ${f.toUpperCase()}=${input.value*data[f][t]} ${t.toUpperCase()}`;
            } 
    })   
        }
    )
        







