import Link from "next/link";
import Style from '@styles/Footer.module.scss';
import backgroundImage from '@assets/images/okc.jpg';
import Image from "next/image";
import logo from '@assets/images/logo.png';

const Footer = () => {

    return (
        <footer className={Style.footer}>
            <p>How do I contact you?!</p>
            <p>Esitmates and second opinions are always free!</p>
            <div className={`${Style.links} d-flex justify-content-around`}>
                <div>
                    <p>Our Email:</p>
                    <a href='mailto:office@okclimates.com'>office@okclimates.com</a>
                </div>
                <div>
                    <p>Our Phone:</p>
                    <a href='tel:4055039833'>(405) 503-9833</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;