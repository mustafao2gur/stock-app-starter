import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "./app/store";
import Login from "./pages/Login";

function App() {
  return (
    <>      
      <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>

          <Login />
       
      </PersistGate> 
      </Provider>
    </>
  );
}

export default App;
