import PropType from 'prop-types'

function FeedbackStats ({feedback}) {
    const average = (
        feedback.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.rating}, 0) / feedback.length
        ).toFixed(1).replace(/[.,]0$/, '')


    return (
        <div className="feedback-stats">
            <h4>{feedback.length} Reviews</h4>
            <h4>Average Rating: {average}</h4>
        </div>
    )
}

FeedbackStats.propTypes = {
    feedback: PropType.array.isRequired
}

export default FeedbackStats