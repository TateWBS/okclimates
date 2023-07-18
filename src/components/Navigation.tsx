
import Link from "next/link";
import Style from '@styles/Navigation.module.scss';
import backgroundImage from '@assets/images/okc.jpg';
import Image from "next/image";
import logo from '@assets/images/logo.png';

const Navigation = () => {

    return (
        <nav
            className={Style.navigation}
            style={{ backgroundImage: `url(${backgroundImage.src})` }}>
            <div className='d-flex justify-content-around'>
                <ul>
                    <Link href='#specials'><li>Featured Promotions</li></Link>
                    <Link href='#core'><li>Our core values</li></Link>
                    <Link href='#offers'><li>Our Offers</li></Link>
                    <Link href='#contact'><li>Lets Chat</li></Link>


                </ul>
                <Image src={logo} alt='' />
                <div className='d-flex align-items-center'>
                    <a className={Style.button}>Give us a call</a>
                </div>
            </div>
        </nav>
    )
}

export default Navigation;