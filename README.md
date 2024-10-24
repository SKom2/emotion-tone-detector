# JetBrains Internship 2024

## Visualization of survey data

### Test Task: Detecting Emotional Tone of Text Using AI API

![](https://github.com/SKom2/kotlin-js-text-editor/assets/103752057/bcfd650a-ca87-4e7c-b52d-533e6a20f982)

### Overview

A simple web application that detects the emotional tone of user-entered text using an AI API via RapidAPI.

## Features

- **Tone Detection**: The app processes the input text using an AI service from RapidAPI to detect various emotional tones.
- **Emotional Tone Display**: The results are presented in two ways:
  1. **Most Expressed Emotion**: The emotion with the highest score is displayed on the screen along with a brief description.
  2. **Doughnut Chart Visualization**: Using the Chart.js library, a doughnut chart is rendered, showing all detected emotions with their corresponding scores for a visual overview.

### Technologies Used

- **React**
- **Vite**
- **TypeScript**
- **Tailwind CSS**
- **Chart.js**

### Getting Started

To run the project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/SKom2/emotion-tone-detector.git
   ```
2. Navigate to the project directory:
   ```bash
   cd emotion-tone-detector
   ```
3. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```
4. Start the development server:
    ```bash
   npm run dev
    # or
    yarn dev
   ```

### API Key Setup

To use the tone detection service, you will need to obtain an API key from RapidAPI.

1. Visit [RapidAPI](https://rapidapi.com/) and sign up for an account if you don't have one.
2. Search for an emotional tone detection API and subscribe to it.
3. Once subscribed, navigate to the API dashboard to find your API key.

After obtaining your API key, follow these steps to set it up in your project:

1. Create a `.env` file in the root of the project:
2. VITE_RAPID_API_KEY=d88105f006mshac3491b4f856344p1b9d8ejsn2bc312e8caf1 (You can use mine if you don't want to sign up)
