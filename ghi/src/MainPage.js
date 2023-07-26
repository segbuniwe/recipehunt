import { Link } from "react-router-dom";
import videoSource from "./food.mp4";
function MainPage() {
    return (
        <>
              <video
        style={{
          position: "absolute",
          width: "100%",
          left: "50%",
          top: "50%",
          height: "100%",
          objectFit: "cover",
          transform: "translate(-50%, -50%)",
          zIndex: "-1",
          playbackRate: "0.5",
        }}
        autoPlay
        loop
        muted
        src={videoSource}
        type="video/mp4"
      />


        </>
    );
}

export default MainPage;
