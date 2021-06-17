import PropTypes from 'prop-types'
import Button from './Button.js'
const Header = props => {
  return (
    <header className='header'>
      <h1>{props.title}</h1>
      <Button onClick={props.onAdd} color='steelblue' text='Add' />
    </header>
  )
}
Header.defaultProps = {
  title: 'Options Chain'
}
Header.propTypes = {
  title: PropTypes.string.isRequired
}
export default Header
