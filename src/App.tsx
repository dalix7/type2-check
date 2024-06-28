import React from "react";
import Greeting from "./Components/Greeting ";
import Counter from "./Components/counter";

const App: React.FC = () => {
  return (
    <div>
      <Greeting name={"it's me"} />
      <Counter />
    </div>
  );
};

export default App;
