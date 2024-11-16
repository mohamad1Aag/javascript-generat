






function addElement(mclass,i,addtextinsideelment="dd") {
    let newDiv = document.createElement("div");
    newDiv.className=` ${mclass} ${i}`;
    let newContent = document.createTextNode(`${addtextinsideelment}`);
    newDiv.appendChild(newContent);
    for(let j=0;j<4;j++){
    let new_span =document.createElement("span") ;
    new_span.className=`span-${j}`;
    new_span.style=(" font-size: 40px;\
                      font-weight: 900;\
                       ");
    newDiv.appendChild(new_span);
    let new_span_createtext=document.createTextNode(i);
    new_span.appendChild(new_span_createtext);
    }
let container= document.createElement("div");
container.className="container";
container.appendChild(newDiv);
document.body.appendChild(container);
document.body.insertBefore(container,container);
  }
function generateelment(){
    for(let j=1;j<4;j++){
        let i=13;
        addElement(`a`,`${Math.floor(Math.random() * i)} `,``);
        addElement(`s`,`${Math.floor(Math.random() * i)} `,``);
        addElement(`b`,`${Math.floor(Math.random() * i)} `,``);
        addElement(`d`,`${Math.floor(Math.random() * i)} `,``);
    }
    for(let j=0; j<1;j++){
        let i=13;
        addElement(`a`,`${Math.floor(Math.random() * i)} `,``);
    }
}   










let btn= document.querySelector("button");
btn.onclick= function dd () {
    generateelment();
    console.log("genert1");
    btn.style=("\
    display: none;");};
    
  



