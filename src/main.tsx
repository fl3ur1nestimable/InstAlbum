import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import Home from './Routes/Home'
import About from './Routes/About';
import Create from './Routes/Create';
import HowToUse from './Routes/HowToUse';
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <I18nextProvider i18n={i18n}>
      <Router>
        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/create" element={<Create />} />
          <Route path="/how-to-use" element={<HowToUse />} />
        </Routes>
      </Router>
    </I18nextProvider>
  </StrictMode>,
)
