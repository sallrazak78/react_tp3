import React, { Component } from 'react'
import axios from 'axios'
export default class Home extends Component {
   
        state={
            posts:[]
        }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            this.setState({posts:res.data.slice(0,10)})
        })
    }
    render(){
        const postList=this.state.posts.length ? (
            this.state.posts.map(post => {
                return(
                    <div className="post card" key={post.id}>
                        <div className="card-content">
                            <div className="card-title">{post.title}</div>
                            <p>{post.body}</p>
                        </div>
                    </div>
                )
                })

        ):(
            <div className="center">
                No post
            </div>
        )
            return (
        <div className="container">
            <h1 className="center">Home</h1>
            {postList}
        </div>
        )
    }
}
