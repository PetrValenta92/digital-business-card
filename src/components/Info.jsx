import profile from '../images/profile.jpg';
import mailIcon from '../images/mail.svg';
import linkedinIcon from '../images/linkedin.svg';

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
                        <img src= { mailIcon } alt="Email icon" />
                        <p>Email</p>
                    </a>
                    <a className='contacts__linkedIn' href="https://www.linkedin.com/in/valentapetr/" target='_blank'>
                        <img src= { linkedinIcon } alt="LinkedIn icon" />
                        <p>LinkedIn</p>
                    </a>
                </div>
            </div>
        </div>
    )
}