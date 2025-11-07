# Aaron Portfolio

This project is a personal portfolio website showcasing my work and skills. Below are the details regarding the structure and setup of the project.

## Project Structure

```
aaron-portfolio
├── public
│   └── index.html          # Main HTML document for the portfolio
├── src
│   ├── js
│   │   └── main.js         # Main JavaScript code for interactivity
│   ├── css
│   │   └── styles.css      # Styles for the portfolio
│   ├── components
│   │   └── header.js       # Header component with navigation
│   └── data
│       └── resume.json     # Structured data for the resume
├── .vscode
│   └── launch.json         # Debugging configuration
├── package.json            # npm configuration file
├── Dockerfile              # Instructions for building a Docker image
└── nginx.conf              # Nginx configuration for production
```

## Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd aaron-portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the application:**
   ```bash
   npm start
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

5. **Docker Setup:**
   To build and run the Docker container:
   ```bash
   docker build -t aaron-portfolio .
   docker run -p 8080:80 aaron-portfolio
   ```

## Usage

Open your browser and navigate to `http://localhost:8080` to view the portfolio.

## License

This project is licensed under the MIT License.