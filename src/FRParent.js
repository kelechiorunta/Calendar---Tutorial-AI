import React, { useRef } from "react";
import FRInput from "./FRInput";
import ReactDOM from "react-dom";

const FRParent = () => {
  var inputRef = useRef(null);

  const handleClick = () => {
    // inputRef.current.value = "Hello";
    inputRef.current.changecolor();
  };
  return ReactDOM.createPortal(
    <div>
      <FRInput ref={inputRef} />
      <buttton className="focus">Focus</buttton>
    </div>,
    document.getElementById("portal-root")
  );
};

export default FRParent;

//THE CLASS COMPONENT VERSION OF THE FUNCTIONAL PARENT OF THE REF EXPLANATION
// class FRParent extends React.Component {
//   constructor(props) {
//     super(props);
//     this.inputRef = React.createRef();
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick = () => {
//     this.inputRef.current.value += 1;
//   };
//   render() {
//     return (
//       <div>
//         <FRInput ref={this.inputRef} />
//         <buttton onClick={this.handleClick}>Focus</buttton>
//       </div>
//     );
//   }
// }

// export default FRParent;
