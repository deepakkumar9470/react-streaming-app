// import React,{useState,useEffect} from 'react'
// import AgoraRTC  from 'agora-rtc-sdk-ng';

// const USER_ID = Math.floor(Math.random() * 1000000001);

// var client = AgoraRTC.createClient({ mode: "live", codec: "h264"});

// // var localStream = AgoraRTC.createStream({
// //     streamID: USER_ID,
// //     audio: true,
// //     video: true,
// //     screen: false

// // });


// const Call = ({channel}) => {

//    const localStream = AgoraRTC.createStream({
//         streamID: USER_ID,
//         audio: true,
//         video: true,
//         screen: false
    
//     });
  
    
//    const initLocalStream = () => {
//         let me = this;
//         me.localStream.init(
//           function() {
//             console.log("Initialized media successfully");
//             me.localStream.play("agora_local");
//           },
//           function(err) {
//             console.log("getUserMedia failed", err);
//           }
//         );
//      };

//   const initClient = () => {
//          client.init(process.env.APPID, function() {
//              console.log("AgoraRTC client initialized");
//            },
//            function(err) {
//              console.log("AgoraRTC client init failed", err);
//            }
//          );
//        };

//     useEffect(() =>{
//           initLocalStream()
//           initClient()
//      },[])


//     return (
//         <div className="video_container">
//              <div id="agora_local" style={{ width: "400px", height: "400px" }} />
//         </div>
//     )
// }


// export default Call
