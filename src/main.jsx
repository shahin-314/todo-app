import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux'; // Yeh Redux ke liye
import { store } from './redux/store'; // Store import karo

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}> {/* App ko store ke saath wrap karo */}
      <App />
    </Provider>
  </StrictMode>
);