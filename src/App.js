import MyComponentWithToggle from "./patterns/hoc";
import ToggleComponent from "./patterns/hooks";
import Index from "./patterns/observer";
import ToggleButtonContainer from "./patterns/presentational";
import {Toggle, ToggleProvider} from "./patterns/provider";
import RenderProps from "./patterns/renderProps";
import CompoundComponents from "./patterns/compoundComponents";

function App() {
  return (
    <div className="App">
      <p>
        Hello!
      </p>
      <div>
        <p>Provider Pattern</p>
        <ToggleProvider>
          <Toggle />
        </ToggleProvider>
      </div>
      <div>
        <p>Presentational/Container Pattern</p>
        <ToggleButtonContainer />
      </div>
      <div>
        <p>Observable Pattern</p>
        <Index />
      </div>
      <div>
        <p>Render props Pattern</p>
        <RenderProps />
      </div>
      <div>
        <p>Using Hooks</p>
        <ToggleComponent />
      </div>
      <div>
        <p>HOC Pattern</p>
        <MyComponentWithToggle />
      </div>
      <CompoundComponents />
    </div>
  );
}

export default App;
