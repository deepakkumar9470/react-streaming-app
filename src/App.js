
import './App.css';
import React,{useState,useRef} from 'react'
import ReactDOM from 'react-dom';
import {rtc} from './stream'
import AgoraRTC from "agora-rtc-sdk-ng";




function App() {

    const [joined, setJoined] = useState(false);  
    const channelRef = useRef("");
    const remoteRef = useRef("");
    const leaveRef = useRef("");


// Agora Join event
  const handleSubmit = async () =>{
    try {
       if (channelRef.current.value === "") {
       return alert("Please Enter Channel Name");
      }
       setJoined(true);
         
          
          rtc.localAudioTrack = await AgoraRTC.createMicrophoneAudioTrack();
          
          rtc.localVideoTrack = await AgoraRTC.createCameraVideoTrack();
          
          rtc.localVideoTrack.play("local-stream");

          rtc.client.on("user-published", async (user, mediaType) => {
            
            await rtc.client.subscribe(user);
            console.log("subscribe success",user);
            
    
            if (mediaType === "video" || mediaType === "all") {
              
              const remoteVideoTrack = user.videoTrack;
              console.log(remoteVideoTrack);
    
              const PlayerContainer = React.createElement("div", {
                id: user.uid,
                className: "stream",
              });
              ReactDOM.render(
                PlayerContainer,
                document.getElementById("remote-stream")
              );
    
              user.videoTrack.play(`${user.uid}`);
            }
    
            if (mediaType === "audio" || mediaType === "all") {
              
              const remoteAudioTrack = user.audioTrack;
             
              remoteAudioTrack.play();
            }
          });
      
      }
       catch(err){
        console.error(err)
       }
  };
  
  // Agora Leave event 
  const handleLeave = async () =>{
        try {
          const localContainer = document.getElementById("local-stream");

          rtc.localAudioTrack.close();
          rtc.localVideoTrack.close();

          setJoined(false);
          localContainer.textContent = "";

          // Traverse all remote users
          rtc.client.remoteUsers.forEach((user) => {
            
            const playerContainer = document.getElementById(user.uid);
            playerContainer && playerContainer.remove();
          });

          // Leave the channel
          await rtc.client.leave();
        } catch (err) {
          console.error(err);
        }
  };

  return (
    <>
      <h2 className="text">React Streaming App using Agora</h2>
      <div className="container">
        <input
          type="text"
          ref={channelRef}
          id="channel"
          placeholder="Enter Channel name"
        />
        <input
          className="inputBtn"
          type="submit"
          value="Join"
          onClick={handleSubmit}
          disabled={joined ? true : false}
        />
        <input
         className="inputBtn"
          type="button"
          ref={leaveRef}
          value="Leave"
          onClick={handleLeave}
          disabled={joined ? false : true}
        />
      </div>
      
      {joined ? (
        <>
          <div id="local-stream" className="stream local-stream"></div>
          <div
            id="remote-stream"
            ref={remoteRef}
            className="stream remote-stream"
          ></div>
        </>
      ) : null}
    </>
  );
}



export default App;
