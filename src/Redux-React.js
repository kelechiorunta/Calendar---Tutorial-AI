//import React, { Component } from "react";
// import { connect } from "react-redux";

// const LOGIN = "LOGIN";

// const addloginuser = () => {
//   return { type: "LOGIN", message };
// };

// const userReducer = (state = 0, action) => {
//   switch (action.type) {
//     case LOGIN: {
//       return state + 1, (message = "User added"), console.log(message);
//     }
//     default: {
//       return state;
//     }
//   }
// };

// store = Redux.createStore(userReducer);

// store.dispatch(addloginuser());

// const Provider = ReactRedux.Provider;

// const mapStateToProps = (state) => {
//   return { messages: state };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     submitNewMessage: (message) => {
//       dispatch(addloginuser());
//     },
//   };
// };

// const Container = connect(mapStateToProps, mapDispatchToProps)(Sample);

// class Sample extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       message: [],
//       input: "",
//     };
//     this.handleChange = this.handleChange.bind(this);
//     this.handleMessage = this.handleMessage.bind(this);
//   }

//   handleChange(event) {
//     this.setState({
//       input: event.target.value,
//     });
//   }

//   handleMessage() {
//     this.props.submitNewMessage();
//   }

//   render() {
//     return (
//       <div>
//         <input type="text" value={this.state.input} onChange={handleChange} />
//         <button onClick={handleMessage}>Message</button>
//         <Provider store={store}>
//           <Container />
//         </Provider>
//       </div>
//     );
//   }
// }

// export default React.memo(Sample);
