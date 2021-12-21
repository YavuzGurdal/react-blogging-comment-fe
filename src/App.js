import { Route, Routes } from "react-router-dom";
import WritingList from './components/WritingList';
import WritingDetail from './components/WritingDetail';

function App() {
  return (
    <div className="main-wrapper">
      <header></header>
      <div className="ui raised very padded text container segment">
        <Routes>
          <Route path="/" exact element={<WritingList />} />
          <Route path="/posts/:id" element={<WritingDetail />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
