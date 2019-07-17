import React, { Component } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
export class Posts extends Component {
    constructor() {
        super()
        this.state = {
            posts: []
        }

        axios.get('https://jsonplaceholder.typicode.com/photos').then((res) => {
            const data = res.data.slice(0, 20);
            this.setState({ posts: data })
            // console.log(data)
        }).catch((error) => {
            console.log(error);

        })
    }


    render() {
        const post = this.state.posts.map(post => {
            return (
                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12 d-flex align-items-stretch" key={post.id}>
                    <div className="card my-2 p-1">
                        <img src={post.url} className='img-fluid' alt={post.title} />
                        <div className="card-body ">
                            <NavLink to={'/Posts/Post/' + post.id}> <h5 className="h5 text-center text-capitalize">{post.title} </h5> </NavLink>
                        </div>
                    </div>
                </div>
            )
        })
        return (
            <div>
                <div className="container-fluid">
                    <div className="row row-eq-height ">
                        {post}
                    </div>
                </div>
            </div>
        )
    }
}

export default Posts
