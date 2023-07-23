import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Navbar from "./NavbarOffCanvas";
import Container from "react-bootstrap/Container";

function Login() {
    return (
        <div className="loginPage" style={{textAlign: "center"}}>
            <Navbar className="bg-body-tertiary mb-3">
                <Container fluid>
                    <Navbar.Brand href="/">Blog</Navbar.Brand>
                </Container>
            </Navbar>

            <div className="title" style={{textAlign: "center"}} >
                <h1>
                    blog
                </h1>
            </div>
                <Form>
                    <Form.Group className="mb-3 mx-auto" style={{width: 400}} controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="email" required={true}/>
                    </Form.Group>
                    <Form.Group className="mb-3 mx-auto" style={{width: 400}} controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Password" required={true}/>
                    </Form.Group>
                    <Form.Group className="mb-3 mx-auto" style={{width: 400}} controlId="formBasicCheckbox">
                        {/*<Form.Check type="checkbox" label="로그인 상태 유지" />*/}
                        <Button variant="secondary" type="submit">
                            로그인
                        </Button>
                    </Form.Group>
                </Form>
        </div>
    );
}

export default Login;
