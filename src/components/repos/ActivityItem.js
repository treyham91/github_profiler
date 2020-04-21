import React from "react";

const ActivityItem = ({iconType, activityMessage}) => {
    return (
        <div className="activity-item">
            <ion-icon name={iconType}></ion-icon>
            <p>{activityMessage}</p>
        </div>
    )
}

export default ActivityItem