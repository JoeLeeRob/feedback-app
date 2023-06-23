import {useState} from 'react'
import Card from './shared/Card'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'

function FeedbackForm ({handleAdd}) {

    const [feedback, setFeedback] = useState("")
    const [message, setMessage] = useState("")
    const [rating, setRating] = useState(10)
    const [disabled, setDisabled] = useState(true)

    const getFeedback = (event) => {
        const textLength = event.target.value.trim().length
        if (textLength === 0) {
            setDisabled(true)
            setMessage(null)
        } else if (textLength !== 0 && textLength <= 10) {
            setDisabled(true)
            setMessage("Review must be more then 10 characters")
        } else {
            setDisabled(false)
            setMessage(null)
        }
        setFeedback(event.target.value)
    } 

    const handleSubmit = (e) => {
        e.preventDefault()
        if (feedback.trim().length > 10) {
            const newFeedback = {
                text: feedback,
                rating
            }
            handleAdd(newFeedback);
            setFeedback("")
        }
    }

    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>How would you rate my personality?</h2>
                <RatingSelect select={(rating) => setRating(rating)}/>
                <div className="input-group">
                    <input
                        type="text"
                        placeholder="Write a review"
                        onChange={getFeedback}
                        value={feedback}
                    />
                    <Button type="submit" isDisabled={disabled}>Send</Button>
                </div>
                {message && <div className='message'>{message}</div>}
            </form>
        </Card>
    )
    
}

export default FeedbackForm