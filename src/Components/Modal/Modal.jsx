import React from 'react';
import classNames from 'classnames';

import style from './modal.module.scss';

const Modal = ({
    active,
    setActive,
    children,
}) => {

    const modeModal = active && style.active;
    const modeContent = active && style.activeContent;

    const classModal = classNames(style.modal, modeModal);
    const classContent = classNames(style.modalContent, modeContent);

    return(
        <div className={classModal} onClick={() => setActive(false)}>
            <div className={classContent} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
}

export default Modal;
