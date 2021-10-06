const Data = (props) => {

    const { ID, NAME, PHONE, SEX, UTILITIES, AGE, Created_At } = props.data

    return (
        <tr className=" text-center"	>
            <td className="	">{props.index}</td>
            <td>{NAME}</td>
            <td>{PHONE}</td>
            <td>{SEX}</td>
            <td>{UTILITIES}</td>
            <td>{AGE}</td>
            <td>{props.index*2}0 Minutes</td>
        </tr>
    )
}

export default Data;