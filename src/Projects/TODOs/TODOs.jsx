import React, { useState } from 'react'
import './Todo.css'
import { MdDeleteForever } from "react-icons/md";
import { BiSolidEditAlt } from "react-icons/bi";
import { useDispatch, useSelector } from 'react-redux';


function TODOs() {
    const [task , setTask] = useState("")
    const dispatch = useDispatch()
    

    const newtasks = useSelector((store) => store.taskReducer)
    //console.log(newtasks);
    const handelTask = ()=>{
        dispatch({type:"add", payload:task})
        setTask("")
    }
    const handelDelete=(id)=>{
        dispatch({type:"del",payload:id})
    }
   
  return (
    <>
        <div className='one'>
            <div class="card" style={{width:"25rem"}}>
                <div class="card-header">
                    ToDo List
                </div>
                <div class="card-body">
                    <div className="row">
                        <div class="input-group mb-3">
                            <input type="text" class="form-control" placeholder="Add your task"
                            onChange={(e)=> setTask(e.target.value)} value={task}
                            />
                            <button type="button" class="btn btn-info"
                            onClick={handelTask}
                            >ADD</button>
                        </div>
                    </div>
                    {
                        newtasks.map(ele=>{
                            return(
                                <div className="card" key={ele.id}>
                        <div className="card-body">
                            <div className="oneRow">
                                <div className="col1">
                                    <input class="form-check-input me-1" type="checkbox" value="" id="firstCheckbox"/>
                                    <label class="form-check-label" for="firstCheckbox">{ele.task}</label>
                                </div>
                                <div className="col2">
                                    <button className='btn btn-danger mx-1' 
                                    onClick={()=> handelDelete(ele.id)}
                                    ><MdDeleteForever /></button>
                                    {/* edit */}
                                            <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal"
                                            
                                            >
                                            <BiSolidEditAlt />
                                            </button>

                                            {/* modal */}
                                            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                            <div class="modal-dialog">
                                                <div class="modal-content">
                                                <div class="modal-header">
                                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Edit Task</h1>
                                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div class="modal-body">
                                                    {/* textarea */}
                                                    <textarea class="form-control" name="task" id="task" ></textarea>
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                    <button type="button" class="btn btn-primary">Save changes</button>
                                                </div>
                                                </div>
                                            </div>
                                            </div>
                                </div>                        
                            </div>
                        </div>
                    </div>
                            )
                        })
                    }
                   
                        
                </div>
            </div>
        </div>
       
    </>
  )
}

export default TODOs