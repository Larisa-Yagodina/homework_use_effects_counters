import React, {useEffect} from "react";

export default function Counter(props) {

    useEffect(() => {
        console.log('Component Counter did Mount')
    }, [])

    return (
        <div>
            <h2>Counter</h2>
            <button onClick={() => props.sum(props.count, -1)}> -1</button>
            {' '} {props.count} {' '}
            <button onClick={() => props.sum(props.count, 1)}> +1</button>
        </div>
    )
}