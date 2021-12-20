import WritingList from './components/WritingList';


function App() {
  return (
    <div className="main-wrapper">
      <header></header>
      <div className="ui raised very padded text container segment">
        <div className="ui relaxed divided list">
          <WritingList />
        </div>
      </div>
    </div>
  );
}

export default App;
