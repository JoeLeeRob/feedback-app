import { isDisabled } from '@testing-library/user-event/dist/utils'
import PropType from 'prop-types'

function Button({children, type, version, isDisabled}) {
    return (
        <button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
            {children}
        </button>
    )
}

Button.defaultProps = {
    type: 'button',
    disabled: false,
    version: 'primary'
}

Button.propTypes = {
    children: PropType.node.isRequired,
    type: PropType.string,
    version: PropType.string,
    isDisabled: PropType.bool
}

export default Button