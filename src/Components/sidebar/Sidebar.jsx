import React, { useContext, useState } from 'react'
import "./Sidebar.css"
import {assets} from '../../assets/assets'
import { Context } from '../../context/Context';

export const Sidebar = () => {
    const[extended , setextended]=useState(false);
  const {onSet,prev,setRecentPrompt ,newChat}=useContext(Context);
  const loadPrompt=async(prompt)=>{
setRecentPrompt(prompt)
   await onSet(prompt)
  }
  return (
    <div className='sidebar'>
       
        <div className="top">
<img  onClick={()=>setextended(prev=>!prev)}className='menu' src= {assets.menu_icon}alt=''/>
<div onClick={()=>newChat()} className="new-chat">
    <img src={assets.plus_icon} alt=''/>
    { extended?<p>New Chat</p>:null}
</div>
{extended?
<div className="recent">
    <p className="recent-title">
        Recent
        </p>
        {prev.map((item,index)=>{
            return(
                <div onClick={()=>loadPrompt(item)} className="recent-enrty">
            <img src={assets.message_icon} alt=''/>
            <p>{item.slice(0,18)}...</p>
        </div>

            )
        })}
        

</div>:null}
        </div>
        <div className="bottom">
            <div className="bottom-item recent-enrty ">
                <img src={assets.question_icon} alt=''/>
              {extended?  <p>Help</p>:null}
            </div>
            <div className="bottom-item recent-enrty ">
                <img src={assets.history_icon} alt=''/>
               {extended? <p>Activity</p>:null}
            </div>
            <div className="bottom-item recent-enrty ">
                <img src={assets.setting_icon} alt=''/>
               {extended? <p>Settings</p>:null}
            </div>

        </div>
    </div>
  )
}
