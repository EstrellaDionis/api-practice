import React, { Component } from 'react'

//learning lifecycle methods and the orders of execution

class LifecycleB extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Dionis'
        }
        console.log('Lifecycle B constructor')
    }
    
    static getDerivedStateFromProps(props, state){
        console.log('LifeCycle B getDerivedStateFromProps')
        return null
    }

    componentDidMount(){
        console.log('Lifecycle B component DidMount')
    }

    shouldComponentUpdate(){
        console.log('LifeCycle B shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('Lifecycle B getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate(){
        console.log('Lifecycle B componentDidUpdate')
    }


    render() {
        console.log('Lifecycle B Render')
        return (
            <div>
                LifeCycle B
            </div>
        )
    }
}

export default LifecycleB