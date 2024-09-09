import { useState } from 'react';
import axios from 'axios';

const TestimonialForm = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      
      const res = await axios.post('http://localhost:8080/api/testimonials', { name, message });
      setResponse(res.data.message);
      setName('');
      setMessage('');
    } catch (error) {
      setResponse('Error saving testimonial. Please try again.');
    }
  };

  return (
    <div>
      <h2>Submit Your Testimonial</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <textarea
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
        <button type="submit">Submit</button>
      </form>
      {response && <p>{response}</p>}
    </div>
  );
};

export default TestimonialForm;
