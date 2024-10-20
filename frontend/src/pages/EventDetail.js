import { useRouteLoaderData , json, redirect } from "react-router-dom"
import EventItem from '../components/EventItem'

function EventDetailPages() {   
    const data = useRouteLoaderData('event-detail')

    return (
        <>
            <EventItem event={data.event} />
        </>
    )

}

export default EventDetailPages

export async function loader({ request, params }) {
    const id = params.eventId
    const response = await fetch('http://localhost:8080/events/' + id)
    if (!response.ok) {
        throw json({message: 'Could NOt Fetch Detail For Event'} ,{status: 500})
    } else {
        return response
    }
}


export async function action({request, request}){
    const eventId = params.eventId
     const response = await fetch('http://localhost:8080/events/' + eventId, {
        method: request.method,

     });
     if (!response.ok) {
         return json({message: 'Could Not Delete Event'} , {status: 500})
     }
     return redirect('/events')
 }