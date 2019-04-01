import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "antd/dist/antd.css";
import App from './App';
// import { HashRouter as Router} from "react-router-dom";
// import CustomLink from './containers/CustomLink';
// import AuthExample from './auth/AuthExample';
import Counter from './counter'
import TodoList from './todolist';
ReactDOM.render(
    <div>
        <h1>counter</h1>
        <Counter/>
        <h1>todolist</h1>
        <TodoList/>
    </div>,
    document.getElementById('root')
)



// ReactDOM.render(
//     <Router>
//         <App />
//     </Router>,
//     document.getElementById('root')
// )

