import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

//learning lifecycle methods and the orders of execution

class LifecycleA extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Dionis'
        }
        console.log('Lifecycle A constructor')
    }
    
    static getDerivedStateFromProps(props, state){
        console.log('LifeCycle A getDerivedStateFromProps')
        return null
    }

    componentDidMount(){
        console.log('Lifecycle A component DidMount')
    }

    shouldComponentUpdate(){
        console.log('LifeCycle A shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('Lifecycle A getSnapshotBeforeUpdate')
        return null;
    }

    componentDidUpdate(){
        console.log('Lifecycle A componentDidupdate')
    }

    changeState = () => {
        this.setState({
            name: 'Codevolution'
        })
    }

    render() {
        console.log('Lifecycle A Render')
        return (
            <div>
                <div>LifeCycle A</div>
                <button onClick={this.changeState}>Change State</button>
                <LifecycleB />
            </div>
        )
    }
}

export default LifecycleA
