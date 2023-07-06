import React, { useEffect, useState } from 'react'
import rasm from '../img/Rectangle 27.png'
export  function Shop() {
  const spdata = [
    {img:rasm,sp1:'Modern sofa',sp2:'⭐️⭐️⭐️⭐️',sp3:'$73,00',color:'black',vid:'ceiling'}, 
    {img:rasm,sp1:'Modern sofa',sp2:'⭐️⭐️⭐️⭐️',sp3:'$73,00',color:'black',vid:'floor'}, 
    {img:rasm,sp1:'Modern sofa',sp2:'⭐️⭐️⭐️⭐️',sp3:'$73,00',color:'blue',vid:'led'}, 
    {img:rasm,sp1:'Modern sofa',sp2:'⭐️⭐️⭐️⭐️',sp3:'$73,00',color:'red',vid:'modern'}, 
    {img:rasm,sp1:'Modern sofa',sp2:'⭐️⭐️⭐️⭐️',sp3:'$73,00',color:'reed',vid:'retro'}, 
    {img:rasm,sp1:'Modern sofa',sp2:'⭐️⭐️⭐️⭐️',sp3:'$73,00',color:'red',vid:'wood'}, 
    {img:rasm,sp1:'Modern sofa',sp2:'⭐️⭐️⭐️⭐️',sp3:'$73,00',color:'grey',vid:'wood'}, 
    {img:rasm,sp1:'Modern sofa',sp2:'⭐️⭐️⭐️⭐️',sp3:'$73,00',color:'black',vid:'retro'}, 
    {img:rasm,sp1:'Modern sofa',sp2:'⭐️⭐️⭐️⭐️',sp3:'$73,00',color:'orange',vid:'led'}, 
    {img:rasm,sp1:'nodern sofa',sp2:'⭐️⭐️⭐️⭐️',sp3:'$73,00',color:'grey',vid:'retro'}, ] 

    const ceiling = [
      {img:rasm,sp1:'Mdern sofa',sp2:'⭐️⭐️⭐️⭐️',sp3:'$73,00',color:'black',vid:'ceiling'}, 
      {img:rasm,sp1:'Mdern sofa',sp2:'⭐️⭐️⭐️⭐️',sp3:'$73,00',color:'black',vid:'floor'}, 
      {img:rasm,sp1:'Mdern sofa',sp2:'⭐️⭐️⭐️⭐️',sp3:'$73,00',color:'blue',vid:'led'}, 
      {img:rasm,sp1:'Mdern sofa',sp2:'⭐️⭐️⭐️⭐️',sp3:'$73,00',color:'red',vid:'modern'}, 
      {img:rasm,sp1:'Mdern sofa',sp2:'⭐️⭐️⭐️⭐️',sp3:'$73,00',color:'reed',vid:'retro'}, 
      {img:rasm,sp1:'odern sofa',sp2:'⭐️⭐️⭐️⭐️',sp3:'$73,00',color:'red',vid:'wood'}, 
      {img:rasm,sp1:'Mdern sofa',sp2:'⭐️⭐️⭐️⭐️',sp3:'$73,00',color:'grey',vid:'wood'}, 
      {img:rasm,sp1:'Mdern sofa',sp2:'⭐️⭐️⭐️⭐️',sp3:'$73,00',color:'black',vid:'retro'}, 
      {img:rasm,sp1:'Mdern sofa',sp2:'⭐️⭐️⭐️⭐️',sp3:'$73,00',color:'orange',vid:'led'}, 
      {img:rasm,sp1:'nodern sofa',sp2:'⭐️⭐️⭐️⭐️',sp3:'$73,00',color:'grey',vid:'retro'}, ] 

  
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
<<<<<<< HEAD
    <div>
      shop



    </div>
=======
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
          <select name="" id="">
         <option className='btn764' href="" id='asp'>Category</option>
         <option className='btn764'  href="">Ceiling (25)</option>
         <option  className='btn764'href="">Floor (25)</option>
         <option className='btn764' href="">Led (25)</option>
         <option className='btn764' href="">Modern (25)</option>
         <option className='btn764' href="">Retro (25)</option>
        <option  className='btn764'href="">Wood (25)</option>
        </select>
        </div>
        <div className="categsp2">
        
         <a href="" id='asp'>Color</a>
          <button  className='btn764' onClick={()=>fil('black')}>Black (25)</button>
          <button  className='btn764' onClick={()=>fil('blue')}>Blue (25)</button>
          <button className='btn764' onClick={()=>fil('red')}>Red (25)</button>
          <button className='btn764'  onClick={()=>fil('green')}>Green (25)</button>
          <button className='btn764' onClick={()=>fil('yellow')}>Yellow (25)</button>
          <button className='btn764' onClick={()=>fil('grey')}>Grey (25)</button>
          
          </div>
      </div>
     </div>
     </div>
     </div>
     
    
>>>>>>> f59215d99336a3f0539fb785f6af1ac5807e0a3a
  )
}
