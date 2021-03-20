import "./App.css";
import Button from "@material-ui/core/Button";
import { useRef } from "react";

function App() {
  const inputRef = useRef();
  const triggerSearch = () => {
    fetch(
      `http://localhost:5001/search-app-6d150/us-central1/helloWorld?term=${inputRef.current.value}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <div className="App">
      <h1>Google Search App</h1>
      <input ref={inputRef} type="text" />
      <Button onClick={triggerSearch} variant="outlined">
        SUBMIT
      </Button>
    </div>
  );
}

export default App;
