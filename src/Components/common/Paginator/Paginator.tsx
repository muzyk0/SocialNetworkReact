import React from "react";
import styles from "./Paginator.module.css";
import cn from "classnames";

type PropsType = {
    totalItemsCount: number;
    pageSize: number;
    currentPage: number;
    portionSize?: number;
    onPageChanged: (page: number) => void;
};

const Paginator: React.FC<PropsType> = (props) => {
    const {
        totalItemsCount,
        pageSize,
        currentPage,
        portionSize = 10,
        onPageChanged,
    } = props;

    let [portionNumber, setPortionNumber] = React.useState(1);

    let pagesCount = Math.ceil(totalItemsCount / pageSize);
    const pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return (
        <div className={cn(styles.paginator)}>
            {portionNumber > 1 && (
                <button
                    onClick={() => {
                        setPortionNumber(portionNumber - 1);
                    }}
                >
                    PREV
                </button>
            )}

            {pages
                .filter(
                    (p) =>
                        p >= leftPortionPageNumber &&
                        p <= rightPortionPageNumber
                )
                .map((p) => {
                    return (
                        <span
                            className={cn(
                                {
                                    [styles.selectedPage]: currentPage === p,
                                },
                                styles.pageNumber
                            )}
                            key={p}
                            onClick={(e) => {
                                onPageChanged(p);
                            }}
                        >
                            {p}
                        </span>
                    );
                })}
            {portionCount > portionNumber && (
                <button
                    onClick={() => {
                        setPortionNumber(portionNumber + 1);
                    }}
                >
                    NEXT
                </button>
            )}
        </div>
    );
};

export default Paginator;
