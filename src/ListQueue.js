import React, {useState, useEffect} from 'react'
import MyClock from '../component/Clock';
import { withRouter, Link } from "react-router-dom";
import moment from 'moment'
import { useQuery, useLazyQuery, gql, useSubscription, useMutation } from '@apollo/client';
import List from '../component/List';

const dateTime = new Date()

const getQueue = gql `subscription MySubscription {
    QUEUE(order_by: {Created_At: asc}) {
        NAME
        PHONE
        SEX
        UTILITIES
        ID
        Created_At
        AGE
        }
    }`;
    
const ListQueue = () => {
    document.title = "QUEUE LIST";
    const [data, setData] = useState([]);
    const { data: DataQ, loading } = useSubscription(getQueue);

    useEffect( () => {
        setData(DataQ?.QUEUE);
    }, [DataQ]) 


    if (loading) {
        return ("Loading ...")
    }

    return (
        <>
            <div className="flex items-center justify-center">
                <div class="relative h-32 w-32 ...">
                    <div class="absolute left-0 top-2 border-2 border-gray-400 rounded  bg-blue-300">
                        <div className="flex items-center justify-center font-bold text-xl my-2 mx-3 ">
                            {moment(dateTime).format('MM')}
                        </div>
                        <div className="text-7xl font-thin font-sans bg-white px-5 py-4">
                            {moment(dateTime).format('D')}
                        </div> 
                    </div>
                </div>
                <div className="mx-52 font-bold font-sans text-gray-600	text-4xl	">LIST QUEUE</div>
                <div class="relative h-32 w-32 ...">
                    <div class="absolute top-2 right-0">
                        <MyClock/>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-center py-16">
                
                {loading?<p>Loading data</p> : <List
                    data={data}
                />}
            </div>

            <div className="flex items-center justify-center">
                <Link className="flex items-center justify-center m-10 font-bold font-sans text-gray-600 hover:text-red-400 text-2xl" to='/'>HOME</Link>
            </div>
            
            
        </>
    )
}
export default withRouter(ListQueue);
