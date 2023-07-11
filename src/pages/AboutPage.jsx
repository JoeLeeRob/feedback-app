import Card from '../components/shared/Card'
import { Link } from 'react-router-dom'

function AboutPage() {
    return (
        <Card>
            <div className="about">
                <h1>About Page</h1>
                <p>This is a pet project React app that handles user feedback.</p>
                <Link to="/">Home</Link>
            </div>
        </Card>
    )
}

export default AboutPage