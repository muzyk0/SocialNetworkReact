import React from 'react';
import styles from '../../Users/UsersContainer.module.css'

type PropsType = {
    totalCount: number,
    pageSize: number
    currentPage: number
    onPageChanged: (page: number) => void
}

const Paginator: React.FC<PropsType> = (props) => {
    const {
        currentPage,
        onPageChanged,
        totalCount,
        pageSize
    } = props


    let pagesCount = Math.ceil(totalCount / pageSize)
    const pages = []

    for (let i = 1; i <= 30; i++) {
        pages.push(i)
    }

    return <>

        <div>
            {pages.map(page => {
                return <span
                    key={page}
                    className={currentPage === page ? styles.selectedPage : ''}
                    onClick={() => {
                        onPageChanged(page)
                    }}
                >{page} </span>
            })}

        </div>
    </>
}

export default Paginator