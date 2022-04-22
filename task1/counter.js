import React, { Component } from 'react';
import store from './store';
import { setTimeout } from 'timers';
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
        //let action = {type: 'add', value: 1};
       store.dispatch({type: 'add', value: 2});
        
    }
    handleDe = () => {
        store.dispatch({type: 'de',value:1});
    }
    handleIfOdd = () => {
        if(store.getState().counter%2 !==0) {
            store.dispatch({type: 'add', value: 1});
            
        }
        
    }
    handleAsync = () => {
        setTimeout(() => {
            store.dispatch({type: 'add', value: 1});
        }, 0);
        
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