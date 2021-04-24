import {useEffect} from 'react';

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="container">
            <div className="home-container">
                <div className="description-wrapper">
                    <h1>Hi, my name is David</h1>
                    <h3>Full-stack Software Developer</h3>
                    <h3>Mechatronics B. Eng</h3>
                </div>
            </div>
        </div>
    )
}

export default Home
