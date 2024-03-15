import Header from "./components/Header";
import Body from "./components/Body";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import WatchContainer from "./components/WatchContainer";
import SideBar from "./components/SideBar";
import MainContainer from "./components/MainContainer";
import SearchResults from "./components/SearchResults";

function App() {
  return (
    <Provider store={appStore}>
      <div className="App">
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "/watch",
        element: <WatchContainer />,
      },
      {
        path: "/results",
        element: <SearchResults />,
      },
    ],
  },
]);

export default App;
