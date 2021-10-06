import React, {useState, useEffect, } from 'react'
import MyClock from '../component/Clock';
import { withRouter, Link, useLocation, useParams, useHistory } from "react-router-dom";
import moment from 'moment'
import { useQuery, useLazyQuery, gql, useSubscription, useMutation } from '@apollo/client';
import List from '../component/List';
import DetailList from '../component/CheckData';
import DetailData from '../component/DetailData';

const dateTime = new Date()

const getDetail = gql `subscription MySubscription($_eq: Int!) {
    QUEUE(where: {ID: {_eq: $_eq}}) {
        AGE
        Created_At
        NAME
        ID
        PHONE
        SEX
        UTILITIES
        }
    }`;

const editQueue = gql `mutation MyMutation($ID: Int!, $SEX: String!, $UTILITIES: String!, $PHONE: String!, $NAME: String!, $AGE: Int!) {
    update_QUEUE_by_pk(pk_columns: {ID: $ID}, _set: {AGE: $AGE, NAME: $NAME, SEX: $SEX, PHONE: $PHONE, UTILITIES: $UTILITIES}) {
        AGE
        Created_At
        NAME
        UTILITIES
        SEX
        PHONE
        }
    }`;

const deleteQueue = gql `mutation MyMutation($ID: Int!) {
    delete_QUEUE_by_pk(ID: $ID) {
        AGE
        Created_At
        ID
        NAME
        PHONE
        SEX
        UTILITIES
        }
    }`;

// const editQueue = gql `mutation MyMutation($AGE: Int!, $NAME: String!, $PHONE: String!, $SEX: String!, $UTILITIES: String!) {
//     update_QUEUE_by_pk(pk_columns: {}, _set: {AGE: $AGE, NAME: $NAME, PHONE: $PHONE, SEX: $SEX, UTILITIES: $UTILITIES}) {
//         AGE
//         Created_At
//         ID
//         NAME
//         PHONE
//         SEX
//         UTILITIES
//         }
//     }
//     `;
    
const DetailQueue = () => {
    document.title = "DETAIL QUEUE";
    // const [Id, setId] = useState(0);
    // const [data, setData] = useState([]);
    // const { data: DataQ, loading } = useSubscription(getQueue);
    const [editQ] = useMutation(editQueue);
    const [deleteQ] = useMutation(deleteQueue);
    const location = useLocation();
    const {data: DataDetail, loading} = useSubscription(getDetail, {variables: {_eq: location.state.id}});
    const id= location.state.id

    const deleteData = (id) => {
        deleteQ({variables: {
            ID: id
        }});
    }

    const updateData = (id) => {
        const item = DataDetail.QUEUE.find((item) => item.ID === id)
        const nameChange = prompt("Nama baru", item.NAME)
        const ageChange = prompt("umur baru", item.AGE)
        const sexChange = prompt("sex baru", item.SEX)
        const utilitiesChange = prompt("utilities baru", item.UTILITIES)
        const phoneChange = prompt("nomer baru", item.PHONE)
        if (nameChange){
            editQ({
                variables: {ID: id, NAME: nameChange, AGE: ageChange, SEX: sexChange, UTILITIES:utilitiesChange, PHONE:phoneChange}
            })

        }


    }

    if (loading) {
        return ("Loading ...")
    }
        console.log(DataDetail);
    

    return (
        <>
            <div className="flex items-center justify-center">
                <div class="relative h-32 w-32 ...">
                    <div class="absolute left-0 top-2 border-2 border-gray-400 rounded w-  bg-blue-300">
                        <div className="flex items-center justify-center font-bold text-xl my-2 mx-3 ">
                            {moment(dateTime).format('MM')}
                        </div>
                        <div className="text-7xl font-thin font-sans bg-white px-5 py-4">
                            {moment(dateTime).format('D')}
                        </div> 
                    </div>
                </div>
                <div className="mx-52 font-bold font-sans text-gray-600	text-4xl	">DETAILS QUEUE</div>
                <div class="relative h-32 w-32 ...">
                    <div class="absolute top-2 right-0">
                        <MyClock/>
                    </div>
                </div>
            </div>
            <div className="text-center flex items-center justify-center ">
                <div className=" m-4" >
                    <Link className="hover:bg-yellow-300 rounded-lg w-40 h-50 font-medium text-xl	" to="/List"  onClick={() => deleteData(id)} >
                        Cancel
                    </Link>
                    
                </div>
                <div className=" m-4">
                    <button className="hover:bg-yellow-300 rounded-lg w-40 h-50 font-medium text-xl	" onClick={() => updateData(id)} >
                        Edit
                    </button>
                </div>
                
            </div>
            <div className="flex items-center justify-center py-8 ">
                
                {DetailData && <DetailData
                    data = {DataDetail}
                    
                />}
                
            </div>
            
            <div className="my-4 text-center">
                        <Link className="items-center justify-center  font-bold font-sans  text-gray-500 hover:text-gray-800	text-2xl" to='/'>HOME</Link>
                    </div>
            
        </>
    )
}
export default withRouter(DetailQueue);
