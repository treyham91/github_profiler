import React from "react";

const RepoItem = ({repoURL, repoImage, repoName, createDate, modifyDate, language}) => {
    return (
        <a href={repoURL} target="_blank" className="repo-item">
            <div style={{display: 'flex'}}>
                <ion-icon name={repoImage}></ion-icon>
                <div style={{display: 'block'}}>
                    <h5>{repoName}</h5>
                    <p><span>Create Date:</span> {createDate}</p>
                    <p><span>Last Modify Date:</span> {modifyDate}</p>
                    <p><span>Language:</span> {language}</p>
                </div>
            </div>
        </a>
    )
}

export default RepoItem;