import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import ApiHandler from "../ApiHandler";
import NavbarComponent from "../component/Navbar";
import Card from 'react-bootstrap/Card';

export default function DetailPage() {
    const {id} = useParams();
    const [post, setPost] = useState(null);


    useEffect(() => {
        showDetail(id);
    }, [id]);

    const showDetail = (postId) => {
        ApiHandler.fetchPost(postId)
            .then((res) => {
                setPost(res.data);
            })
            .catch((err) => {
                console.log("[FAILED] method: showDetail()", err);
            });

    };
    return (
        <div className={"detailPage"}>
            <NavbarComponent/>
            {post ?
                <div className={"postContent"} key={post.id}>
                    <Card>
                        <Card.Header>{post.updatedAt.split("T")[0] + " "
                            + post.updatedAt.split("T")[1].substring(0, 5)} </Card.Header>
                        <Card.Body style={{margin: "100px"}}>
                            <blockquote className="blockquote mb-0">
                                <p>
                                    <h1>{post.title}</h1>
                                </p>
                                <p>
                                    {post.content}
                                </p>
                                <footer className="blockquote-footer">
                                    <cite title="Source Title"> </cite>
                                </footer>
                            </blockquote>
                            <caption> Hits {post.hits}</caption>
                        </Card.Body>
                    </Card>
                </div>
                : (
                    <p>Loading...</p>
                )}
        </div>
    );

}
