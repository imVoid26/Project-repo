import React from 'react'

function Addtask() {
  return (
    <>
        <div className="card">
                        <div className="card-body">
                            <div >
                                <div className="col1">
                                    <input class="form-check-input me-1" type="checkbox" value="" id="firstCheckbox"/>
                                    <label class="form-check-label" for="firstCheckbox">First checkbox</label>
                                </div>
                                <div className="col2">
                                    <button className='btn btn-danger mx-1'><MdDeleteForever /></button>
                                    <button className='btn btn-warning'><BiSolidEditAlt /></button>
                                </div>                        
                            </div>
                        </div>
                    </div>     
    </>
  )
}

export default Addtask