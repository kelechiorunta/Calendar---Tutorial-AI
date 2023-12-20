export const dataSearch = [
  {
    id: 0,
    title: "Introduction",
    content: `<h3>REACT: Introduction</h3><hr/>
  
  <ol><h4>What is React?</h4>
  
  <li><p>React(aka React.js or ReactJS) is an open-source front-end JavaScript library that is used for building composable user interfaces, especially for single-page applications.</p></li> <li><p>It is used for handling view layer for web and mobile apps based on components in a declarative approach.</p></li>
      
  <li><p>React was created by Jordan Walke, a software engineer working for Facebook.</p></li> <li><p>React was first deployed on Facebook's News Feed in 2011 and on Instagram in 2012.</p></li></ol>
  
                                                                                                                    `,
  },
  {
    id: 1,
    title: "History",
    content: `History:
      
  What is the history behind React evolution?
  
  The history of ReactJS started in 2010 with the creation of XHP. XHP is a PHP extension which improved the syntax of the language such that XML document fragments become valid PHP expressions and the primary purpose was used to create custom and reusable HTML elements.
      
  The main principle of this extension was to make front-end code easier to understand and to help avoid cross-site scripting attacks. The project was successful to prevent the malicious content submitted by the scrubbing user.
      
  But there was a different problem with XHP in which dynamic web applications require many roundtrips to the server, and XHP did not solve this problem. Also, the whole UI was re-rendered for small change in the application. Later, the initial prototype of React is created with the name FaxJ by Jordan inspired from XHP. Finally after sometime React has been introduced as a new library into JavaScript world.
      
  Note: JSX comes from the idea of XHP
                                                                                                                      `,
  },
  {
    id: 2,
    title: "What are the major features of React?",
    content: `What are the major features of React? 
  
  The major features of React are:
      
  1. Uses JSX syntax, a syntax extension of JS that allows developers to write HTML in their JS code.
  
  2. It uses Virtual DOM instead of Real DOM considering that Real DOM manipulations are expensive.
  
  3. Supports server-side rendering which is useful for Search Engine Optimizations(SEO).
  
  4. Follows Unidirectional or one-way data flow or data binding.
  
  5. Uses reusable/composable UI components to develop the view.
                                                                                                                   `,
  },
  {
    id: 3,
    title: "What is JSX?",
    content: `What is JSX?
  
  JSX stands for JavaScript XML and it is an XML-like syntax extension to ECMAScript. Basically it just provides the syntactic sugar for the React.createElement (type, props, ...children) function, giving us expressiveness of JavaScript along with HTML like template syntax.
      
  In the example below, the text inside <h1> tag is returned as JavaScript function to the render function.
      
  export default function App() {
    return (
      <h1 className="greeting">{"Hello, this is a JSX Code!"}</h1>
    );
  }
  
  If you don't use JSX syntax then the respective JavaScript code should be written as below,
      
  import { createElement } from 'react';
      
  export default function App() {
    return createElement(
      'h1',
      { className: 'greeting' },
      'Hello, this is a JSX Code!'
    );
  }
  
  See Class
  
  class App extends React.Component {
  render() {
    return (
      <h1 className="greeting">{"Hello, this is a JSX Code!"}</h1>
      );
    }
  }
  
  Note: JSX is stricter than HTML
                                                                                                                   `,
  },
  {
    id: 4,
    title: "What is the difference between Element and Component?",
    content: `What is the difference between Element and Component?
  
  An Element is a plain object describing what you want to appear on the screen in terms of the DOM nodes or other components. Elements can contain other Elements in their props. Creating a React element is cheap. Once an element is created, it cannot be mutated.
      
  The JavaScript representation(Without JSX) of React Element would be as follows:
      
  const element = React.createElement ("div", { id: "login-btn" }, "Login");
  and this element can be simiplified using JSX
      
  <div id="login-btn">Login</div>
  The above React.createElement() function returns an object as below:
      
  {
    type: 'div',
    props: {
    children: 'Login',
    id: 'login-btn'
  }
  }
  Finally, this element renders to the DOM using ReactDOM.render().
      
  Whereas a component can be declared in several different ways. It can be a class with a render() method or it can be defined as a function. In either case, it takes props as an input, and returns a JSX tree as the output:
      
  const Button = ({ handleLogin }) => (
  <div id={"login-btn"} onClick={handleLogin}>
    Login
  </div>
  );
  Then JSX gets transpiled to a React.createElement() function tree:
      
  const Button = ({ handleLogin }) =>
  React.createElement(
    "div",
    { id: "login-btn", onClick: handleLogin },
    "Login"
  );
                                                                                                                   `,
  },
  {
    id: 5,
    title: "How to create components in React?",
    content: `How to create components in React?
  
  Components are the building blocks of creating User Interfaces(UI) in React. There are two possible ways to create a component.
      
  Function Components: This is the simplest way to create a component. Those are pure JavaScript functions that accept props object as the first parameter and return React elements to render the output:
      
  function Greeting({ message }) {
    return <h1>{Hello, {message}}</h1>;
  }
  
  Class Components: You can also use ES6 class to define a component. The above function component can be written as a class component:
      
  class Greeting extends React.Component {
    render() {
      return <h1>{Hello, {this.props.message}}</h1>;
    }
  }
      
                                                                                                                   `,
  },
];
