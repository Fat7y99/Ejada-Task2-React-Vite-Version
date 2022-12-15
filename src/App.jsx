import.meta.hot;
import SideBar from "./components/SidebarSection/SideBar";
import BodyContent from "./BodyContent";
import "@fontsource/dm-sans";
import React from "react";
function App() {
  return (
    <div>
      <div className=" container-fluid">
        <div className="row position-relative">
          <SideBar />

          <BodyContent />
        </div>
      </div>
    </div>
  );
}
//
export default App;
