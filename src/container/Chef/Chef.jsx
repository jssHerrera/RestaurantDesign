import { SubHeading } from '../../components'
import { images } from '../../constants'
import './Chef.css'
export const Chef = () => {
  return (
    <div className='app__bg app__wrapper section__padding'>
      <div className='app__wrapper_img app__wrapper_img-reverse'>
        <img src={images.chef} alt='chef_img' />
      </div>
      <div className='app__wrapper_info'>
        <SubHeading title='chef´s word' />
        <h1 className='headtext__cormorant'> What we Believe in</h1>
        <div className='app__chef-content'>
          <div className='app__chef-content-quote'>
            <img src={images.quote} alt='quote_img' />
            <p className='p__opensans'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <p className='p__opensans'> Quia a, quis, illo rem quae facilis quidem, consequuntur quod minima expedita voluptate beatae molestias. Inventore rem culpa quam quis hic explicabo?</p>
        </div>
        <div className='app__chef-sign'>
          <p>Kevin Luo</p>
          <p className='p__opensans'>Chef & founder</p>
          <img src={images.sign} alt='sign_img' />
        </div>
      </div>
    </div>
  )
}
