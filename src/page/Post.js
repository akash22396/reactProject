import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'

export class Post extends Component {
    constructor(props) {
        const id = props.match.params.id;

        // console.log(props.match.params.id)
        super()
        this.state = {
            post: []
        }
        axios.get('https://jsonplaceholder.typicode.com/photos/' +id).then((res) => {
            const data = res.data;
            this.setState({ post: data })
            // console.log(data)
        }).catch((error) => {
            console.log(error);

        })
    }
    componentDidMount() {
        
    }
    render() {

        const { url, title } = this.state.post;
        // console.log(post.title)
        return (
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                            <img src={url} alt={title} className='img-fluid py-2' />
                        </div>
                        <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12">
                            <h3 className="h3">{title}</h3>

                            <NavLink className='btn btn-danger' to='/Posts' >Go Back</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Post
