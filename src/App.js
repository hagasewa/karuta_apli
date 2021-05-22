
import { Management } from './components/pages/Management';
import { PreliminaryStyled } from './components/pages/Preliminary';
import { StyleProvider } from './StyleProvider';




function App() {
  return (
    <div className="App">
      <header className="App-header">
        <StyleProvider>
      {/* <Preliminary /> */}
      <Management />
      </StyleProvider>
      </header>
    </div>
  );
}

export default App;
