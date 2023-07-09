import {motion, AnimatePresence} from 'framer-motion'
import PropType from 'prop-types'
import FeedbackItem from './FeedbackItem'


function FeedbackList({ feedback, handleDelete }) {
    if (!feedback || feedback.length === 0) {
        return <p>No Feedback Yet</p>
    }

    return (
        <div className="feedback-list">
            <AnimatePresence>
                {feedback.map((item) => (
                    <motion.div
                        key={item.key}
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity:0}}
                    >
                        <FeedbackItem key={item.id} item={item} handleDelete={ handleDelete } />
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
        
    )
}

FeedbackList.propTypes = {
    feedback: PropType.arrayOf(
        PropType.shape(
            {
                id: PropType.any.isRequired,
                rating: PropType.number.isRequired,
                text: PropType.string.isRequired
            }
        )
    )
}

export default FeedbackList