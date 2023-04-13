
import { SubHeading, MenuItem } from '../../components'
import { images, data } from '../../constants'
import './SpecialMenu.css'
export const SpecialMenu = () => {
  return (
    <div id='menu' className='app__specialMenu flex__center section__padding'>
      <div className='app__specialMenu-title'>
        <SubHeading title='Menu That Firs You Palatte' />
        <h1 className='headtext__cormorant'>
          Today's Special
        </h1>
      </div>
      <div className='app-specialMenu-menu'>
        <div className='app__specialMenu-menu_wine flex__center'>
          <p className='app__specialMenu-menu__heading'>wine & Beer</p>
          <div className='app__specilaMenu_menu_items'>{data.wines.map((elem, index) => (
            <MenuItem key={elem.title} title={elem.title} tags={elem.tags} price={elem.price} />
          ))}
          </div>
        </div>
        <div className='app__specialMenu_img'>
          <img src={images.menu} alt='img-menu' />
        </div>
        <div className='app__specialMenu-menu_cocktails flex__center'>
          <p className='app__specialMenu-menu__heading'>wine & Beer</p>
          <div className='app__specilaMenu_menu_items'>{data.cocktails.map((elem, index) => (
            <MenuItem key={elem.title} title={elem.title} tags={elem.tags} price={elem.price} />
          ))}
          </div>
        </div>
      </div>
    </div>
  )
}
