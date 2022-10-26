import React, { useEffect, useState } from "react";
import Homepage from "./Pages/Homepage";
import { Routes, Route, Link } from "react-router-dom";
import Viewblog from "./Pages/Viewblog";
import Web3 from "web3";
import { ethers } from "ethers";
import PayableAbi from '../src/contracts/Payable.json'

function App() {

  const [transferTo, setTransferTo] = useState('')
  const [transferAmt, setTransferAmt] = useState(0)
  const [input, setInput] = useState('')
  const [allTasks, setAllTasks] = useState([])
  const [reload, setReload] = useState(false)
  const [currentUser, setCurrentUser] = useState(null)
  const [web3API, setWeb3API] = useState({
    provider: null,
    web3: null,
  });
  const PayableAddr = '0xe1573C679b58752c0159522546efB3fD00D9eC07';

  const openMetaMask =  async() =>{

    try {
      const { ethereum } = window;
      if(!ethereum){
        console.log('not installed ethereroum')
        return
      }

      const [account] = await ethereum.request({method : "eth_requestAccounts"}) 
      const provider = new ethers.providers.Web3Provider(ethereum)
      setCurrentUser(account)


    } catch (error) {
      console.log(error)
      
    }





















      // try {
      //     const { ethereum } = window;
      //     if(!ethereum) {
      //       alert("Connect to metamask First !!")
      //       return
      //     }

      //   const accounts =   await ethereum.request({ method : "eth_requestAccounts"})
      //     console.log('lskj')
      //     const provider = new ethers.providers.Web3Provider(ethereum)
      //     setWeb3API({
      //       web3 : new Web3(ethereum),
      //       provider : provider
      //     })

      //     setCurrentUser(accounts[0])

      // } catch (error) {
      //   console.log(error)
      // }
  }



  const getTasks = async() =>{
    try {
    const { ethereum } = window;    
    if(!ethereum){
      alert("Connect to Metamask !")
      return
    }

    const provider = new ethers.providers.Web3Provider(ethereum)
    const signer =  provider.getSigner()
    const PayableContract = new ethers.Contract(
      PayableAddr,
      PayableAbi.abi,
      signer
    )
   
    if(transferTo !== ''){
      const res = await PayableContract.sendEthers(transferTo , { value: ethers.utils.parseEther(transferAmt) });
      console.log(res)
    }else{
      console.log('set a transferTo first')
    }
  

    } catch (error) {
      console.log(error)
    }

  }


const addTask  = async () =>{
  try {

    const { ethereum } = window;
    if(!ethereum) {
      alert('install metamask')
      return
    }

    const provider = new ethers.providers.Web3Provider(ethereum)
    const signer = provider.getSigner()
    // const FunnderContract = new ethers.Contract(
    //   FunderAddr,
    //   FunderAbi.abi,
    //   signer
    // )

    const res = await FunnderContract.addTask(input)

    console.log(res)

  } catch (error) {
    console.log(error)
    
  }
}
  
 const logout = () =>{
  setCurrentUser(null)
 }

useEffect(() => {
  openMetaMask()
}, [currentUser])


  return (
    <>
      <p>asdfsdfa </p>
      {
        currentUser === null ? (
          <p onClick={()=>{openMetaMask()}}> Connect to Wallet </p>
          ) : ""
      }

      <input type='text' value={input} onChange={(e) => setInput(e.target.value)}/>
      <button onClick={()=> {addTask()}}>Add Task</button>
      <ul>
        {allTasks.map((task)=>(
          <li key={task.id}>{`${task.id} : ${task.taskText}  :  ${task.userId}`}</li>
          ))}
      </ul>
          <button onClick={()=>{logout()}}>{currentUser}</button>
          <div>
            <input type="text"  style={{margin: "30px" , padding : "10px"}} placeholder="Wallet Addresss ..." value={transferTo} onChange={(e) => setTransferTo(e.target.value)}/>

            <input type="number"  style={{margin: "30px" , padding : "10px"}} placeholder="Amount ..." value={transferAmt} onChange={(e) => setTransferAmt(e.target.value)}/>
          <button onClick={()=> {getTasks()}}>Transfer</button>
          </div>
    </>

    //   <Routes>
    //   <Route path="/"  element={ <Homepage/>} />
    //   <Route path="blog" element={<Viewblog />} />
    // </Routes>
  );
}

export default App;
