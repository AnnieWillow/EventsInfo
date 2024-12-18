import Link from "next/link";
import classes from "./event-item.module.css";
import Button from "../ui/button";
import AddressIcon from "../icons/address-icon";
import ArrowRightIcon from "../icons/arrow-right-icon";
import DateIcon from "../icons/date-icon";


function EventItem(props){  
    const{title,date,image,location,id} = props;
    const humanReadableDate = new Date(date).toDateString('en-US',{
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });
    const formatAddress = location.replace(', ', '\n');
    const exploreLink = `/events/${id}`;
    return <li className={classes.item}>
        <img src={'/'+image} alt={title} />
        <div className={classes.content}>
            <div className={classes.summary}>
                <h2>{title}</h2>
                <div className={classes.date}>
                    <DateIcon/>
                    <time>{humanReadableDate}</time>
                </div>
                <div className={classes.address}>
                    <AddressIcon/>
                    <address>{formatAddress}</address>
                </div>
            </div>
            <div className={classes.actions}>
                <Button link={exploreLink}>
                    <span>ExploreLink</span>
                    <span className={classes.icon}><ArrowRightIcon/></span>
                    </Button>
            </div>
        </div>
    </li>
}
export default EventItem;