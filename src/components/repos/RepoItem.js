import React from "react";

const RepoItem = ({repoImage, repoName, createDate, modifyDate, language}) => {
    return (
        <div className="repo-item">
            <div style={{display: 'flex'}}>
                <img src={repoImage} alt="No Language" />
                <div style={{display: 'block'}}>
                    <h5>{repoName}</h5>
                    <p><span>Create Date:</span> {createDate}</p>
                    <p><span>Last Modify Date:</span> {modifyDate}</p>
                    <p><span>Language:</span> {language}</p>
                </div>
            </div>
        </div>
    )
}

export default RepoItem;