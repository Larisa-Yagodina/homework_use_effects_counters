import React, {useEffect} from "react";

export default function Vision(props) {

    const {additionalSum, additionalCounter} = props;

    useEffect(() => {
        console.log('Additional counter was changed')
    }, [props.additionalCounter])

    useEffect(() => {
        return () => {
            console.log('Component Visible was destroyed ')
        }
    }, [])

    useEffect(() => {
        console.log('Component Visible was opened')
    }, [])

    return (
        <div>
            <h2>Additional counter</h2>
            <button onClick={() => additionalSum(additionalCounter, -10)}> -10</button>
            {' '} {additionalCounter} {' '}
            <button onClick={() => additionalSum(additionalCounter, 10)}> +10</button>
        </div>
    )
}