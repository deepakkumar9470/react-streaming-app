

export const rtc = {
    // For the local client
    client: null,
    // For the local audio and video tracks
    localAudioTrack: null,
    localVideoTrack: null,
  };
  
  export const options = {
    // Pass your app ID here
    appId: process.env.APPID,
    // Pass a token if your project enables the App Certificate
    token: process.env.TOKEN,
  };

