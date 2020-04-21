import React from "react";

const NavigatorTab = ({iconType, value, showData}) => {
    return (
        <div onClick={showData}>
            <ion-icon name={iconType}></ion-icon>
            <p>{value}</p>
        </div>
    )
}

export default NavigatorTab;