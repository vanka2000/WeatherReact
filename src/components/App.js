import React from 'react';
import './App.css';
import Display from './display/display';
import Sercher from './sercher/sercher';

class App extends React.Component{

  
    render(){
        return <main>
            <Sercher parent={this}/>
            <Display parent={this}/>
        </main>
    }
}


export default App
