import Button from 'react-bootstrap/Button';
import Navbar from "../component/NavbarOffCanvas";
import Container from "react-bootstrap/Container";

function LoginOptionPage() {
    return (
        <div className="d-grid gap-2">
            <Navbar className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="/">Blog</Navbar.Brand>
                </Container>
            </Navbar>
            <br/>
            <Button variant="secondary mx-auto" size="sm" style={{width: 700}} href={"/auth/login"}>
                일반 로그인
            </Button>
            <Button variant="secondary mx-auto" size="sm" style={{width: 700}}>
                카카오 로그인
            </Button>
        </div>
    );
}

export default LoginOptionPage;
