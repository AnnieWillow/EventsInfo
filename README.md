# EventsInfo

A Next.js project to browse and filter events information. Users can view all events, explore event details, and filter events by year and month.

## Features

- **BrowseAllEvents**:
  - Displays all events with an event card that includes:
    - **Date**
    - **Address**
    - **Explore Link**: Redirects to a detailed event page.
  
- **NextEvents**:
  - Allows filtering of events by:
    - **Year** (e.g., 2021, 2022).
    - **Month** (e.g., November).
  - Displays events matching the selected filters.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/AnnieWillow/EventsInfo.git
   cd EventsInfo

2. Install Dependencies:
   ```bash
   npm install

3. Run the Development Server:
   ```bash
   npm run dev

4. Open http://localhost:3000 in your browser.

##Routes

- /: Displays the NextEvents page with filters.
- /events: Displays the BrowseAllEvents page showing all events.
- /events/[id]: Displays detailed information about a selected event.

##Deployment

1.Build the project for production:
 ```bash
 npm run build

2. Start the production server:
 ```bash
 npm start



