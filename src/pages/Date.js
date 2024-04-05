import React from 'react';
import { format } from 'date-fns';

const CurrentDateTime = () => {
    const [currentTime, setCurrentTime] = React.useState(new Date());

    // Use the useEffect hook to update the current time every second
    React.useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        // Clean up the interval when the component unmounts
        return () => clearInterval(timer);
    }, []);

    // Format the current time using date-fns and return the component
    return <p>{format(currentTime, "MMMM dd,hh:mm:ss a")}</p>;
};


export default CurrentDateTime;
