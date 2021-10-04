const Data = (props) => {

    const { ID, NAME, PHONE, SEX, UTILITIES, AGE, Created_At } = props.data

    return (
        <tr>
            <td>{NAME}</td>
            <td>{PHONE}</td>
            <td>{SEX}</td>
            <td>{UTILITIES}</td>
            <td>{AGE}</td>
            <td>{Created_At }</td>
        </tr>
    )
}

export default Data;