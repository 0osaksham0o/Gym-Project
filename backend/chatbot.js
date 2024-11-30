import express from 'express';  // Use ES module import instead of require
import cors from 'cors';

const app = express();
const port = 7800;

// Enable CORS
app.use(cors());

// Define the predefined questions and responses with diverse keywords
const chatbotResponses = {
  // Membership-related responses
  "membership": "Our membership plans start from $50 per month and include access to all gym facilities. We also offer premium packages with personal training.",
  "price": "The basic membership starts at $50 per month. We also have discounts for annual memberships.",
  "cost": "Our memberships start from $50. Feel free to contact us for special offers.",
  "fees": "Our monthly membership fee is $50. We offer family and corporate discounts too.",

  // Schedule and timing-related responses
  "schedule": "Our classes run daily from 6 AM to 9 PM. You can choose from yoga, cardio, weight training, and more.",
  "hours": "We are open from 6 AM to 9 PM, 7 days a week.",
  "timing": "Our gym is open every day from 6 AM to 9 PM.",
  "time": "We operate from 6 AM to 9 PM daily. Join us anytime!",

  // Location-related responses
  "location": "We are located at 123 Fitness St., New York, near Central Park.",
  "address": "Our gym is located at 123 Fitness St., New York.",
  "directions": "You can find us at 123 Fitness St., New York. We're near Central Park.",

  // Contact-related responses
  "contact": "You can contact us at elitedge@fitness.com or call us at +917209404000.",
  "phone": "Our contact number is +91 7209404000.",
  "email": "You can reach us at elitedge@fitness.com for any inquiries.",
  
  // Class-specific responses
  "yoga": "Our yoga classes are available every morning at 7 AM and in the evening at 6 PM.",
  "zumba": "Join our Zumba classes every Monday, Wednesday, and Friday at 8 AM.",
  "cardio": "Cardio sessions are available throughout the day from 6 AM to 8 PM.",
  "personal trainer": "We offer personal training sessions with certified trainers. Contact us for more details.",

  // Facilities-related responses
  "facilities": "We offer state-of-the-art gym equipment, a swimming pool, sauna, and a nutrition bar.",
  "equipment": "Our gym is equipped with the latest machines for cardio, strength training, and free weights.",
  "amenities": "We provide locker rooms, showers, a juice bar, and free Wi-Fi for our members.",

  // General greetings and fallback
  "hello": "Hello! How can I assist you today?",
  "hi": "Hi there! What would you like to know about our gym?",
  "how are you": "I'm just a chatbot, but I'm here to help you!",
  "help": "Sure! You can ask me about membership, class schedules, location, or contact details.",
};

// Function to find the best response based on keywords
function findResponse(query) {
  query = query.toLowerCase();

  // Iterate through all chatbot responses to find a match by keyword
  for (const keyword in chatbotResponses) {
    if (query.includes(keyword)) {
      return chatbotResponses[keyword];
    }
  }

  // Default response if no keyword matches
  return "I'm sorry, I didn't understand that. Here are some things you can ask:\n- Membership details\n- Class schedule\n- Gym location\n- Opening hours\n- Contact information\n- Facilities and amenities";
}

// Endpoint to handle chat requests
app.get("/chatbot", (req, res) => {
  const userQuery = req.query.question.toLowerCase().trim();

  // Find the best response
  const botResponse = findResponse(userQuery);

  res.json({ response: botResponse });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
