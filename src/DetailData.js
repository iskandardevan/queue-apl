
import { Link } from "react-router-dom";
const DetailData = (props) => {

    const { ID, NAME, PHONE, SEX, UTILITIES, AGE, Created_At } = props.data.QUEUE[0]

    return (
        <>
        <div className="flex items-center justify-center">
            <div>
                
                    <div className="my-4 ">
                        <p className="font-semibold text-gray-700">ID</p>
                        <div className="  w-96 bg-gray-200 p-4 rounded-lg">
                            {ID}
                        </div>
                    </div>
                    <div className="my-4 ">
                        <p className="font-semibold text-gray-700">NAME</p>
                        <div className=" w-96 bg-gray-200 p-4 rounded-lg">
                            {NAME}
                        </div >
                    </div>
                    <div className="my-4">
                        <p className="font-semibold text-gray-700">PHONE</p>
                        <div className=" w-96 bg-gray-200 p-4 rounded-lg">
                            {PHONE}
                        </div>
                    </div>
                    <div className="my-4">
                        <p className="font-semibold text-gray-700">SEX</p>
                        <div className=" w-96 bg-gray-200 p-4 rounded-lg">
                            {SEX}
                        </div>
                    </div>
                    
                    <div className="my-4">
                        <p className="font-semibold text-gray-700">AGE</p>
                        <div className=" w-96 bg-gray-200 p-4 rounded-lg">
                            {AGE}
                        </div>
                    </div>
                    <div className="my-4">
                        <p className="font-semibold text-gray-700">UTILITIES</p>
                        <div className=" w-96 bg-gray-200 p-4 rounded-lg">
                            {UTILITIES}
                        </div>
                    </div>
                    <div className="my-4">
                        <p className="font-semibold text-gray-700">Created At</p>
                        <div className=" w-96 bg-gray-200 p-4 rounded-lg">
                            {Created_At}
                        </div>  
                    </div>
                
                    <div className="my-8">
                        <Link className="rounded-lg  p-4 bg-green-300 hover:bg-green-500 text-white font-bold" to="/List" >OK</Link>
                    </div>
                    
            </div>
        </div>
        
            
        </>
    )
}

export default DetailData;