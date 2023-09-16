import Header from "./components/Header";
import BodyContainer from "./components/BodyContainer";
import { Provider } from "react-redux";
import store from "./utils/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SingleVideoPage from "./components/SingleVideoPage";
import VideoContainer from "./components/VideoContainer";

const appRouter = createBrowserRouter([
  {
    path : '/',
    element : <BodyContainer/>,
    children: [
      {
        path : '/',
        element : <VideoContainer/>
      },
      {
        path : '/video/:id',
        element : <SingleVideoPage/>
      }
    ]
  },
 
])
const App = () => {
  return (
    <Provider store={store}>
      <Header/>
      <RouterProvider router={appRouter}></RouterProvider>
    </Provider>
  )
}

export default App
