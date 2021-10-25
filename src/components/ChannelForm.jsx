// import React,{useState} from 'react'

// const ChannelForm = ({selectChannel}) => {

//     const [channel, setChannel]  = useState('')

 
//   const formSubmit = (e) =>{
//     e.preventDefault()
//     console.log('channel', channel)
//     selectChannel(channel)
//     setChannel({channel : ""})
//   };
  
//     return (
//         <div className="container">
//         <h2>React Streaming App using Agora</h2>
//           <form className="form_div" onSubmit={formSubmit}>
               
//               <input 
//                  type="text" 
//                  name="channel" 
//                  placeholder="Channel name.."
//                  value={channel}
//                  onChange={(e) => setChannel(e.target.value)}/>
  
//               <input 
//                  className="inputBtn" 
//                  type="submit" 
//                  value="Join Channel"  />
//           </form>
//       </div>
//     )
// }

// export default ChannelForm
