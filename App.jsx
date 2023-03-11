import React from "react";
import Course from "./Course";

const App = ()=>{
    return(
        <Course courseDetails={{courseName : "java full stack",
                                courseAvail : true,
                                courseDuration : "3 month"}}
                                />
    )
}
export default App;
















// import React from "react";
// import Json from "./userdata.json";
// import Student from "./Student"
// import "./global.css"


// const App = ()=>{
//     return(
//         <>

//         <Student data={Json} />

//         </>
//     )
// }
// export default App;

















































// import React from "react";
// import Subh from "./Subh"

// const App = ()=>{
//     return(
//         <Subh/>
//     )
// }
// export default App;



















// import React from "react";
// import Props from "./Props";
// import img from "./nature.jpg"
// const App = ()=>{
//     return(
//         <>
//         <Props data = {img}   />
//         <img src="https://lh3.googleusercontent.com/p/AF1QipOQr83kWmB_JpgprcL4pwr6MdTgAgyoRLgTymqi=w768-h768-n-o-v1" alt="bb" />

//         </>
//     )
// }
// export default App;



















// import React from "react";
// import Props from "./Props"

// const App = ()=>{
//     return(
//         <Props data={{username : "Raj" , pwd : 143 , mob : 199}} />
//     )
// }
// export default App;
{/* using props multiple data transfer (function based object)*/}

















// import React from "react";
// import { Component } from "react";
// import Props from "./Props"

// class App extends Component
// {
//     render()
//     {
//         return(
//             <Props data1="ABC" data2="DEF" data3="xyz"/>
//         )
//     }
// }
// export default App;
{/* using props multiple data transfer (class based)*/}









// import React from "react";
// import Props from "./Props"

// const App = ()=>{
//     return(
//         <Props data="props Assignment" data2="props Assignment2"  data3="props Assignment3" />
//     )
// }
// export default App;
{/* using props multiple data transfer (function based)*/}












// import { Component } from "react";

// class App extends Component
// {
//     render()
//     {
//         return(
//             <h1>Class Based Component</h1>
//         )
//     }
// }
// export default App;




// function App()
// {
//     return(
//     <>
//     <h1>Normal Function</h1>
//     </> )
// }
// export default App;




// const App = ()=>{

//     return(
//         <>
//         <h1>Arrow Function</h1>
//         </>
//     )
// }
// export default App;