
import { App } from './components/App';
import './index.css';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
// );


const rootElement = document.getElementById('root');
const root = createRoot(rootElement as HTMLElement);



root.render(
 <StrictMode>
    <App />
  </StrictMode>
);