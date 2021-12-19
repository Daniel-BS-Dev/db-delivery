import {ReactComponent as Instagram} from '../../assets/instagram.svg';
import {ReactComponent as GitHub} from '../../assets/github.svg';
import {ReactComponent as Linkedin} from '../../assets/linkedin.svg';
import './styles.css';

const Footer = () => (
<footer className='home-footer'>
    <div className="home-footer-container">
        <div className="home-footer-title">
            <address>Daniel Benedito da Silva</address>
        </div>
        <div className="home-footer-images">
            <a href='https://www.linkedin.com/in/daniel-benedito-b99546213' target="_blank"><Linkedin className='imgFooter'/></a>
            <a href='https://www.instagram.com/danielbenedito3' target="_blank"><Instagram className='imgFooter'/></a>
            <a href='https://github.com/Daniel-BS-Dev' target="_blank"><GitHub className='imgFooter'  /></a>
        </div>
    </div>
</footer>
);

export default Footer;