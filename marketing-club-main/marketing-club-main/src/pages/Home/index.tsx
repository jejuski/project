import './style.css'
import { Col, Row } from "react-bootstrap"
import { ImageBox } from "../../components/ImageBox"
import { LandingBox } from "../../components/LandingBox"
import { Footer } from "../../components/Footer"
import imageBoxData from "../../data/home_imageBox.json"
import landingBoxData from "../../data/home_landingBox.json"

export function Home() {
    return (
        <>
        <div className="home_bg">
        <div>
            <video 
                className="videobcg" 
                muted 
                autoPlay 
                loop 
                playsInline>
                <source src="https://player.vimeo.com/progressive_redirect/playback/693798366/rendition/540p?loc=external&oauth2_token_id=1027659655&signature=951d834898904d296eaf3dceda411c1db1c6905e147ce2edb9e162a7c7f3342a"
                        type="video/mp4">
                </source>
            </video>
            <div className="px-3 home_wrapper">
                <h1 className="home_mainTitle">온라인 마케팅 </h1>
                <h1 className="home_mainTitle cover-heading">'A'부터 'Z'까지</h1>
                <div className="home_subWrapper">
                    <p className="lead top home_subTitle">땀 흘리며 발로 뛰고있는 현업 마케터들의 노하우를 배워보세요 </p>
                    <p className="lead home_subTitle">마케팅의 주체는 대행사가 아닌 '대표님'입니다 </p>
                </div>

                <div className="home_btnWrapper">
                <button className="home_button">수업 둘러보기</button>
                </div>
            </div>



            <div className="home_imageBoxWrapper">
                <h1 className="home-imgBox-h1">당신도 완주할 수 있습니다.</h1>
                <h1 className="home-imgBox-h1-2">Marketing Club과 함께하면, 가능합니다.</h1>
                <Row className="home_imgWrapper" xs={1} md={1} lg={3}>
                {imageBoxData.map(item => (
                    <Col key={item.id}>
                        <ImageBox {...item} />
                    </Col>
                ))}
                </Row>
            </div>



            <div className="home-landingBoxWrapper">
                {landingBoxData.map(item => (
                    <LandingBox {...item} />
                ))}
            </div> 

            
        
            {/* <h1 className="test">test</h1> */}

            {/* <footer className="home-footer mt-auto text-white-50"> */}
            <Footer />
            {/* </footer> */}
        </div>

        
        </div>
        </>
    )
}