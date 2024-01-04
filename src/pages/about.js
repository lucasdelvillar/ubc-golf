import NavBar from '../components/navbar/navbar';
import Footer from '../components/footer/footer';
import './about.css';
import logo from '../assets/golf-cart.__.png';

const About = () => {

    const teamMembers = [
        {
            name: 'John Doe',
            role: 'President',
            description: 'Description Here.',
            image: require('../assets/dummy_img.png'),
        },
        {
            name: 'John Doe',
            role: 'President',
            description: 'Description Here.',
            image: require('../assets/dummy_img.png'),
        },
        {
            name: 'John Doe',
            role: 'President',
            description: 'Description Here.',
            image: require('../assets/dummy_img.png'),
        },
        {
            name: 'Jane Smith',
            role: 'Founder',
            description: 'Description Here.',
            image: require('../assets/dummy_img.png'),
        },
        {
            name: 'Jane Smith',
            role: 'Founder',
            description: 'Description Here.',
            image: require('../assets/dummy_img.png'),
        },
        {
            name: 'Jane Smith',
            role: 'Founder',
            description: 'Description Here.',
            image: require('../assets/dummy_img.png'),
        },
        {
            name: 'Jane Smith',
            role: 'Founder',
            description: 'Description Here.',
            image: require('../assets/dummy_img.png'),
        },
    ];

    return (
        <div>
            <NavBar />
            <header className='tutorial-header'>
                <div className='header-left'>
                    <img className="tutorial-logo" src={logo} alt="Tutorial Logo"></img>
                </div>
                <div className='header-right'>
                    <h1 className='hr-title'>ABOUT</h1>
                    <p className='hr-intro'>
                        Welcome to our comprehensive golfing tutorials hub, where passion meets precision! Whether you're a novice looking to take your first swing or a seasoned golfer aiming to refine your technique, our curated collection of tutorials offers a wealth of knowledge to elevate your game. Dive into expert insights on perfecting your swing, mastering various shots, understanding course strategy, and fine-tuning your overall golfing prowess. Our user-friendly tutorials cater to golfers of all levels, providing step-by-step guidance, pro tips, and interactive resources to enhance every aspect of your golfing journey. Discover the keys to unlocking your full potential on the greens and transform your golfing experience into a fulfilling and enjoyable pursuit. Let the learning begin, and may your golf game reach new heights with our dedicated tutorials!
                    </p>
                </div>
            </header>

            <div className="outerContainer">
                <div>
                    <div>
                        <div className="title">Meet the Team</div>
                        <div className="subtitle">Meet the talented individuals behind our success.</div>
                    </div>
                </div>
                {/* Container for Team Members */}
                <div className="teamMembersContainer">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="teamMember">
                            <img src={member.image} alt={member.name} />

                            <div className="memberInfo">
                                <div className="personName">{member.name}</div>
                                <div className="personRole">{member.role}</div>
                                <div className="personDescription">{member.description}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default About;