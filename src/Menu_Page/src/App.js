import './App.scss';
import Menu from './components/Menu';
import SubMenu from './components/SubMenu';
import { Routes, Route } from "react-router-dom"
import Customize from './components/Customize';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Menu />} />
      <Route path="/:sub_category" element={<SubMenu />} />
      <Route path='/:item_type/:item_id' element={<Customize />} />
    </Routes>
  );
}

export default App;
