import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Schedule from "../pages/Schedule";
import Questionnare from "../pages/Questionnare";
import VideoTraining from "../pages/VideoTraining";
import Counter from "../pages/Counter"; // Add this import
import Home from "../pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/schedule",
        element: <Schedule />,
      },
      {
        path: "/questionnare",
        element: <Questionnare />,
      },
      {
        path: "/videotraining",
        element: <VideoTraining />,
      },
      {
        path: "/counter", // Add this new route
        element: <Counter />,
      },
    ],
  },
]);

export default router;
