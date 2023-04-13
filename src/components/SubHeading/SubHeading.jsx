import { images } from '../../constants'
export const SubHeading = ({ title }) => {
  return (
    <div style={{ marginBottom: '1rem' }}>
      <p className='p__cormorant'>
        {title}
      </p>
      <img src={images.spoon} alt='spoon__img' />
    </div>
  )
}
