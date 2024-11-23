import Head from 'next/head';
import { getFeaturedEvents } from '../dummy-data';
import EventList from '../components/events/event-list';
import EventSearch from '../components/events/event-search';
import { Fragment } from 'react';
import {useRouter} from "next/router"; 


function Home() {
  const featureEvents= getFeaturedEvents();
  const router= useRouter();

  function findEventHandler(year,month){
    const fullPath= `/events/${year}/${month}`;
    router.push(fullPath);
  }
  

  return  <Fragment>
          <Head>
            <title>Next Events</title>
            <meta 
            name= 'description'
            content= 'Browse some lists of new events' />
          </Head>
         <EventSearch onSearch={findEventHandler}/>
         <EventList items={featureEvents}/>
         </Fragment>
  

}
export default Home; 

