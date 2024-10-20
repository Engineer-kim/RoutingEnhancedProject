
import { RouterProivder, createBrowserRouter, parsePath } from 'react-router-dom'
import HomePage from './pages/Home'
import EventPages, { loader as eventLoader } from './pages/Events';
import NewEventPages , { action as newEventAction } from './pages/NewEvent';
import EventDetailPages, { loader as eventDetailLoader, action as deleteAction } from './pages/EventDetail';
import EventEditPages from './pages/EditEvent';
import RootLayout from './pages/Root';
import EventRootLayout from './pages/EventRoot';
import ErrorPage from './pages/Error';

const router = createBrowserRouter([
  {
    path: '/', element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'event', element: <EventRootLayout />, children: [
          {
            index: true, element: <EventPages />, loader: eventLoader
          },
          {
            path: ':eventId',
            id: 'event-detail',
            loader: eventDetailLoader,
            children: [
              {
                index: true,
                element: <EventDetailPages />
              },
              { path: 'edit', element: <EventEditPages />,
                action: deleteAction
               }
            ]
          },
          { path: 'new', element: <NewEventPages />, action: newEventAction},
        ]
      }
    ],
  }
])

function App() {
  return <RouterProivder router={router} />;
}

export default App;
