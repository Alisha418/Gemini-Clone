import { createContext, useState } from "react";
import run from "../config/geminiapi";

export const Context=createContext();
const ContextProvider = (props) => {
 const[Input , setInput]=useState("");
const[recentPrompt ,setRecentPrompt] =useState("");
const[prev , setprevprompt]=useState([]);
const[showResult,setShowResult]=useState(false);
const[loading,setloading]=useState(false);
const[resultData,setresultData]=useState("");
const delaypara=(index,nextWord)=>{
setTimeout(function () {
setresultData(prev=>prev+nextWord);

},75*index)
}
const newChat=() =>
{
   setloading(false)
   setShowResult(false)
}
 
 const onSet=async(prompt)=>{
    setresultData("")
    setloading(true)
    setShowResult(true)
    let response;
    if(prompt !==undefined)
    {
      response = await run(prompt);
      setRecentPrompt(prompt)

    }
    else{
      setprevprompt(prev=>[...prev,input])
      setRecentPrompt(input)
      response=await run(input)

    }
    
    
    let responseArray=response.split("**")
    let newArray=""
    for(i=0 ; i<responseArray.length;i++)
    {
      if(i===0 || i%2 !==1)
      {
         newArray+=responseArray[i]
      }
      else{
         newArray+="<b>"+responseArray[i]+"</b>"
      }
    }
    let newArray2=newArray.split("*").join("</br>")
    let newArrayResponse=newArray2.split(" ")
    for(i=0;i<newArrayResponse.length;i++){
      const nextWord=newArrayResponse[i];
      delaypara(i,nextWord+" ")
    }
    setresultData(newArray2)
    setloading(false)
    setInput( "")
 }

    const contextValue={ 
        Input ,
         setInput,
         recentPrompt ,
         setRecentPrompt,
         prev , 
         setprevprompt,
         showResult,
         setShowResult,
         loading,
         setloading,
         resultData,
         setresultData,
         onSet,
         newChat



    }
 return (
    <Context.Provider value={contextValue}>
        {props.children}
    </Context.Provider>
 )
}
export default ContextProvider;