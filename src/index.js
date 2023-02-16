import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Notes from './Pages/Notes';
import Archive from './Pages/Archive';
import Help from './Pages/Help';
import Label from './Pages/Label';
import Reminder from './Pages/Reminder';
import Setting from './Pages/Setting';
import Trash from './Pages/Trash';

import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <App />
    {/* <Notes />
    <Archive/>
  <Help/>
  <Label />
  <Reminder />
  <Setting />
  <Trash /> */}
  </BrowserRouter>
);
