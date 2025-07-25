# Van Rental App

Welcome to my **Van Rental App**, a personal project built to explore React, React Router, and state management while creating a functional van rental platform. This app allows users to browse vans, view details, and manage their listings as hosts, with a basic authentication system.

## Project Overview

This is a pet project developed to deepen my understanding of modern web development with React. The app simulates a van rental service where users can explore available vans, filter by type, and hosts can manage their listings. It includes features like dynamic routing, API data fetching (emulated with static JSON), and a simple login system.

- **Tech Stack**: React, React Router DOM, JavaScript, HTML/CSS
- **Purpose**: Learning and practicing React concepts, state management, and API integration.
- **Status**: In active development as a learning tool.

## Features

- **User Features**:
  - Browse a list of vans with filtering by type (Simple, Luxury, Rugged).
  - View detailed information about each van (price, description, images).
- **Host Features**:
  - Dashboard for host earnings and reviews.
  - Manage van details, pricing, and photos (protected by authentication).
- **Authentication**:
  - Basic login system with local storage for session management.
- **Responsive Design**:
  - Simple, mobile-friendly layout.

## Project Structure
van-rental-app/  
├── src/   
│   ├── components/         # Reusable components (e.g., Layout, AuthRequired)  
│   ├── pages/             # Page components (e.g., Vans, VanDetail, Host/*)  
│   ├── api.js             # API mocks with static data  
│   ├── vans.json          # Static data for vans and users  
│   ├── index.jsx          # Main app entry point  
│   └── ...                # Other assets and styles  
├── package.json           # Project dependencies and scripts  
└── README.md              # This file  

## Installation and Running Locally  
To run this project locally on your machine, follow these steps:  

- **Clone the Repository**:  
git clone https://github.com/<your-username>/van-rental-app.git  
cd van-rental-app  
  
- **Install Dependencies:**
```bash
npm install
```

- **Start the Development Server:**  
npm start  

- **Build for production**  
npm run build  

## Future Improvements  
- **Real API**: Integrate with a backend server (e.g., Node.js with Express) instead of static JSON.
- **Better Authentication**: Implement JWT tokens and a real login API.
- **Styling**: Enhance UI with a CSS framework like Tailwind CSS.
- **Testing**: Add unit tests with Jest and React Testing Library.

## License
This project is open-source under the MIT License. See the LICENSE file for details.
