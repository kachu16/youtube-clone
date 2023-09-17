import Header from "./components/Header";
import BodyContainer from "./components/BodyContainer";
import { Provider } from "react-redux";
import store from "./utils/store";
import { createBrowserRouter } from "react-router-dom";
import SingleVideoPage from "./components/SingleVideoPage";
import VideoContainer from "./components/VideoContainer";
import SearchVideos from "./components/SearchVideos";


const App = () => {
  return (
    <Provider store={store}>
      <Header/>
      <BodyContainer/>
    </Provider>
  )
}

export default App
export const appRouter = createBrowserRouter([
  {
    path : '/',
    element : <App/>,
    children: [
           {
        path : '/search/:searchTerm',
        element : <SearchVideos/>
      },
      {
        path : '/',
        element : <VideoContainer/>
      },
      {
        path : '/video/:id',
        element : <SingleVideoPage/>
      },
    ]
  },
 
])