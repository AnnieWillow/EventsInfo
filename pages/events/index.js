import Head from 'next/Head';
import { getAllEvents } from "../../dummy-data";
import EventList from "../../components/events/event-list";
import { Fragment } from 'react';

function AllEventsPage(){
    const event= getAllEvents();

return <Fragment>
    <Head>
        <title>All Events</title>
    </Head>
    <EventList items={event} />
    </Fragment>
   
}
export default AllEventsPage;