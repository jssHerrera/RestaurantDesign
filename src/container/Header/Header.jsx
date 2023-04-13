import { SubHeading } from '../../components'
import { images } from '../../constants'
import './Header.css'
export const Header = () => {
  return (
    <div id='home' className='app__header app__wrapper section__padding'>
      <div className='app__wrapper_info'>
        <SubHeading title='chase the new flavour' />
        <h1 className='app__header-h1'> The key to Fine Dining</h1>
        <p className='p__opensans' style={{ margin: '2rem 0' }}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta molestias, reprehenderit repellendus repellat vel aspernatur in earum eaque fugiat, ipsum rerum eos. Nobis cum sapiente est, voluptas illo rem nulla.
        </p>
        <button type='button' className='custom__button'>Explore Menu</button>
      </div>

      <div className='app__wrapper_img'>
        <img src={images.welcome} alt='header img' />
      </div>
    </div>
  )
}
