
// import "../pages/Home.css";
import { Link } from "react-router-dom"
import './style.css';
export function Footer() {
    return (
        <>
         <div className="footer">
            <h1 className="footer-contact">Contact Us</h1>
            <div className="footer-content">
                대표자: 이상혁 | 사업자 등록번호: 000-00-11111
            </div>
            <div className="footer-content">
                주소: 서울특별시 oo구 oo길 8 2층 | 이메일: abcde@gmail.com | 전화 1111-2222
            </div>
            
         </div>
         <div className="footer-right">
         ⓒ2022 Marketing Club Web Page. All Rights Reserved.
         </div>
         </>
    )
}