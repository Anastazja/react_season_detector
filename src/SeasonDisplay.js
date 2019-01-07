import './SeasonDisplay.css';
import React from 'react';

const seasonConfig = {
    spring: {
        text: "It's spring",
        iconName: 'pagelines'
    },
    summer: {
        text: "It's summer",
        iconName: 'sun'
    },
    autumn: {
        text: "It's autumn",
        iconName: 'umbrella'
    },
    winter: {
        text: "It's winter",
        iconName: 'snowflake'
    }
};

const getSeason = (latitude, month) => {
    if(month > 2 && month < 7){
        return latitude > 0 ? 'spring' : 'autumn';
    } else if (month > 6 && month < 10){
        return latitude > 0 ? 'summer' : 'winter';
    } else if (month > 9 && month < 12){
        return latitude > 0 ? 'autumn' : 'spring';
    }  else {
        return latitude > 0 ? 'winter' : 'summer';
    }
};

const SeasonDisplay = props => {
    const season = getSeason(props.latitude, new Date().getMonth());
    const {text, iconName} = seasonConfig[season];
    return (
        <div className={`season-display ${season}`}>
            <i className={`${iconName} icon massive icon-left`} />
            <h1>{text}</h1>
            <i className={`${iconName} icon massive icon-right`} />
        </div>
    )
};

export default SeasonDisplay;