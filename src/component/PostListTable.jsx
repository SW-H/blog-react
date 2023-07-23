import React, { Component } from 'react';
import ApiHandler from "../ApiHandler";

import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import CreateIcon from '@material-ui/icons/Create'
import DeleteIcon from '@material-ui/icons/Delete'
import CardGroup from "react-bootstrap/CardGroup";
import Card from "react-bootstrap/Card";
import {redirect} from "react-router-dom";

class PostListComponent extends Component{

    constructor(props){
        super(props);

        this.state = {
            posts: [],
            message: null
        }
    }

    componentDidMount(){
        this.reloadPostList();
    }

    reloadPostList = () => {
        ApiHandler.fetchPosts()
            .then( res => {
                this.setState({
                    posts: res.data
                })
            })
            .catch(err => {
                console.log('[FAILED] method : reloadPostList()', err);
            })
    }

    render(){
        return(
            <CardGroup>
                {this.state.posts.map( post =>
                    <Card key={post.id}>
                        <Card.Body>
                            <Card.Title>{post.title.substring(0,20)}...</Card.Title>
                            <Card.Text>{post.content.substring(0,100)}...</Card.Text>
                            <a href={`/posts/${post.id}`}>자세히보기</a>
                        </Card.Body>
                        <Card.Footer>
                            {post.updatedAt.split("T")[0]}
                        </Card.Footer>
                    </Card>
                )}
            </CardGroup>
        );

    }
}

export default PostListComponent;
