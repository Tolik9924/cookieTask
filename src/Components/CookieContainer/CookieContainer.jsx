import React from 'react';
import Button from '../Button/Button';

import style from './cookie.module.scss';

const CookieContainer = () => {

    let arrCookie = document.cookie.split(";");

    const deleteCookie = (name) => {
        document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    }

    return (
        <div className={style.cookieContainer}>
            <div className={style.span}>
                <span className={style.wordLeft}>Name</span>
                <span className={style.wordRight}>Value</span>
            </div>
            {arrCookie.map((item) => {
                const arrItem = item.split("=");
                console.log(arrItem);
                return (
                    <div className={style.cookieItem}>
                        <div className={style.name}>
                            {arrItem[0]}
                        </div>
                        <div className={style.value}>
                            {arrItem[1]}
                        </div>
                        <div className={style.button}>
                            {arrItem.length !== 1 ?
                                <Button onClick={() => deleteCookie(arrItem[0])}>
                                    delete cookie
                                </Button>
                                : null}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default CookieContainer;
