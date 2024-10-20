import { Link } from "react-router-dom"


const DUMMY_EVENTS = [
    {
        id: 'e1',
        title: 'some event',
    },
    {
        id: 'e1',
        title: 'Antother event',
    },
]

function EventPages() {
    return (<>
        <ul>
            {DUMMY_EVENTS.map(event => <li key={event.id}>
                <Link to={event.id}>{event.title}</Link>
            </li>)}
        </ul>
    </>)

}

export default EventPages