import {useState} from 'react'
import Card from './shared/Card'

function FeedbackForm () {

    const [feedback, setFeedback] = useState("")

    const getFeedback = (event) => {
        setFeedback(event.target.value)
        console.log(feedback);
    } 

    return (
        <Card>
            <form>
                <h2>How would you rate my personality?</h2>
                <div className="input-group">
                    <input
                        type="text"
                        placeholder="Write a review"
                        onChange={getFeedback}
                        value={feedback}
                    />
                    <button type="submit">Send</button>
                </div>
            </form>
        </Card>
    )
    
}

export default FeedbackForm