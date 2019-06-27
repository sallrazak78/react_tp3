import React, { Component } from 'react'

export default class Post extends Component {
    constructor(props){
        super(props)
        this.state={
            id:null
        }
    }
    componentDidMount(){
        let id = this.props.match.params.post_id
        this.setState({id})
        console.log(this.props,this.state)
    }
    render() {
        return (
            <div className="container">
                <h4>route params</h4>
            </div>
        )
    }
}