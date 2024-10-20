
import { RouterProivder, createBrowserRouter, parsePath } from 'react-router-dom'
import HomePage from './pages/Home'
import EventPages , { loader as eventLoader} from './pages/Events';
import NewEventPages from './pages/NewEvent';
import EventDetailPages from './pages/EventDetail';
import EventEditPages from './pages/EditEvent';
import RootLayout from './pages/Root';
import EventRootLayout from './pages/EventRoot';

const router = createBrowserRouter([
  {
    path: '/', element: <RootLayout />, children: [
      { index: true, element: <HomePage /> },
      {
        path: 'event', element: <EventRootLayout />, children: [
          {
            index: true, element: <EventPages />, loader: eventLoader
          },
          { path: ':eventId', element: <EventDetailPages /> },
          { path: 'new', element: <NewEventPages /> },
          { path: ':eventId/edit', element: <EventEditPages /> }
        ]
      }
    ],
  }
])

function App() {
  return <RouterProivder router={router} />;
}

export default App;
