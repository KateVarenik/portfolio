import { useState } from "react";

import "./components.css";

export const Components = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="components">
      <div className="tabs">
        <div
          className={`tab ${activeTab === 0 ? "active" : ""}`}
          onClick={() => setActiveTab(0)}
        >
          tab 1
        </div>
        <div
          className={`tab ${activeTab === 1 ? "active" : ""}`}
          onClick={() => setActiveTab(1)}
        >
          tab 2
        </div>
      </div>
      <div className="content">content active</div>
    </div>
  );
};

export default Components;
