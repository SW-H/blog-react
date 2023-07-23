import React, {Component} from 'react';
import ApiHandler from "../ApiHandler";
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import TableBody from "@material-ui/core/TableBody";
import Table from "@material-ui/core/Table";
import CreateIcon from "@material-ui/icons/Create";
import DeleteIcon from "@material-ui/icons/Delete";
import Button from "@material-ui/core/Button";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

class PreviewListComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            posts: [],
            message: null
        }
    }

    componentDidMount() {
        this.reloadPostList();
    }

    reloadPostList = () => {
        ApiHandler.fetchPosts()
            .then(res => {
                this.setState({
                    posts: res.data
                })
            })
            .catch(err => {
                console.log('[FAILED] method : reloadPostList()', err);
            })
    }

    render() {
        return (
            <CardGroup style={{margin:"130px"}}>
                <Card>
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content. This content is a little bit longer.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content. This content is a little bit longer.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content. This content is a little bit longer.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
            </CardGroup>
        );
    };
}

export default PreviewListComponent;
