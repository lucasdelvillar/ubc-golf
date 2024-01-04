import React, { useState } from 'react';
import NavBar from '../components/navbar/navbar';
import Footer from '../components/footer/footer';
import golfer from '../assets/golfer.jpeg';
import tee from '../assets/glove-holding-tee-and-ball.__.png';
import golfball from "../assets/golf-and-cup.__.png";
import course from "../assets/course-map.png";
import friends from "../assets/friends-golf.jpeg"
import './home.css';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import vectorIcon from '../assets/icon.svg';





const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const galleryImages = [golfer, golfball, friends];

  const handleNavigation = (direction) => {
    if (direction === 'previous') {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1
      );
    } else {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  const nextImageIndex = (currentImageIndex + 1) % galleryImages.length;
  const previousImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;

  const [expandedFaq, setExpandedFaq] = useState(null);

  const toggleFaq = (faqIndex) => {
    setExpandedFaq(expandedFaq === faqIndex ? null : faqIndex);
  };

  const faqs = [
    { question: "How do I join?", answer: "You can join by..." },
    { question: "Do you offer private golf lessons?", answer: "Yes, we offer..." },
    { question: "Can I bring guests?", answer: "Guests are welcome when..." },

  ];

  return (
    <div>
      <NavBar />
      <header className='home-header'>
        <div className='hr-title'>UBC Golf<br />  Club </div>
        <div className='home-intro'> golf for all</div>
        <img className="home-image" src={course} alt="Placeholder" />
      </header>

      <div class="features-container">
        <div class="featureTitle whiteText">Features</div>
        <div class="features-content">
          {/* Feature Block 1 */}
          <FeatureBlock
            iconStyle={{ width: 36, height: 40, left: 6, top: 4 }}
            title="TUTORIALS"
            content="Connect with Like-minded Individuals and Expand Your Knowledge"
            actionText="Learn More"
            actionLink="tutorials"
          />

          {/* Feature Block 2 */}
          <FeatureBlock
            iconStyle={{ width: 36, height: 40, left: 6, top: 4 }}
            title="SOCIAL MEDIA"
            content="Follow Us for Updates, Inspiration, and Exclusive Content"
            actionText="Follow"
            actionLink="https://www.instagram.com/ubcgolfclub/"
          />

          {/* Feature Block 3 */}
          <FeatureBlock
            iconStyle={{ width: 36, height: 40, left: 6, top: 4 }}
            title="EVENTS"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            actionText="Learn More"
            actionLink="events"
          />

          {/* Feature Block 4 */}
          <FeatureBlock
            iconStyle={{ width: 36, height: 40, left: 6, top: 4 }}
            title="CHARITY INVOLVEMENT"
            content="Support Causes That Matter and Contribute to Positive Change"
            actionText="Explore"
          />
        </div>
      </div>

      {/* Gallery Section */}
      <section className='gallery-section'>
        <div className="gallery-header">
          <h2 className='gallery-title'>GALLERY</h2>

          <p className='gallery-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        <div className="gallery-content">
          <button onClick={() => handleNavigation('previous')} className="nav-arrow left-arrow">&lt;</button>
          <img src={galleryImages[previousImageIndex]} alt="Previous Gallery Item" className="gallery-image" />
          <img src={galleryImages[currentImageIndex]} alt="Current Gallery Item" className="gallery-image" />
          <img src={galleryImages[nextImageIndex]} alt="Next Gallery Item" className="gallery-image" />
          <button onClick={() => handleNavigation('next')} className="nav-arrow right-arrow">&gt;</button>
        </div>

      </section>


      {/* Statistics Section */}


      <section className="statistics-section">
        <div className="tee-container">
          <img className="placeholder-image" src={tee} alt="Placeholder" />
        </div>
        <div className="statistics-info">
          <div className="stat">
            <h3>events run</h3>
            <p>3</p>
          </div>
          <div className="stat">
            <h3>year founded</h3>
            <p>?</p>
          </div>
          <div className="stat">
            <h3>new attendees</h3>
            <p>90</p>
          </div>
          <div className="stat">
            <h3>execs</h3>
            <p>13</p>
          </div>
        </div>
      </section>


      {/* FAQs Section */}
      <div className="faqs-container">
        <div className="faq-header">
          <div className="faq-title">FAQs</div>
          <div className="faq-description">Find answers to common questions about the club, membership, and golf instruction.</div>
        </div>
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <div className="faq-item-content" onClick={() => toggleFaq(index)}>
              <div>{faq.question}</div>
              <FontAwesomeIcon
                icon={faAngleDown}
                style={{ color: "#ffffff", transform: expandedFaq === index ? 'rotate(180deg)' : 'none' }}
              />
            </div>
            {expandedFaq === index && (
              <div className="faq-answer">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
      );

      <Footer />
    </div>
  );
};

const FeatureBlock = ({ title, content, actionText, actionLink }) => (
  <div className={`info-container ${title.toLowerCase().replace(' ', '')}`}>
    <img src={vectorIcon} alt="Icon" className="icon" />
    <div className="info-text">
      <div className={`info-title ${title.toLowerCase().replace(' ', '')}Title whiteText`}>{title}</div>
      <div className={`info-content ${title.toLowerCase().replace(' ', '')}Content whiteText`}>{content}</div>
    </div>
    <div className="info-action">
      <a href={actionLink} className="info-action-text whiteText">{actionText}</a>
    </div>
  </div>
);
export default Home;
