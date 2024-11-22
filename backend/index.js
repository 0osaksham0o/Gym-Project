import express from 'express'; 
import bodyParser from 'body-parser'; 
import cors from 'cors'; 
import { promises as fs } from 'fs'; 


const app = express();
const PORT = 8080; 


app.use(cors()); 
app.use(bodyParser.json()); 


app.post('/api/testimonials', async (req, res) => {
  const { name, message } = req.body; 

  
  if (!name || !message) {
    return res.status(400).json({ error: 'Name and message are required.' });
  }

  
  const newTestimonial = { name, message, date: new Date().toISOString() };

  try {
    
    const data = await fs.readFile('testimonials.json', 'utf-8');
    const testimonials = JSON.parse(data); 

    
    testimonials.push(newTestimonial);

    
    await fs.writeFile('testimonials.json', JSON.stringify(testimonials, null, 2));

    
    res.status(201).json({ message: 'Testimonial added successfully.' });
  } catch (error) {
    
    if (error.code === 'ENOENT') {
      try {
        await fs.writeFile('testimonials.json', JSON.stringify([newTestimonial], null, 2));
        res.status(201).json({ message: 'Testimonial added successfully.' });
      } catch (writeError) {
        console.error('Error writing new file:', writeError);
        res.status(500).json({ error: 'Failed to create the testimonials file.' });
      }
    } else {
      
      console.error('Error saving testimonial:', error);
      res.status(500).json({ error: 'Error saving testimonial.' });
    }
  }
});

app.get('/api/testimonials', async (req, res) => {
  try {
    const data = await fs.readFile('./testimonials.json', 'utf-8');
    const testimonials = JSON.parse(data);
    res.json(testimonials); // Send the testimonials back as a JSON response
  } catch (error) {
    console.error('Error reading testimonials:', error);
    res.status(500).json({ error: 'Error fetching testimonials.' });
  }
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
