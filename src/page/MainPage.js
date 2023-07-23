import PostListComponent from "../component/PostListTable";
import {Carousel} from "react-bootstrap";
import sampleImg1 from "../asset/sample1.png"
import sampleImg2 from "../asset/sample2.png"
import sampleImg3 from "../asset/sample3.png"
import NavbarComponent from "../component/Navbar";

function MainPage() {
    return (
        <div>
            <NavbarComponent/>
            <Carousel className="main-carousel">
                <Carousel.Item>
                    <img
                        className="d-block mx-auto bg-black"
                        src={sampleImg1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block mx-auto bg-black"
                        src={sampleImg2}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block mx-auto bg-black"
                        src={sampleImg3}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
            <br/>
            <PostListComponent/>
        </div>
    );
}

export default MainPage;
