import React from "react";

const ActivityItem = ({iconType, activityMessage, repoName, activityDate}) => {
    return (
        <div className="activity-item">
            <ion-icon name={iconType}></ion-icon>
            <h5>{activityMessage}</h5>
            <p><span style={{fontStyle: 'italic'}}>Repo: </span>{repoName.split("/")[1]}</p>
            <p><span style={{fontStyle: 'italic'}}>Created: </span>{activityDate}</p>
        </div>
    )
}

export default ActivityItem