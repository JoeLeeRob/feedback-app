import { useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import PropType from 'prop-types'
import Card from './shared/Card'

function FeedbackItem({ item, handleDelete }) {
    const [rating, setRating] = useState(10);
    const [text, setText] = useState('This is an example of a feedback item');

    return (
        <Card className="card">
            <div className="num-display">{item.rating}</div>
            <div onClick={() => handleDelete(item.id)} className="close">
                <FaTimes color='purple' />
            </div>
            <div className="text-display">{item.text}</div>
        </Card>
    )
}

FeedbackItem.propTypes = {
    item: PropType.object
}

export default FeedbackItem