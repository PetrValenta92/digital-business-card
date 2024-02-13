import profile from '../images/profile.jpg';
import mail_icon from '../images/mail_icon.svg';
import linkedin_icon from '../images/linkedin_icon.svg';

export default function Info() {
    return (
        <div className='info'> 
            <div className='info__profile-img'>
                <img  src= { profile } alt="Petr's profile picture" />
            </div> 
            <div className='info__bio'>
                <h1>Petr Valenta</h1>
                <p>React Developer</p>
                <div className='bio__contacts'>
                    <a className='contacts__email' href="mailto:petr.valenta.92@gmail.com">
                        <img src= { mail_icon } alt="Email icon" />
                        <p>Email</p>
                    </a>
                    <a className='contacts__linkedIn' href="https://www.linkedin.com/in/valentapetr/" target='_blank'>
                        <img src= { linkedin_icon } alt="LinkedIn icon" />
                        <p>LinkedIn</p>
                    </a>
                </div>
            </div>
        </div>
    )
}