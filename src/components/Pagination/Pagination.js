import React from "react";
import styles from "./Pagination.module.css";

const Pagination = ({ currPage, numOfPages, changePrev, changeCurr, changeNext, changeVeryFirst, changeVeryLast }) => {
    const nums = Array.from({ length: numOfPages }, (_, i) => i + 1);

    return (
        <nav>
            <ul className={styles.pagination}>
                <div>
                    <button className={styles.paginationButton} onClick={() => changeVeryFirst()}>
                        &laquo;
                    </button>
                </div>
                <div>
                    <button className={styles.paginationButton} onClick={() => changePrev()}>
                        &#8249;
                    </button>
                </div>
                {nums.map((n, i) => (
                    <div key={i}>
                        <button
                            className={`${styles.paginationButton} ${
                                currPage === n ? `${styles.paginationButtonActive}` : ""
                            }`}
                            onClick={() => changeCurr(n)}
                        >
                            {n}
                        </button>
                    </div>
                ))}
                <div>
                    <button className={styles.paginationButton} onClick={() => changeNext()}>
                        &#8250;
                    </button>
                </div>
                <div>
                    <button className={styles.paginationButton} onClick={() => changeVeryLast()}>
                        &raquo;
                    </button>
                </div>
            </ul>
        </nav>
    );
};

export default Pagination;
