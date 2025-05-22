# Animal SVG Gallery React App

This project is a React-based gallery that displays animal SVGs (Chicken, Cow, Pig) using Vite for fast development and build.

## Running the App with Docker

1. **Build the Docker image:**

   ```bash
   docker build -t animal-svg-gallery ./app
   ```

2. **Run the Docker container:**

   ```bash
   docker run -p 5173:80 animal-svg-gallery
   ```

3. **View the app:**

   Open your browser and go to [http://localhost:5173](http://localhost:5173)

---

## Development (without Docker)

1. Install dependencies:
   ```bash
   cd app
   npm install
   ```
2. Start the dev server:
   ```bash
   npm run dev
   ```
3. Open [http://localhost:5173](http://localhost:5173)

---

SVGs are located in `src/assets/` inside the React app.

**Note:**
- The Docker image serves the production build using Nginx on port 80 inside the container. The `-p 5173:80` flag maps port 80 in the container to port 5173 on your host.
- If you see a 502 error, ensure the build step completed successfully and you are visiting the correct port.