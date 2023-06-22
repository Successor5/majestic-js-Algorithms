import React, { useState } from "react";
export const Demo =()=>{

    // setTimeout(()=>{
//         let word=  document.querySelectorAll('w1').innerHTML = 'Hello';
//         document.getElementById("m1").innerHTML = "Hello james";
//         let num =  document.getElementById("num1").value=50;
//         document.getElementById("w1").innerHTML="we"
//         document.getElementById("w1").style.color="red"
//       console.log(word);
//     },2000)

//     setTimeout(()=>{
//         document.getElementById("w2").innerHTML="we"
//         document.getElementById("w2").style.color="red"
//     },3000)
//     setTimeout(()=>{
//     document.getElementById("w3").innerHTML="😪😪"
//     document.getElementById("w3").style.color="red"
// },4000)



let initials = {
    number:0,
    word: ""
}
const[number,setNumber] = useState(0)
const[word,setWord] = useState("")
const[dead, setDead] = useState(false)
const[string, setString]= useState("")

let change = (event) => {
    if (event.target.value === initials.number) {
        setNumber(event.target.value)
    }
    if (event.target.value === initials.word) {
        setWord(event.target.value)
    }
}
    return(

        <div>
            <p>number: {number}</p>
            <p>word: {word}</p>
        
          
            <div className="mainc">
                <div className="innermain1" id="m1"></div>
                <input type="number" id="num1"  value={number} onChange={change}/>
                <div  className="slim"></div>
                <input id="w1" type="text" className="word" onChange={change}></input>
                <div id="w2" className="word">me</div>
                <div id="w3" className="word">me</div>
              
            </div>
        </div>
    )
}