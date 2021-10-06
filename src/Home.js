import React, {useState, useEffect} from 'react'
import MyClock from '../component/Clock';
import { withRouter, Link } from "react-router-dom";
import moment from 'moment'
import { useQuery, useLazyQuery, gql, useSubscription, useMutation } from '@apollo/client';

const dateTime = new Date()






const Home = () => {
    document.title = "QUEUE APP";


    
    return (
        <>
            <div className="flex items-center justify-center">
                <div class="relative h-32 w-32 ...">
                    <div class="absolute left-0 top-2 border-2 border-gray-400 rounded  bg-blue-400">
                        <div className="flex items-center justify-center font-bold text-xl my-2 mx-3 ">
                            {moment(dateTime).format('MM')}
                        </div>
                        <div className="text-7xl font-thin font-sans bg-white px-5 py-4">
                            {moment(dateTime).format('D')}
                        </div> 
                    </div>
                </div>
                <div className="mx-52 font-bold font-sans text-gray-600	text-4xl	">HOME </div>
                <div class="relative h-32 w-32 ...">
                    <div class="absolute top-2 right-0">
                        <MyClock/>
                    </div>
                </div>
            </div>
            <div className="m-24">
                <div className="grid justify-items-center">
                    <Link className="m-6 bg-purple-500 active:bg-yellow-500 hover:text-gray-300 font-semibold p-2 rounded-lg  text-white" to='/Check'>CHECK YOUR QUEUE</Link>
                    <Link className="m-6 bg-purple-400 hover:text-gray-300 active:bg-yellow-500 font-semibold p-2 rounded-lg text-white" to='/Register'>REGISTER YOUR QUEUE</Link>
                    <Link className="m-6 hover:text-red-400 font-semibold p-2 rounded-lg" to='/List'>Go To List Queue</Link>
                </div>
            </div>
        </>
    )
}
export default withRouter(Home);

