import React from 'react'


const Award = ({ title, description, image }) => (
  <div className="mb-4">
    <img src={image} alt={title} className="mb-2" style={{ maxWidth: '100%', height: 'auto' }} />
    <h3 className="text-lg font-semibold">{title}</h3>
    <p>{description}</p>
  </div>
);

const NewspaperSnippet = ({ headline, snippet }) => (
  <div className="mb-4">
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
          Welcome to [Your Brokerage Firm], your trusted partner in construction brokerage services.
          With [number] years of experience in the industry, we specialize in connecting clients
          with the best construction professionals and projects.
        </p>
        <p className="mb-4">
          Our mission is to streamline the construction process by providing expert advice,
          facilitating communication between clients and contractors, and ensuring successful
          project outcomes.
        </p>
        <h2 className="text-xl font-bold mb-2">Our Services</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>Construction project management</li>
          <li>Contractor selection and recommendation</li>
          <li>Bid evaluation and negotiation</li>
          <li>Quality assurance and project oversight</li>
          <li>Client satisfaction monitoring</li>
        </ul>
        <h2 className="text-xl font-bold mb-2">Why Choose [Your Brokerage Firm]?</h2>
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
              image="url-to-award-image-1.jpg"
            />
            <Award
              title="Innovation in Project Delivery"
              description="Recognized for innovative approaches in delivering construction projects."
              image="url-to-award-image-2.jpg"
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
            />
            <NewspaperSnippet
              headline="Breaking Ground on Innovative Project"
              snippet="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
            {/* Add more newspaper snippets as needed */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About
