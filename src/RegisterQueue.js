import React, {useState, useEffect} from 'react'
import MyClock from '../component/Clock';
import { withRouter, Link, useHistory } from "react-router-dom";
import moment from 'moment'
import {gql, useMutation } from '@apollo/client';


const dateTime = new Date()

const insertQueue = gql `mutation MyMutation($NAME: String!, $AGE: Int!, $SEX: String!, $PHONE: String!, $UTILITIES: String!) {
    insert_QUEUE_one(object: {NAME: $NAME, PHONE: $PHONE, SEX: $SEX, UTILITIES: $UTILITIES, AGE: $AGE}) {
        Created_At
        ID
        NAME
        PHONE
        SEX
        UTILITIES
        AGE
        }
    }`;

function RegisterQueue(props) {
    document.title = "REGISTER";
    const history = useHistory();
    const [insert, {data}] = useMutation(insertQueue);

    const [state, setState] = useState({
        id: 0,
        nama: "",
        creatAt: new Date(),
        umur: 0,
        gender: "",
        noHP: "",
        keperluan: "",
    })

    const onChange = (e) => {
        setState({
        ...state,
        [e.target.name]: e.target.value,
        })
    }
    
    useEffect( () => {
        if (data?.insert_QUEUE_one.ID){
            history.push("/Detail", {id: data?.insert_QUEUE_one.ID})
        }
    }, [data])

    const handleSubmit = (e) => {
        if (state.nama && state.umur && state.gender && state.noHP) {
            const newData = {
                nama: state.nama,
                umur: state.umur,
                gender: state.gender,
                noHP: state.noHP,
                keperluan: state.keperluan,
            }
            insert({variables: {NAME: state.nama ,AGE: state.umur ,SEX: state.gender, PHONE:state.noHP, UTILITIES:state.keperluan}})
            setState({
                ...state,
                nama: "",
                umur: "",
                gender: "",
                noHP: "",
                keperluan: "",
                
                })
            
            } else {alert("Data masih ada yang kosong")
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
            <div className="mx-52 font-bold font-sans text-gray-600	text-4xl">REGISTER QUEUE </div>
            <div class="relative h-32 w-32 ...">
                <div class="absolute top-0 right-0 h-16 w-16 ...">
                    <MyClock/>
                </div>
            </div>
        </div>
        <div className="flex items-center justify-center">
            <div onSubmit={handleSubmit} >
                <div className="my-4">
                    <p className="font-semibold text-gray-700">NAME</p>
                    <input type="text" className="bg-gray-200 p-4 rounded-lg  w-96" placeholder="Input your name here ..." value={state.nama} name="nama" onChange={onChange} />
                </div>
                <div className="my-4">
                    <p className="font-semibold text-gray-700">PHONE</p>
                    <input type="number" className="bg-gray-200 p-4 rounded-lg w-96" placeholder="Input your phone number here ..." value= {state.noHP} name="noHP" onChange={onChange} />
                </div>
                <div className="my-4">
                    <p className="font-semibold text-gray-700">AGE</p>
                    <input type="number" className="bg-gray-200 p-4 rounded-lg w-96" placeholder="Umur anda ..." value={state.umur} name="umur" onChange={onChange} />
                </div>
                <div className="my-4">
                    <p className="font-semibold text-gray-700">SEX</p>
                    <select className="bg-gray-200 p-4 rounded-lg w-96" onChange={onChange} name="gender">
                        <option value="-" disabled selected>SELECT</option>
                        <option value="MALE" >MALE</option>
                        <option value="FEMALE">FEMALE</option>
                    </select>
                </div>
                <div className="my-4">
                    <p className="font-semibold text-gray-700">UTILITIES</p>
                    <input type="text" className="bg-gray-200 p-4 rounded-lg w-96" placeholder="What do you need ..." value={state.keperluan} name="keperluan" onChange={onChange} />
                </div>
                <div className="my-4 ">
                    <button className="rounded-lg p-2 bg-green-300 hover:bg-green-500 text-white font-bold" onClick={handleSubmit}>Submit</button>
                </div>
                <div className="my-4 text-center">
                    <Link className="my-10  font-bold font-sans text-gray-500 hover:text-gray-800	text-2xl" to='/'>HOME</Link>
                </div>
                

                
            </div>
                
            

        </div>
        </>
    )
}
export default withRouter(RegisterQueue);

