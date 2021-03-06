import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import './App.css';

const Hello = () => {
  return (
    <div className="text-center">
      <img src={icon} alt="logo" className="h-48 w-48" />
      <h1 className="text-2xl font-bold">
        electron-react-boilerplate with tailwind
      </h1>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
