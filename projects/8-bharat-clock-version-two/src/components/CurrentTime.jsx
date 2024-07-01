import { useEffect, useState } from "react";

let CurrentTime = () => {
  const [time, setTime] = useState(new Date());
  // console.log("current time painted");

  useEffect(() => {
    // console.log("interval has been setup");
    const intervalId = setInterval(() => {
      setTime(new Date());
    },1000);

    return () =>{
      clearInterval(intervalId);
      // console.log("cancelled the interval");
    }
  });

  return (
    <h1 className="lead">
      This is the current time : {time.toLocaleDateString()} - {""}
      {time.toLocaleTimeString()}
    </h1>
  );
};
export default CurrentTime;
