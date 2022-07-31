import { Card } from "react-bootstrap"
import "./style.css"

type ImageBoxProps = {
    id: number
    imgUrl: string
    title: string
    content: string
}

export function ImageBox({ id, imgUrl, title, content }:
    ImageBoxProps) {
        return  (
            <Card className="imageBox_wrapper" style={{borderRadius: '30px'}}>
                <Card.Img 
                variant="top" 
                src={imgUrl}
                height="450px"
                style={{ objectFit: "cover", borderRadius: '30px' }}
                />
                <Card.Body className="d-flex flex-column">
                    <Card.Title className="imageBox-textBox">
                        <div className="imageBox-title">{title}</div>
                        <div className="imageBox-content">{content}</div>
                    </Card.Title>
                </Card.Body>
            </Card>
        )
}