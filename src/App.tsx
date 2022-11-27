import { Home } from "./pages/Home";
import { GlobalStyle } from "./styles/GlobalStyles";
import store from "./store/store";

import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <Home />
      <GlobalStyle />
    </Provider>
  );
}

export default App;
