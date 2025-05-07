# Angular Elements MFE with Single-Spa

This proof of concept (PoC) demonstrates how to use Angular Elements as a micro frontend (MFE) and load it into a host application using [single-spa](https://single-spa.js.org/) and import maps.

## Project Structure

- **host/**: A static app that provides an HTML page where the Angular web component is hosted. It uses single-spa and import maps to load the remote web component.
- **wc-mf/**: The Angular project that builds a web component using Angular Elements.

## Steps to Run the PoC

### 1. Build the Angular Web Component (wc-mf)

```
cd wc-mf
npm install
npm run build
```

### 2. Serve the Angular Web Component

```
npx http-server ./dist/wc-app/browser/ --cors='*'
```

This will serve the web component at a local port (e.g., http://localhost:8080).

### 3. Start the Host Application

In a new terminal:

```
cd host
npm install
npm start
```

This will serve the host app at a local port (e.g., http://localhost:3000).

### 4. Access the Application

Open your browser and navigate to the host app URL (e.g., http://localhost:3000). The host app will load the Angular web component via single-spa and import maps.
