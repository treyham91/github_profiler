import React from "react";

const NavigatorTab = ({iconType, value}) => {
    return (
        <div>
            <ion-icon name={iconType}></ion-icon>
            <p>{value}</p>
        </div>
    )
}

export default NavigatorTab;