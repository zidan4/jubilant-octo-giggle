import React, { useState, useEffect, Suspense } from 'react';
import ReactDOM from 'react-dom/client';

// Lazy load a component
const LazyComponent = React.lazy(() => import('./LazyComponent'));

function App() {
  const [count, setCount] = useState(0);

  // Log whenever the count changes
  useEffect(() => {
    console.log(`Count is now: ${count}`);
  }, [count]);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Hello, React 19!</h1>
      <p>Current Count: {count}</p>
      <button onClick={() => setCount(prev => prev + 1)}>Increment</button>
      
      {/* Suspense fallback for lazy-loaded components */}
      <Suspense fallback={<div>Loading lazy component...</div>}>
        <LazyComponent />
      </Suspense>
    </div>
  );
}

// Create the React root and render the App component
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);
