
import PropType from 'prop-types'

function Card({children, reverse}) {
    return (
        <div className={`card ${reverse && 'reverse'}`}>
            {children}
        </div>
    )
}

Card.defaultProps = {
    reverse: false
}

Card.propTypes = {
    children: PropType.node.isRequired,
    reverse: PropType.bool
}

export default Card