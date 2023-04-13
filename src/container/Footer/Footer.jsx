import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi'
import { FooterOverlay, Newsletter } from '../../components'
import { images } from '../../constants'
import './Footer.css'
export const Footer = () => {
  return (
    <div className='app__footer section__padding'>
      <FooterOverlay />
      <Newsletter />
      <div className='app__footer-links'>
        <div className='app__footer-links_contact'>
          <h1 className='app__footer-headtext'> Contact Us</h1>
          <p className='p__opensans'>Lorem ipsum, dolor sit amet consectetur adipisicing elit</p>
          <p className='p__opensans'>+1 234-123-2345</p>
          <p className='p__opensans'>+1 213-555-2340</p>
        </div>
        <div className='app__footer-links_logo'>
          <img src={images.gericht} alt='gericht_img' />
          <p className='p__opensans'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          <img src={images.spoon} alt='spoon_img' className='spoon_img' style={{ marginTop: 15 }} />
          <div className='app__footer-links_icons'>
            <FiFacebook />
            <FiTwitter />
            <FiInstagram />
          </div>
        </div>
        <div className='app__footer-links_work'>
          <h1 className='app__footer-headtext'> Working Hours</h1>
          <p className='p__opensans'>Monday-Friday</p>
          <p className='p__opensans'>08:00am - 12:00am</p>
          <p className='p__opensans'>Saturday-Sunday</p>
          <p className='p__opensans'>07:00am - 11:00pm</p>
        </div>
      </div>
      <div className='footer__copyright'>
        <p className='p__opensans'>All Rigth reserved</p>
      </div>
    </div>
  )
}
