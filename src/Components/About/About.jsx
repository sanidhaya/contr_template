import React from 'react'
import './About.css'
import image1 from '../../assets/asset-images/awards/newspaperimg1.jpg'
import image2 from '../../assets/asset-images/awards/newspaperimg2.jpg'


const Award = ({ title, description, image }) => (
  <div className="mb-4">
    <img src={image} alt={title} className="mb-2" style={{ maxWidth: '100%', height: 'auto' }} />
    <h3 className="text-lg font-semibold">{title}</h3>
    <p>{description}</p>
  </div>
);

const NewspaperSnippet = ({ headline, snippet, image }) => (
  <div className="mb-4">
    <img src={image} className="mb-2" style={{ maxWidth: '100%', height: 'auto' }} />
    <h3 className="text-lg font-semibold">{headline}</h3>
    <p>{snippet}</p>
  </div>
);

const About = () => {
  return (
    <div className="about-page bg-gray-100 min-h-screen p-8">
      <div className="about-content max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">About Us</h1>
        <p className="mb-4">
        Welcome to Heera Properties, Nashik’s premier real estate brokerage agency.
         With over 15 years of unparalleled service, we have grown to become one of 
         the largest and most trusted names in the industry.
        </p>
        <p className="mb-4">
        Our comprehensive range of services includes residential, commercial,
         and property management solutions, tailored to meet the diverse needs of our
          clients. Our expertise and dedication have earned us numerous awards and 
          recognition in leading newspapers, underscoring our commitment to excellence.
        </p>
        <p className="mb-4">
        At Heera Properties, our mission is to transform dreams into reality by 
        providing exceptional real estate solutions with integrity, professionalism,
        and personalized service. We believe in building lasting relationships with
        our clients, grounded in trust, transparency, and mutual respect.
        </p>
        <p className="mb-4">
        Explore your property dreams with Heera Properties, where your vision finds its perfect home.
        </p>
        <h2 className="text-xl font-bold mb-2">Our Services</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>Construction project management</li>
          <li>Contractor selection and recommendation</li>
          <li>Bid evaluation and negotiation</li>
          <li>Quality assurance and project oversight</li>
          <li>Client satisfaction monitoring</li>
        </ul>
        <h2 className="text-xl font-bold mb-2">Why Choose Heera Properties?</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>Extensive network of trusted construction professionals</li>
          <li>Personalized service tailored to your project needs</li>
          <li>Efficient and transparent project management</li>
          <li>Commitment to client success and satisfaction</li>
          <li>Proven track record of successful projects</li>
        </ul>
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4">Our Awards</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Award
              title="Construction Excellence Award"
              description="Received for outstanding achievements in construction management."
              image={image2}
            />
            <Award
              title="Innovation in Project Delivery"
              description="Recognized for innovative approaches in delivering construction projects."
              image={image1}
            />
            {/* Add more awards as needed */}
          </div>
        </div>

        {/* Newspaper Snippets Section */}
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4">In the News</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <NewspaperSnippet
              headline="Local Construction Firm Wins Top Honors"
              snippet="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              image={image1}
            />
            <NewspaperSnippet
              headline="Breaking Ground on Innovative Project"
              snippet="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              image={image2}
            />
            {/* Add more newspaper snippets as needed */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About
