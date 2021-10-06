import Data from "./Data";

    const List = props => {
    return (
        <div>
            <table cellPadding="40px" cellSpacing="" style={{margin: "auto"}}>
                <thead className="text-center text-gray-600	 font-bold bg-green-100	 " >
                    <td className=" rounded-l-2xl	">No. Queue</td>
                    <td className=" ">NAME</td>
                    <td className="">PHONE</td>
                    <td className=" ">SEX</td>
                    <td className="">UTILITIES</td>
                    <td className="">AGE</td>
                    <td className="rounded-r-2xl	">ESTIMATED</td> 
                    {/* <td bgcolor="white" className="removeBorder"></td> */}
                </thead>
                {props.data?.map((item,index )=> (
                    <Data
                        key={item.id}
                        data={item}
                        index={index+1}
                    />
                ))}
            </table>
        </div>
        
    )
}

export default List;