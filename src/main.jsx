import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css'

import Home from './views/Home'

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <Home />
  </BrowserRouter>
);
