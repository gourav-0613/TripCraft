TripCraft: AI-Powered Travel Planning
TripCraft is a full-stack web application designed to simplify travel planning. By leveraging AI, the platform generates personalized, multi-day itineraries based on user preferences, budget, and destination.

🚀 Features
User Authentication: Secure registration and login system.
AI Itinerary Generation: Custom day-wise plans including activities, timings, and descriptions.
Smart Budgeting: Dynamic budget breakdown for transport, food, accommodation, and more.
Location-Based Search: Input source and destination cities to get tailored routes.
Integrated Bookings: Quick links to popular platforms like MakeMyTrip, RedBus, and RailYatri for seamless booking.
Interactive UI: Modern, dark-themed interface with smooth transitions and progress tracking.
Database Management: Itineraries and user data are stored and managed using MongoDB.

🛠️ Tech Stack
Frontend:
React.js: For building a responsive and dynamic user interface.
Tailwind CSS: For modern, utility-first styling.
Lucide React: For clean, professional iconography.

Backend:
Node.js & Express.js: Powering the RESTful API and server-side logic.
MongoDB & Mongoose: Storing user profiles and generated trip plans.
MongoDB Compass: Used for local database visualization and management.

AI Integration:
Generative AI (LLM) to craft detailed travel itineraries and cost estimations.


⚙️ Installation & Setup
Follow these steps to run TripCraft locally:
Clone the Repository:
git clone https://github.com/gourav-0613/TripCraft.git
cd tripcraft

Backend Setup:
Navigate to the server directory.
Install dependencies: npm install
Create a .env file and add your MONGODB_URI and AI_API_KEY.
Start the server: npm start

Frontend Setup:
Navigate to the client directory.
Install dependencies: npm install
Start the development server: npm run dev

Database:
Open MongoDB Compass and connect to your local instance (localhost:27017) to view the tripcraft database.

🗺️ Future Roadmap
- PDF export for itineraries.
- Real-time weather integration for destinations.
- Multi-language support for international travelers.
-Social sharing features to invite friends to a trip.
