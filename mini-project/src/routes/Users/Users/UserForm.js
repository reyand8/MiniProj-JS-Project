import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import {useEffect} from "react";
import {selectUserEdit} from "../store/selectors";
import {fetchOneUser, save} from "../store/actions";
import {Button, Form, Input, Space, Spin,} from "antd";

import '../index.css'
import {ArrowLeftOutlined} from "@ant-design/icons";

export default function UserForm() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const userEdit = useSelector(selectUserEdit)
    let {id} = useParams()

    useEffect(() => {
        if (id && !userEdit?.id) {
            dispatch(fetchOneUser(id))
        }
    }, [ dispatch, id, userEdit?.id])

    function onFinish(value) {
        const user = {
            ...userEdit,
            ...value,
        }
        dispatch(save(user))
        navigate('/users')
    }
    function onReturnBtnClick() {
        navigate('/users')
    }
    if (id && !userEdit?.id) {
        console.log(userEdit?.id)
        return (
            <div className='data-loading'>
                <Space>
                    <Spin tip="Loading" size="large">
                        <div className="loading-information" />
                    </Spin>
                </Space>
            </div>
        )
    }
    return (
                <Form className='user-form'
                    name="basic"
                    autoComplete="off"
                    initialValues={userEdit}
                    onFinish={onFinish}>
                    <div className='btn-return'>
                        <Button onClick={() => onReturnBtnClick()}>
                            <ArrowLeftOutlined />
                            Return
                        </Button>
                    </div>
                    <div className='user-form-avatar'>
                        <Form.Item
                            name="avatar">
                            <img src={userEdit.avatar} alt=""/>
                        </Form.Item>
                    </div>
                    <div>
                        <p>Name</p>
                        <Form.Item
                            name="firstName"
                            style={{
                                width: 250,
                            }}
                            rules={[
                                {
                                    min: 4,
                                    message: 'Your name must be longer than 3 symbols!',
                                },
                                {
                                    required: true,
                                    message: 'Please input your name!',
                                },
                            ]}>
                            <Input />
                        </Form.Item>
                    </div>
                    <div>
                    <p>Surname</p>
                    <Form.Item
                        name="lastName"
                        style={{
                            width: 250,
                        }}
                        rules={[
                            {
                                min: 4,
                                message: 'Your surname must be longer than 3 symbols!',
                            },
                            {
                                required: true,
                                message: 'Please input your surname!',
                            },
                        ]}>
                        <Input />
                    </Form.Item>
                    </div>

                    <div>
                        <p>Email</p>
                        <Form.Item name="email" style={{
                            width: 250,
                        }}
                                   rules={[
                                       {
                                           required: true,
                                           type: "email",
                                           message: "Your email is not valid",
                                       },
                                   ]}>
                            <Input />
                        </Form.Item>
                        <Form.Item justify='center'
                                   wrapperCol={{span: 10}}>
                            <Button className='user-btn' htmlType="submit">
                                Save
                            </Button>
                        </Form.Item>
                    </div>
                </Form>
    )
}
