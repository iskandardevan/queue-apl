import Data from "./Data";

    const List = props => {
    return (
        <div>
            <table cellPadding="20px" cellSpacing="" style={{margin: "auto"}}>
                <thead >
                    <td className="bg-gray-500 rounded-lg">NAME</td>
                    <td className="bg-gray-500 rounded-lg">PHONE</td>
                    <td className="bg-gray-500 rounded-lg">SEX</td>
                    <td className="bg-gray-500 rounded-lg">UTILITIES</td>
                    <td className="bg-gray-500 rounded-lg">AGE</td>
                    <td className="bg-gray-500 rounded-lg">CREATED AT</td> 
                    <td bgcolor="white" className="removeBorder"></td>
                </thead>
                {props.data?.map(item => (
                    <Data
                        key={item.id}
                        data={item}
                    />
                ))}
            </table>
        </div>
        
    )
}

export default List;