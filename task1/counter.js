import React, { Component } from 'react';
import store from './store';
// store 连接action和reducer

export default class Counter extends Component {
    constructor() {
        super();
        this.state = {
            num: store.getState().counter
        };
        store.subscribe(() => {
            this.setState({
                num: store.getState().counter
            });
        });
    }
    handleAdd = () => {
        //传入action
       let action = {type: 'add', value: 1};
       store.dispatch(action);
        
    }
    handleDe = () => {
        let action = {type: 'de'};
        store.dispatch(action);
        
    }
    handleIfOdd = () => {
        if(store.getState().counter%2 !==0) {
            let action = {type: 'add', value: 1};
            store.dispatch(action);
            
        }
        
    }
    handleAsync = () => {
        let action = {type: 'add', value: 1};
        setInterval(() => {
            store.dispatch(action);
        }, 1000);
        
    }
    render() {
        return (
            <div>
                <p>
                    Clicked: <span>{this.state.num}</span> times
                    <br />
                    <button onClick={this.handleAdd}>+</button>
                    <br />
                    <button onClick={this.handleDe}>-</button>
                    <br />
                    <button onClick={this.handleIfOdd}>Increment if odd</button>
                    <br />
                    <button onClick={this.handleAsync}>Increment async</button>
                </p>
            </div>
        );
    }
}