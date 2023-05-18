import "./App.css";
import { Doc } from "./Components/Doc";

function App() {
  return (
    <div className="App">
      <Doc />
      <div class="clear"></div>

      <div class="page">
        <p style={{color:"gray",margin:"40px 40px"}}><i>Type @ to insert</i></p>
      </div>

      <div class="page2"></div>
    </div>
  );
}

export default App;
