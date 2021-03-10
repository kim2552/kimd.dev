import ContactForm from './ContactForm'
import {useEffect} from 'react';

const Work = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="container">
            <div className="contact-container">
                <div className="description-wrapper">
                    <p>I work on interesting projects in my freetime. I am  open to working on website applications, mobile applications, and any other software related projects. Feel free to reach out if you need help on a project!</p>
                </div>
                <div className="title-wrapper">
                    <h1>Contact Me</h1>
                </div>
                <ContactForm></ContactForm>
            </div>
        </div>
    )
}

export default Work
