import React from 'react';
// import Card from './Card';
// import Sdata from './Sdata';
import Netflix from './Netflix';
import Amazon from './Amazon';

//Lec 28
const favSeries = "Amazon";

// const FavS = () => {
// if(favSeries === "netflix") {
//   return <Netflix/>;
  // return (
  // <Card 
  //   key = {Sdata[1].import React from 'react';
// import Card from './Card';
// import Sdata from './Sdata';
import Netflix from './Netflix';
import Amazon from './Amazon';

//Lec 28
const favSeries = "Amazon";

// const FavS = () => {
// if(favSeries === "netflix") {
//   return <Netflix/>;
  // return (
  // <Card 
  //   key = {Sdata[1].id}
  //   imgsrc = {Sdata[1].imgsrc}
  //   title = {Sdata[1].title}
  //   sname = {Sdata[1].sname}
  //   link = {Sdata[1].link}
  //   />
  //   );

// } else {
//   return <Amazon/>
  // return (
  //   <Card 
  //     key = {Sdata[3].id}
  //     imgsrc = {Sdata[3].imgsrc}
  //     title = {Sdata[3].title}
  //     sname = {Sdata[3].sname}
  //     link = {Sdata[3].link}
  //     />
  //     );
// }
// };

// function App() {
//   return (
// <>
// <h1 className = 'heading_style'>List of top 5 Netflix series in 2021</h1>
// <Card imgsrc = {Sdata[0].imgsrc}
// title = {Sdata[0].title}
// sname = {Sdata[0].sname}
// link = {Sdata[0].link}
// />
// <Card imgsrc = {Sdata[1].imgsrc}
// title = {Sdata[1].title}
// sname = {Sdata[1].sname}
// link = {Sdata[1].link}
// />
// <Card imgsrc = {Sdata[2].imgsrc}
// title = {Sdata[2].title}
// sname = {Sdata[2].sname}
// link = {Sdata[2].link}
// />
// <Card imgsrc = {Sdata[3].imgsrc}
// title = {Sdata[3].title}
// sname = {Sdata[3].sname}
// link = {Sdata[3].link}
// />
// <Card imgsrc = {Sdata[4].imgsrc}
// title = {Sdata[4].title}
// sname = {Sdata[4].sname}
// link = {Sdata[4].link}
// />
// <Card imgsrc = {Sdata[5].imgsrc}
// title = {Sdata[5].title}
// sname = {Sdata[5].sname}
// link = {Sdata[5].link}
// />
// </>
//   );
// }
//export default App;

// console.log(Sdata[0].sname);
// Lec 25 - Use of Map



// function ncard(val) {
//   console.log(val);
// return(<Card imgsrc = {val.imgsrc}
// title = {val.title}
// sname = {val.sname}
// link = {val.link}
// />
// );

// }
function App() {
  return (
<>
<h1 className = 'heading_style'>List of top 5 Netflix series in 2021</h1>
{/* <FavS/> */}
{/* Turnary Operator Lec 29 */}
{  (favSeries === "netflix") ?  <Netflix/>:  <Amazon/>}
</>
  );
}
export default App;
/* <Card imgsrc = {Sdata[0].imgsrc}
title = {Sdata[0].title}
sname = {Sdata[0].sname}
link = {Sdata[0].link}
/> */

/* {Sdata.map(ncard)}; */

/* Using Fat Arrow Function */
/* {Sdata.map((val,index,Sdata) => {
  console.log(index);
  console.log(Sdata);
  return(
  <Card 
    key = {val.id}
    imgsrc = {val.imgsrc}
    title = {val.title}
    sname = {val.sname}
    link = {val.link}
    />
    );
})} */

// }
/* One more method */
// {Sdata.map(function ncard(val){
//   return(<Card imgsrc = {val.imgsrc}
//     title = {val.title}
//     sname = {val.sname}
//     link = {val.link}
//     />
//     );
// })}


//normal function
// function myName(a,b) {
//   return a+b;
// }
// Fat Arrow Function
// const myName = (a,b) => {
//    return a+b;
// }
// function App() {
//     return (
// <>
//   <h1 className = 'heading_style'>List of top 5 Netflix series in 2021</h1>
//   <Card imgsrc = "https://occ-0-3646-3647.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABVqrtsnJ2fYoiAVqFjSpwUAt_eM_tVomkxSsaWkvTfYLQgZ_ZUab6xl6vDXNtSM0j1w6YuOVf26MVwbzH9fmpZL-t7Jf.jpg?r=235&quot"
//   title = "A Netflix Original Series"
//   sname = "DARK"
//   link = "https://www.netflix.com/in/title/80100172"
//   />
//   <Card imgsrc = "https://occ-0-3646-3647.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABcYWogkUru45KRDP62tg_ZvlKu-2H5XtNrPdhRN5nSLOBBPCR032FLTAAsOwlv_tUi6p_0vPVd8KdtYaZFZ_z6mYGkXZ.jpg?r=8bf"
//   title = "A Netflix Original Series"
//   sname = "EXTRACIRCULAR"
//   link = "https://www.netflix.com/in/title/80990668?source=35"
//   />
//   <Card imgsrc = "https://occ-0-3646-3647.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABSoEEFwl0i4fmFQmSDQOZ_OrshmrVV7tbLEw9X7mLRBtmyyJ5Hkw1Fda2WG-AqIBQ6hEF4sqUEnT_VLeBCpVRcAhiwm-.jpg?r=a42"
//   title = "A Netflix Original Series"
//   sname = "STRANGER THINGS"
//   link = "https://www.netflix.com/in/title/80057281"
//   />
//   <Card imgsrc = "https://occ-0-3646-3647.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABeqU_spPWe9usIEQc2_v7gchUYAY4j__5smdinp9sYlUpCZrn2b5Eu_2XJQV6-6nfdlg-SM3tcM6M6LIAy0wWMHVC6CF.jpg?r=9ff"
//   title = "A Netflix Original Series"
//   sname = "LITTLE THINGS"
//   link = "https://www.netflix.com/in/title/80057281"
//   />
//   <Card imgsrc = "https://occ-0-3646-3647.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABRJDdl8l75NC-TqUxRHZ3gNT1CgxX5ShAaBdM1XyY8lUXy8ZHoTIc6VZqA3cZyf6NGiXuwLQkIrNlD8WezBPSU5INweX.jpg?r=4d3"
//   title = "A Netflix Original Series"
//   sname = "THE ORDER"
//   link = "https://www.netflix.com/in/title/80057281"
//   />
//   <Card imgsrc = "https://occ-0-3646-3647.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABd5tu9PvKdG5QHBfjJ9q5kCczw7KhCVP5H2NAq1yTNRBnzahQDr_48shO0D_bDAbMM1vcgPJcOvmzx39Wq3tuUU7YhGr.jpg?r=ba3"
//   title = "A Netflix Original Series"
//   sname = "SHE"
//   link = "https://www.netflix.com/in/title/80057281"
//   />
//   </>
//     );
// }
// export default App;

