import React, {useState, useEffect} from 'react'
import MyClock from '../component/Clock';
import { withRouter, Link, useHistory } from "react-router-dom";
import moment from 'moment'
import { useQuery, useLazyQuery, gql, useSubscription, useMutation } from '@apollo/client';
const dateTime = new Date()

const CheckByID = gql `query MyQuery($_eq: Int!) {
    QUEUE(where: {ID: {_eq: $_eq}}) {
        NAME
        PHONE
        SEX
        UTILITIES
        ID
        Created_At
        AGE
        }
    }`;

function CheckQueue(props) {
    document.title = "CHECK";
    const history = useHistory();
    const[check, {data, loading}] = useLazyQuery(CheckByID);
    

    const [state, setState] = useState({
        id: 0,
    })

    const onChange = (e) => {
        setState({
        ...state,
        [e.target.name]: e.target.value,
        })
    }

    useEffect( () => {
        console.log(data)
        if (data){
            if (data?.QUEUE.length>0){
                history.push("/Detail", {id: data?.QUEUE[0].ID})
            } else{
                alert("error")
            }
            console.log(data)
        }
        

    }, [data])

    

    const handleSubmit = (e) => {
        if (state.id) {
            check({variables: {_eq: state.id}})
                setState({
                ...state,
                id:0,
                nama: "",
                creatAt: new Date(),
                umur: 0,
                gender: "",
                noHP: "",
                keperluan: "",
                })
            } else {alert("ID masih kosong")
            }   
    }

    return (
        <>
            <div className="flex items-center justify-center">
                <div class="relative h-32 w-32 ...">
                    <div class="absolute left-0 top-2 border-2 border-gray-400 rounded bg-blue-300">
                        <div className="flex items-center justify-center font-bold text-xl my-2 mx-3 ">
                                {moment(dateTime).format('MM')}
                            </div>
                            <div className="text-7xl font-thin font-sans bg-white px-5 py-4">
                                {moment(dateTime).format('D')}
                            </div> 
                        </div>
                    </div>
                <div className="mx-52 font-bold font-sans text-gray-600	text-4xl">CHECK QUEUE </div>
                <div class="relative h-32 w-32 ...">
                    <div class="absolute top-0 right-0 h-16 w-16 ...">
                        <MyClock/>
                    </div>
                </div>
            </div>

        <div className="flex items-center justify-center">
            <div onSubmit={handleSubmit} >
                <div>
                    <div className="my-4">
                        <p className="font-bold text-gray-700">ID</p>
                        <input type="text" className=" bg-gray-200 p-4 rounded-lg" placeholder="Input your ID here ..." name="id" value={state.id} onChange={onChange} />
                    </div>
                    <div className="my-4">
                        <button className="rounded-lg p-4 bg-green-300 hover:bg-green-500 text-white font-bold" onClick={handleSubmit}>Submit</button>
                        <Link className="items-center justify-center m-10 font-bold font-sans text-gray-500 hover:text-gray-800	text-2xl" to='/'>HOME</Link>
                    </div>
                </div>
            </div>
            

        </div>

        </>
    )
}
export default withRouter(CheckQueue);

