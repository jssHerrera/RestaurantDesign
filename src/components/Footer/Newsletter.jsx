import { SubHeading } from '../SubHeading/SubHeading'
import './Newsletter.css'

export const Newsletter = () => {
  return (
    <div className='app__newletter'>
      <div className='app__newsletter-heading'>
        <SubHeading title='Newsletter' />
        <h1 className='headtext__cormorant'>Subscribe to Our Newsletter</h1>
        <p className='p__opensans'>
          And never miss latest updates
        </p>
      </div>
      <div className='app__newsletter-input flex__center'>
        <input type='email' placeholder='Enter your e-mmail address' />
        <button type='button' className='custom__button'> Suscribe</button>
      </div>
    </div>
  )
}
