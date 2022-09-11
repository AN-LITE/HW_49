import React from "react";

const types = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark']


class Alert extends React.Component{

    render() {
        const {type,text} = this.props
        const aboutType = types.includes(`${type}`) ? `alert alert-${type}` : `alert alert-warning`;

        return (

            <div className={aboutType}
                 role="alert"
                 >{text}
            </div>
        )
    }
}
export default Alert;


