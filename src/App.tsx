import { SideMenu } from "./components/sidemenu";
import { Content } from "./components/content";
import { SideSocial } from "./components/sidesocial";

function App() {
  return (
    <div className="flex mx-auto min-h-screen p-4">
      <SideMenu />
      <Content />
      <SideSocial />
    </div>
  );
}

export default App;
