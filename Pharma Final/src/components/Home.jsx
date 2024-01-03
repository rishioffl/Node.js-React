import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Home.css';
const Home = () => {
    const faqData = [
        { question: <p className="faq-question">All about appointments</p>,answer: 'The specialists at Mayo Clinic in Rochester are eager to address your health concerns and to develop a care plan. For most people, these care plans can then be transitioned back to local specialty and primary care teams. When this is appropriate, your specialists can work with you to assure a smooth transition for your ongoing healthcare needs.From referrals to insurance.'},
        { question: <p className="faq-question">Advice from other patients</p>,answer: 'Get cost-saving tips, travel tricks and advice from former and current Mayo Clinic patients in our online community' },
        { question: <p className="faq-question">Bood Donor Program</p>,answer: 'Each whole blood donation might help save three lives.' },
      ];
    
      const [activeIndex, setActiveIndex] = useState(null);
    
      const handleQuestionClick = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
      };
    return (
        <div>

            <header class="header" id="header">
                <nav class="nav container">
                    <a href="#" class="nav__logo">
                        <i class="ri-leaf-line nav__logo-icon"></i>Pharma
                    </a>
                    <div class="nav__menu" id="nav-menu">
                        <ul class="nav__list">
                            <li class="nav__item">
                                <a href="#home" class="nav__link active-link">Home</a>
                            </li>
                            <li class="nav__item">
                                <Link to='/Products '><a href="#products" class="nav__link">Products</a></Link>
                            </li>
                            <li class="nav__item">
                                <a href="#faqs" class="nav__link">FAQs</a>
                            </li>
                            <li class="nav__item">
                                <a href="#footer" class="nav__link">Contact Us</a>
                            </li>
                            <li class="nav__item">
                                <Link to='/Login'><a href="#about" class="nav__link">Login</a></Link>
                            </li>
                            <li class="nav__item">
                                <Link to='/Login'><a href="#about" class="nav__link">Logout</a></Link>
                            </li>
   
                        </ul>

                        <div class="nav__close" id="nav-close">
                            <i class="ri-close-line"></i>
                        </div>
                    </div>

                    <div class="nav__btns">
                        <i class="ri-moon-line change-theme" id="theme-button"></i>
                        <div class="nav__toggle" id="nav-toggle">
                            <i class="ri-menu-line"></i>
                        </div>
                    </div>
                </nav>
            </header>

            <main class="main" >
            <section class="home" id="home">
                <div class="home__container container grid">
                  <img src="https://devforum-uploads.s3.dualstack.us-east-2.amazonaws.com/uploads/optimized/4X/6/3/f/63f55dcecd5d4077d80a792e4bb531740e192487_2_419x500.png"class="home__img"></img>
                 <div class="home__data">
                        <h1 class="home__title">
                        Pharmacy that cares
                        </h1>
                        <p class="home__description">
                        Growing to Meet Your Needs. Healing Hands,Caring Hearts,Health for Life,Healthcare just for kids,Healthcare that Cares,Hearts Plus Minds.
                        </p>
                        <a href="#about" class="button button--flex">
                            Request an Appointment <i class="ri-arrow-right-down-line button__icon"></i>
                        </a>
                    </div>

                </div>
            </section>
            </main>
            
            <div className="faq-container">
        <h2>FAQ</h2>
        <div className="faq-box">
          {faqData.map((faq, index) => (
            <div key={index} className={`faq-item ${activeIndex === index ? 'active' : ''}`} onClick={() => handleQuestionClick(index)}>
              <div className="question">
                <h3>{faq.question}</h3>
                <span className="toggle-symbol">{activeIndex === index ? '-' : '+'}</span>
              </div>
              <div className={`answer ${activeIndex === index ? 'visible' : ''}`}>
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <footer id='footer'>
        <section>
          <h2 className="foothead">CONTACT US</h2>
          <p>Request Return/Exchange</p>
          <p>Call: 08069630390</p>
          <p>Email: info@pharma.in</p>
          <p>Click to WhatsApp</p>
        </section>

        <section>
          <h2 className="foothead">BUSINESSES</h2>
          <p>Executive Health Programs</p>
          <p>International Business Collaborations</p>
          <p>Facilities & Real Estate</p>
          <p>Supplier Information</p>
          <p>Affiliate Program</p>
          <p>Become an Investor</p>
          <p>Invest with us</p>
        </section>

        <section>
          <h2 className="foothead">OUR POLICIES</h2>
          <p>Shipping Policy</p>
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
          <p>Refund Policy</p>
        </section>

        <section>
          <h2 className="foothead">MEDICAL PROFESSIONALS</h2>
          <p>AskExpert</p>
          <p>Clinical Trials</p>
          <p>Mayo Clinic Alumni Associatio</p>
          <p>Refer a Patient</p>
        </section>
      </footer>

      <div className="copyrights">
        <p>&copy; {new Date().getFullYear()} Pharma. All Rights Reserved.</p>
      </div>
        </div>
    );
 }
export default Home;