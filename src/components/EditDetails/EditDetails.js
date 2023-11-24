import React, { useState } from "react";
import styles from "./EditData.module.css";

const EditDetails = ({ userDetails, handleUpdate, handleCancel }) => {
    const [user, setUser] = useState(userDetails);

    const handleOnChange = (e, key) => {
        const obj = { ...user };
        obj[key] = e.target.value;
        setUser({
            ...user,
            name: obj.name,
            age: obj.age,
            city: obj.city,
            pinCode: obj.pinCode,
        });
    };

    return (
        <div className={styles.editModal}>
            <h2>Edit Details</h2>
            <div>
                <form className={styles.editForm} action="">
                    <div className={styles.keyAndInput}>
                        <span style={{ paddingRight: "5px" }}>Name</span>
                        <input
                            className={styles.modalInput}
                            type="text"
                            value={user.name}
                            onChange={(e) => handleOnChange(e, "name")}
                        />
                    </div>
                    <div className={styles.keyAndInput}>
                        <span style={{ paddingRight: "5px" }}>Age</span>
                        <input
                            className={styles.modalInput}
                            type="text"
                            value={user.age}
                            onChange={(e) => handleOnChange(e, "age")}
                        />
                    </div>
                    <div className={styles.keyAndInput}>
                        <span style={{ paddingRight: "5px" }}>City</span>
                        <input
                            className={styles.modalInput}
                            type="text"
                            value={user.city}
                            onChange={(e) => handleOnChange(e, "city")}
                        />
                    </div>
                    <div className={styles.keyAndInput}>
                        <span style={{ paddingRight: "5px" }}>PinCode</span>
                        <input
                            className={styles.modalInput}
                            type="text"
                            value={user.pinCode}
                            onChange={(e) => handleOnChange(e, "pinCode")}
                        />
                    </div>
                    <div style={{ display: "flex", marginTop: "15px" }}>
                        <button className={styles.cancelBtn} onClick={(e) => handleCancel(e)}>
                            Cancel
                        </button>
                        <button className={styles.updateBtn} onClick={(e) => handleUpdate(e, user)}>
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditDetails;
