import React, { Fragment } from 'react'


const Btn = props =>{
    return(
        <Fragment>
                <button className={`btn ${props.classname}`}>{props.title}</button>
        </Fragment>
    )
}
export default Btn