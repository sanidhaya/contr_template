import ContactForm from './ContactForm/ContactForm';
import './ContactUs.css';

const ContactUs = () => {
  const phoneNumber = '+1234567890';
  const whatsappLink = `https://wa.me/${phoneNumber}`;
  const email = 'contact@example.com';
  const emailLink = `mailto:${email}`;

  return (
    <div className="container mx-auto p-8 lg:p-12">
      <div className="bg-white shadow-md rounded-lg p-8 lg:flex">
        <div className="lg:w-1/2">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="mb-6 text-gray-700">
            For inquiries, you can reach us through the following methods:
          </p>
          <ul className="list-disc pl-6">
            <li className="mb-4">
              <span className="font-semibold">WhatsApp:</span>{' '}
              <a className="text-blue-500 hover:underline" href={whatsappLink} target="_blank" rel="noopener noreferrer">
                Send a Message
              </a>
            </li>
            <li className="mb-4">
              <span className="font-semibold">Email:</span>{' '}
              <a className="text-blue-500 hover:underline" href={emailLink} target="_blank" rel="noopener noreferrer">
                Send an Email
              </a>
            </li>
            <li>
              <span className="font-semibold">Phone:</span>{' '}
              <a className="text-blue-500 hover:underline" href={`tel:${phoneNumber}`}>
                {phoneNumber}
              </a>
            </li>
          </ul>
        </div>
        <div className="lg:w-1/2 mt-8 lg:mt-0">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
