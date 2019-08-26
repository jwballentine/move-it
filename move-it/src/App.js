import React from "react";
import Moving from "./components/Moving";
import { Card } from "antd";

import "./App.css";

function App() {
  return (
    <div className="body-image">
      <Card title="Moving Specifics" className="moving-details">
        <Moving />
      </Card>
    </div>
  );
}

export default App;
