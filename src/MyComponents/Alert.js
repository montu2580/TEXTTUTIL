import React from 'react'

export default function Alert(props) {

    // const capitalize = (word) => {
    //     const lower = word.toLowerCase();
    //     return lower.cahrAt[0].toUpperCase() + lower.slice(1);
    // }


    return (
        // below syntax m ageer 1st condition (props.alert) true hui tho aage evaluate hoga nhi tho nhi hoga....ye condition lgahi bcz props.alert initialy to null h na
        <div style={{height:'50px'}}>
        {    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert" >
                <strong>{props.alert.type}</strong>:{props.alert.msg}
                {/* <strong>{capitalize(props.alert.type)}</strong>:{props.alert.msg} -->capitalize nhi kr pa rha  */}
            </div>}

        </div>
    )
}
