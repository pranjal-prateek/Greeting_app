import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
const CssStyles={};
let currdate=new Date();
currdate=currdate.getHours();
let str='';
if(currdate>1 && currdate<11){
  str='Good Morning'
  CssStyles.color = 'Green'
}
else if(currdate>12 && currdate<19){
  str='Good Afteroon'
  CssStyles.color = 'red'
}
else{
  str='Good Night'
  CssStyles.color = 'black'
}
ReactDOM.render(
  <>
    <div className="container">
    <h1>Hello Sir, <span style={CssStyles}> {str} </span></h1>
    </div>
    
  </>,
  document.getElementById('root')

)