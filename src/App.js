import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import AboutPage from './pages/AboutPage'
import FeedbackData from './data/feedbackData'
import AboutIconLink from './components/AboutIconLink'

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
        <Router>
            <Header/>
            <div className='container'>
                <Routes>
                    <Route exact path='/' element={
                            <>
                                <FeedbackForm handleAdd={addFeeback} />
                                <FeedbackStats feedback={feedback} />
                                <FeedbackList feedback={feedback} handleDelete={ deleteFeedbackItem } />
                                <AboutIconLink />
                            </>
                        }
                    ></Route>
                    <Route path='/about' element={<AboutPage />}></Route>
                </Routes>
            </div>
        </Router>
    )
    
}

export default App


