
import Link from "next/link";
import Style from '@styles/Navigation.module.scss';
import backgroundImage from '@assets/images/okc.jpg';



const Navigation = () => {

    return (
        <nav
            className={Style.navigation}
            style={{ backgroundImage: `url(${backgroundImage.src})` }}>
            dasds
        </nav>
    )
}

export default Navigation;