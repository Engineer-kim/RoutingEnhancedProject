import { parsePath, useParams, useParams } from "react-router-dom"




function EventDetailPages() {

    const params = useParams();

    return( <>
        <h1>EventDetailPages</h1>
        <p>Event ID: {params.eventId}</p>
    </>)

}

export default EventDetailPages