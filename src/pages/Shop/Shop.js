import React, { useEffect, useState } from 'react'
import rasm from '../img/Rectangle 27.png'
export  function Shop() {
  const spdata = [{img:rasm,sp1:'Modern sofa',sp2:'⭐️⭐️⭐️⭐️',sp3:'$73,00'}, 
    {img:rasm,sp1:'Modern sofa',sp2:'⭐️⭐️⭐️⭐️',sp3:'$73,00',color:'black'}, 
    {img:rasm,sp1:'Modern sofa',sp2:'⭐️⭐️⭐️⭐️',sp3:'$73,00',color:'blue'}, 
    {img:rasm,sp1:'Modern sofa',sp2:'⭐️⭐️⭐️⭐️',sp3:'$73,00',color:'red'}, 
    {img:rasm,sp1:'Modern sofa',sp2:'⭐️⭐️⭐️⭐️',sp3:'$73,00',color:'green'}, 
    {img:rasm,sp1:'Modern sofa',sp2:'⭐️⭐️⭐️⭐️',sp3:'$73,00',color:'yellow'}, 
    {img:rasm,sp1:'Modern sofa',sp2:'⭐️⭐️⭐️⭐️',sp3:'$73,00',color:'grey'}, 
    {img:rasm,sp1:'Modern sofa',sp2:'⭐️⭐️⭐️⭐️',sp3:'$73,00',color:'black'}, 
    {img:rasm,sp1:'Modern sofa',sp2:'⭐️⭐️⭐️⭐️',sp3:'$73,00',color:'orange'}, 
    {img:rasm,sp1:'nodern sofa',sp2:'⭐️⭐️⭐️⭐️',sp3:'$73,00',color:'grey'}, ] 

  
    const [some,setSome] = useState(spdata)
    const [any,setAny] = useState('')
    const [anyt,setAnyt] = useState('')
//     function tod(s){
// if(s==='all'){
// setSome(spdata)
// }else{
//   let new1 = [...spdata].filter(item=> item.s ===s)
//   setSome(new1)
// }
//     }

const filte = (any, spdata) => {
  if (!any) {
    return spdata;
  }
  return spdata.filter(({ sp1 }) =>
    sp1.toLowerCase().includes(any.toLowerCase())
  );
}
useEffect(()=>{
  const den = setTimeout(()=>{
   const filt = filte(any,spdata);
   setSome(filt)
  },300);
  return ()=> clearTimeout(den)
 },[any])



//  const fil = (s) => {
// if (s){
//   let kj = [...spdata]
//    spdata.filter(({ color }) =>
//     color.toLowerCase().includes(s.toLowerCase())
    
//   );
  
// }
// }

  const [colorFilter,setColorFilter] = useState('');

  const fil = (color) => {
    setColorFilter(color);
    setSome(spdata.filter((item) => item.color === color));
  };
  return (
    <div className='Spwrapp'>
     <div className="sec1sp">
      <div className="nimsp">
     <div className="spbosh">
     <span className='spsp1'>Showing 1-9 of 57 results</span>
     <span className='spsp1'>Sort by popularity</span>
     </div>
     <div className="spp">
     <div className="sps">
      {some.map((item)=>(
        <div className="boxs">
        <img src={item.img} alt="" />
        <div className="non">
        <span className='sp3'>{item.sp1}</span>
        <span className='sp4'>{item.sp2}</span>
        <span className='sp5'>{item.sp3}</span>
        </div>
        </div>
      ))}
     </div>
     </div>
     </div>
     <div className="sec2sp">
      <div className="categysp">
        <div className="inpsp">
<input className='inpsp' type="text" placeholder='Search...'   value={any} 
onChange={(e)=>{setAny(e.target.value)}}

/>
        </div>
        <div className="categsp1">
         <a href="" id='asp'>Category</a>
         <a href="">Ceiling (25)</a>
         <a href="">Floor (25)</a>
         <a href="">Led (25)</a>
         <a href="">Modern (25)</a>
         <a href="">Retro (25)</a>
        <a href="">Wood (25)</a>
        </div>
        <div className="categsp2">
          <a href="" id='asp'>Color</a>
          <button  onClick={()=>fil('black')}>Black (25)</button>
          <button  onClick={()=>fil('blue')}>Blue (25)</button>
          <button onClick={()=>fil('red')}>Red (25)</button>
          <button  onClick={()=>fil('green')}>Green (25)</button>
          <button onClick={()=>fil('yellow')}>Yellow (25)</button>
          <button onClick={()=>fil('grey')}>Grey (25)</button>
          </div>
      </div>
     </div>
     </div>
     </div>
     
    
  )
}
