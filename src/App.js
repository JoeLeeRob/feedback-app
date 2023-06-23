import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import FeedbackData from './data/feedbackData'

function App() {
    const [feedback, setFeedback] = useState(FeedbackData)
    const deleteFeedbackItem = (id) => {
        if (window.confirm('Are you sure you want to delete?')) {
            setFeedback(feedback.filter((item) => item.id !== id))
        }   
    }

    const addFeeback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
    }
    
    return (
        <>
            <Header/>
            <div className='container'>
                <FeedbackForm handleAdd={addFeeback}/>
                <FeedbackStats feedback={feedback} />
                <FeedbackList feedback={feedback} handleDelete={ deleteFeedbackItem } />
            </div>
        </>
    )
    
}

export default App


