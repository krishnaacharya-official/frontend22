import React from 'react';
import { Modal } from "react-bootstrap"
import { Button } from '@mui/material';

export default function AddUserForm(props) {
    let stateData = props.stateData
    return (
        <>
            <Modal
                size="lg"
                show={props.modal}
                onHide={() => props.setModal(false)}
                aria-labelledby="example-modal-sizes-title-lg"
                animation={false}
                style={{ zIndex: "999999" }}

            >
                <Modal.Header >
                    <Modal.Title id="example-modal-sizes-title-lg">
                        {stateData?.id ? "UpDate User" : "Add User"}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="form-group row">
                        <label className="col-form-label col-sm-2 ">Role</label>
                        <div className="col-sm-10">
                            <select className="form-control" onChange={(e) => { props.changevalue(e) }} id="role" name="role">
                                <option selected disabled>Select Role</option>
                                <option selected={stateData ? stateData.role === 2 ? "selected" : "" : ""} value="2">Listener</option>
                                <option selected={stateData ? stateData.role === 3 ? "selected" : "" : ""} value="3">Musician</option>
                            </select>
                            {stateData.error && stateData.error.role && <p className="error">{stateData.error ? stateData.error.role ? stateData.error.role : "" : ""}</p>}

                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="name" className="col-sm-2 col-form-label">Name</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control form-control-plaintext" name='name' id="name" value={stateData.name} onChange={(e) => { props.changevalue(e) }} />

                            {stateData.error && stateData.error.name && <p className="error">{stateData.error ? stateData.error.name ? stateData.error.name : "" : ""}</p>}
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="username" className="col-sm-2 col-form-label">Username</label>
                        <div className="col-sm-10">
                            <input type="text"disabled={stateData?stateData.id ? true : false:false} className="form-control form-control-plaintext" name='username' id="username" value={stateData.username} onChange={(e) => { props.changevalue(e) }} />

                            {stateData.error && stateData.error.username && <p className="error">{stateData.error ? stateData.error.username ? stateData.error.username : "" : ""}</p>}
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-10">
                            <input type="email" disabled={stateData?stateData.id ? true : false:false} className="form-control form-control-plaintext" id="email" name="email" value={stateData.email} onChange={(e) => { props.changevalue(e) }} />

                            {stateData.error && stateData.error.email && <p className="error">{stateData.error ? stateData.error.email ? stateData.error.email : "" : ""}</p>}
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="password" className="col-sm-2 col-form-label">Password</label>
                        <div className="col-sm-10">
                            <input type="password" className="form-control" id="password" name='password' value={stateData.password} onChange={(e) => { props.changevalue(e) }} />

                            {stateData.error && stateData.error.password && <p className="error">{stateData.error ? stateData.error.password ? stateData.error.password : "" : ""}</p>}
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-form-label col-sm-2 ">Status</label>
                        <div className="col-sm-10">
                            <select className="form-control" onChange={(e) => { props.changevalue(e) }} id="status" name="status">
                                <option selected={stateData ? stateData.status === 1 ? "selected" : "" : ""} value="1">Active</option>
                                <option selected={stateData ? stateData.status === 0 ? "selected" : "" : ""} value="0">InActive</option>
                            </select>

                            {stateData.error && stateData.error.status && <p className="error">{stateData.error ? stateData.error.status ? stateData.error.status : "" : ""}</p>}
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="btnWarning" className='btnDanger' onClick={() => props.setModal(false)}>Close</Button>&nbsp;
                    {stateData?.id ? <Button variant="contained" onClick={() => props.updateUser()}>Update</Button> : <Button variant="contained" onClick={() => props.addUser()}>Save</Button>}
                </Modal.Footer>
            </Modal>
        </>
    )


}