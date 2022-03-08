import React, { useState, useEffect } from "react"
import FrontLoader from "../../Common/FrontLoader"
import AddUserForm from "../../View/admin/User/AddUserForm"
import UserList from "../../View/admin/User/UserList"
import userApi from "../../Api/admin/user"
import { validateAll } from "indicative/validator";
import ToastAlert from "../../Common/ToastAlert"
import { confirmAlert } from "react-confirm-alert"
import { Link as RouterLink, useNavigate, useParams } from 'react-router-dom';

function UserController() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false)
    const [modal, setModal] = useState(false)
    const [update, setUpdate] = useState(false)
    const [userList, setUserList] = useState([])
    const [state, setState] = useState({
        id: "",
        username: "",
        name: "",
        email: "",
        password: "",
        role: "",
        error: [],
        status: 1
    })
    const {
        username, name, error, email, password, role, status, id
    } = state;

    const adminAuthToken = localStorage.getItem('adminAuthToken');
    const CampaignAdminAuthToken = localStorage.getItem('CampaignAdminAuthToken');

    const resetForm = () => {
        setState({
            ...state,
            id: "",
            username: "",
            name: "",
            email: "",
            password: "",
            role: "",
            error: [],
            status: 1
        })
    }
    const setOpenModal = () => {
        resetForm()
        setModal(true)
    }

    useEffect(() => {
        (async () => {
            if(CampaignAdminAuthToken){
                navigate('/admin/Dashboard', { replace: true })
            }
            setLoading(true)
            const getUserList = await userApi.list(adminAuthToken)
            if (getUserList.data.success) {
                setUserList(getUserList.data.data)
            }
            setLoading(false)
        })()
    }, [update])

    const addUser = () => {
        const rules = {
            username: "required",
            name: "required",
            email: 'required|email',
            password: 'required|min:6',
            // cpassword: 'required|same:password',
            role: "required"

        }

        const message = {
            'email.required': 'Email is Requied.',
            'name.required': 'Name is Requied.',
            'email.email': 'please enter valid email.',
            'password.min': 'Password must be at least 6 characters',
            'password.required': 'Password is Requied.',
            // 'cpassword.required': 'Confirm Password is Requied.',
            // 'cpassword.same': 'Password and Confirm Password Must be Same',
            'username.required': 'Username is Requied.',
            'role.required': 'Role is Requied.',

        }
        validateAll(state, rules, message).then(async () => {
            const formaerrror = {};
            setState({
                ...state,
                error: formaerrror
            })
            let data = {}
            data.name = name
            data.username = username
            data.email = email
            data.role = role
            data.password = password
            data.status = status


            setLoading(true)
            const addUser = await userApi.add(adminAuthToken, data)
            if (addUser) {
                if (!addUser.data.success) {
                    setLoading(false)
                    ToastAlert({ msg: addUser.data.message, msgType: 'error' });
                } else {
                    setUpdate(!update)
                    setLoading(false)
                    ToastAlert({ msg: addUser.data.message, msgType: 'success' });
                    setModal(false)
                    resetForm()

                }

            } else {
                setLoading(false)
                ToastAlert({ msg: 'Something went wrong', msgType: 'error' });
            }


        }).catch(errors => {

            setLoading(false)
            const formaerrror = {};
            if (errors.length) {
                errors.forEach(element => {
                    formaerrror[element.field] = element.message
                });
            } else {
                ToastAlert({ msg: 'Something went wrong', msgType: 'error' });
            }

            setState({
                ...state,
                error: formaerrror
            })

        });

    }

    const deleteUser = (id) => {

        confirmAlert({
            title: 'Delete Record',
            message: 'Are you sure ?',
            buttons: [
                {
                    label: 'Yes',

                    onClick: async () => {
                        setLoading(true)
                        const deleteUser = await userApi.deleteUser(adminAuthToken, id)
                        if (deleteUser) {
                            if (!deleteUser.data.success) {
                                setLoading(false)
                                ToastAlert({ msg: deleteUser.data.message, msgType: 'error' });
                            } else {
                                setUpdate(!update)
                                setLoading(false)
                                ToastAlert({ msg: deleteUser.data.message, msgType: 'success' });

                            }

                        } else {
                            setLoading(false)
                            ToastAlert({ msg: 'Something went wrong', msgType: 'error' });
                        }

                    }
                },
                {
                    label: 'No',
                }
            ]
        });


    }

    const getUserRecord = (data) => {
        setState({
            ...state,
            id: data._id,
            username: data.username,
            name: data.name,
            email: data.email,
            role: data.role,
            status: data.status
        })
        setModal(true)

    }
    const updateUser = () => {

        const rules = {
            username: "required",
            name: "required",
            email: 'required|email',
            role: "required"

        }

        const message = {
            'email.required': 'Email is Requied.',
            'name.required': 'Name is Requied.',
            'email.email': 'please enter valid email.',
            'username.required': 'Username is Requied.',
            'role.required': 'Role is Requied.',

        }
        validateAll(state, rules, message).then(async () => {
            const formaerrror = {};
            setState({
                ...state,
                error: formaerrror
            })
            let data = {}
            data.name = name
            data.role = role
            if (password && password !== "") {
                data.password = password
            }
            data.status = status


            setLoading(true)
            const addUser = await userApi.updateUser(adminAuthToken, data, id)
            if (addUser) {
                if (!addUser.data.success) {
                    setLoading(false)
                    ToastAlert({ msg: addUser.data.message, msgType: 'error' });
                } else {
                    setUpdate(!update)
                    setLoading(false)
                    ToastAlert({ msg: addUser.data.message, msgType: 'success' });
                    setModal(false)
                    resetForm()

                }

            } else {
                setLoading(false)
                ToastAlert({ msg: 'Something went wrong', msgType: 'error' });
            }


        }).catch(errors => {

            setLoading(false)
            const formaerrror = {};
            if (errors.length) {
                errors.forEach(element => {
                    formaerrror[element.field] = element.message
                });
            } else {
                ToastAlert({ msg: 'Something went wrong', msgType: 'error' });
            }

            setState({
                ...state,
                error: formaerrror
            })

        });

    }




    const changevalue = (e) => {
        let value = e.target.value;
        if (e.target.name === 'username') {
            if (!/[^a-zA-Z0-9]/.test(e.target.value)) {
                setState({
                    ...state,
                    [e.target.name]: e.target.value
                })
            }
        } else {
            setState({
                ...state,
                [e.target.name]: value
            })
        }


    }


    return (
        <>
            <FrontLoader loading={loading} />
            <AddUserForm
                modal={modal}
                setModal={setModal}
                changevalue={changevalue}
                stateData={state}
                addUser={addUser}
                updateUser={updateUser}
            />
            <UserList
                userList={userList}
                setOpenModal={setOpenModal}
                deleteUser={deleteUser}
                getUserRecord={getUserRecord}

            />
        </>
    )

}
export default UserController