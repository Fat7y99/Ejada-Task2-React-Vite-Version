import SideBar from "./Components/SideBarSection/SideBar";
import BodyContent from "./BodyContent";
import "@fontsource/dm-sans";
import React from "react";
function App() {
  return (
    <div>
      <div className="main container-fluid">
        <div className="row">
          <SideBar></SideBar>
          <BodyContent></BodyContent>
        </div>
      </div>
    </div>
  );
}
//
export default App;
