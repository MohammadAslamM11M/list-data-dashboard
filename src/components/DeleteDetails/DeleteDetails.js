import React, { useState } from "react";
import styles from "./DeleteDetails.module.css";

const DeleteDetails = ({ userDetails, handleUpdate, handleCancel }) => {
    const confirmDeletion = () => {
        handleUpdate(userDetails);
    };
    return (
        <div className={styles.editModal}>
            <h2>Delete Details</h2>
            <div>
                <span>{userDetails.name}</span>
                <div style={{ display: "flex", marginTop: "15px" }}>
                    <button className={styles.cancelBtn} onClick={(e) => handleCancel(e)}>
                        Cancel
                    </button>
                    <button className={styles.updateBtn} onClick={confirmDeletion}>
                        Confirm
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DeleteDetails;
