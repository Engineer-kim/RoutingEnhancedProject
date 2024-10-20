import { useRouteLoaderData } from 'react-router-dom'
import EventForm from '../components/EventForm'

function EventEditPages(){
    const data = useRouteLoaderData('event-detail')
    const event = data.event
    return <EventForm event={event}/>
}

export default EventEditPages