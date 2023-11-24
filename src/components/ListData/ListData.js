import React, { useEffect, useState } from "react";
import { useSnackbar } from "notistack";
import Pagination from "../Pagination/Pagination";
import styles from "./ListData.module.css";
import EditDetails from "../EditDetails/EditDetails";
import DeleteDetails from "../DeleteDetails/DeleteDetails";

const ListData = () => {
    const [userDetails, setUserdetails] = useState([]);
    const [currPage, setCurrPage] = useState(1);
    const [showEditModal, setShowEditModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [editDetails, setEditDetails] = useState({});
    const [currentIndex, setCurrentIndex] = useState(-1);

    const userDetailsPerPage = 10;
    const lastIndex = currPage * userDetailsPerPage;
    const firstIndex = lastIndex - userDetailsPerPage;
    const numOfPages = Math.ceil(userDetails.length / userDetailsPerPage);

    const { enqueueSnackbar } = useSnackbar();

    const getUserDetails = async () => {
        try {
            const response = await fetch("https://assets.alippo.com/catalog/static/data.json");
            const data = await response.json();
            setUserdetails(
                data.map((m, index) => {
                    return { ...m, serialNumber: index + 1 };
                })
            );
            console.log(data);
            return data;
        } catch (error) {
            if (error.response) {
                console.error("Server Error:", error.response.status, error.response.data);
                enqueueSnackbar(`Server Error: ${error.response.status}`, { variant: "error" });
            } else if (error.request) {
                console.error("No Response:", error.request);
                enqueueSnackbar("No Response from the server.", { variant: "error" });
            } else {
                console.error("Error:", error.message);
                enqueueSnackbar(`Error: ${error.message}`, { variant: "error" });
            }
        }
    };

    const details = userDetails.slice(firstIndex, lastIndex);

    const prevPage = () => {
        if (currPage !== 1) {
            setCurrPage(currPage - 1);
        }
    };
    const changeCurrPage = (id) => {
        setCurrPage(id);
    };
    const nextPage = () => {
        if (currPage !== numOfPages) {
            setCurrPage(currPage + 1);
        }
    };
    const veryLastPage = () => {
        if (currPage !== numOfPages) {
            setCurrPage(numOfPages);
        }
    };
    const veryFirstPage = () => {
        if (currPage !== 1) {
            setCurrPage(1);
        }
    };

    const handleEdit = (itemToEdit, i) => {
        setEditDetails(itemToEdit);
        setCurrentIndex(i);
        setShowEditModal(true);
    };

    const handleUpdateFn = (e, updatedItem) => {
        setUserdetails(
            userDetails.map((f, i) => {
                if (i === currentIndex) {
                    f = updatedItem;
                }
                return f;
            })
        );
        setShowEditModal(false);
        e.preventDefault();
    };

    const handleCancel = (e) => {
        setShowEditModal(false);
        setShowDeleteModal(false);
    };

    const handleDelModal = (user) => {
        setEditDetails(user);
        setShowDeleteModal(true);
    };

    const handleDeleteFn = (e, id) => {
        const actualIndex = userDetails.indexOf(editDetails);

        const list = userDetails.filter((_, i) => i !== actualIndex);
        setUserdetails(list);
        setShowDeleteModal(false);
    };

    useEffect(() => {
        getUserDetails();
    }, [enqueueSnackbar]);

    return (
        <>
            <div className={styles.tableCard}>
                <div className={styles.container}>
                    <table className={styles.table} style={{ width: "100%", border: "none" }}>
                        <thead>
                            <tr className={styles.tableRow}>
                                <th className={styles.tableData}>SL. NO</th>
                                <th className={styles.tableData}>Name</th>
                                <th className={styles.tableData}>Age</th>
                                <th className={styles.tableData}>City</th>
                                <th className={styles.tableData}>PinCode</th>
                                <th className={styles.tableData}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {details.map((detail, i) => {
                                const serialNumber = i + 1 + (currPage - 1) * userDetailsPerPage;
                                return (
                                    <tr key={i}>
                                        <td className={styles.tableData}>{serialNumber}</td>
                                        <td className={styles.tableData}>{detail.name ? detail.name : "-"}</td>
                                        <td className={styles.tableData}>{detail.age ? detail.age : "-"}</td>
                                        <td className={styles.tableData}>{detail.city ? detail.city : "-"}</td>
                                        <td className={styles.tableData}>{detail.pinCode ? detail.pinCode : "-"}</td>
                                        <td className={styles.tableDataAction}>
                                            <div className={styles.actionLayout}>
                                                <button
                                                    className={styles.editBtn}
                                                    onClick={(e) => handleEdit(detail, i)}
                                                >
                                                    Edit
                                                </button>

                                                <button
                                                    className={styles.deleteBtn}
                                                    onClick={() => handleDelModal(detail)}
                                                >
                                                    Delete
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                    <Pagination
                        userDetails={userDetails}
                        currPage={currPage}
                        numOfPages={numOfPages}
                        changePrev={prevPage}
                        changeCurr={changeCurrPage}
                        changeNext={nextPage}
                        changeVeryFirst={veryFirstPage}
                        changeVeryLast={veryLastPage}
                    />
                </div>
            </div>
            {showEditModal && (
                <EditDetails userDetails={editDetails} handleUpdate={handleUpdateFn} handleCancel={handleCancel} />
            )}
            {showDeleteModal && (
                <DeleteDetails userDetails={editDetails} handleUpdate={handleDeleteFn} handleCancel={handleCancel} />
            )}
        </>
    );
};

export default ListData;
