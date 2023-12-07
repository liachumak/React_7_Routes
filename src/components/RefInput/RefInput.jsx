import { useRef } from "react";
import { useParams } from "react-router-dom";

const RefInput = () => {
    const inputRef = useRef(null);

    const params = useParams();
    console.log(params);
  
    return (
      <div>
        <input ref={inputRef} type="text" placeholder="Type something..." />
       {/* <button onClick={focusInput}>Focus Input</button>*/}
      </div>
    );
  };

export default RefInput;