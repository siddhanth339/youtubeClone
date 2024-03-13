import Header from "./components/Header";
import Body from "./components/Body";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import WatchContainer from "./components/WatchContainer";
import SideBar from "./components/SideBar";

function App() {
  return (
    <Provider store={appStore}>
      <div className="App">
        <Header />
        <div className="flex">
          <SideBar />
          <RouterProvider router={appRouter} />
        </div>
      </div>
    </Provider>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
  },
  {
    path: "/watch",
    element: <WatchContainer />,
  },
]);

export default App;
