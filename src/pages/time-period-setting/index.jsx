import './index.less';
import { NavBar, DatePicker, Form, Button } from 'antd-mobile';
import { useNavigate } from 'react-router-dom';
import { CloseCircleFill } from 'antd-mobile-icons'
import { useState } from 'react';
import dayjs from 'dayjs';
function TimePeriodSetting() {
    const [form] = Form.useForm();
    const navigate = useNavigate();
    const [pickerVisible, setPickerVisible] = useState(false);
    const [endPickerVisible, setEndPickerVisible] = useState(false);
    const back = () => {
        navigate(-1)
    }
    const onFinish = () => {

    }
    return <div className="main">
        <NavBar className='top' onBack={back}>时段设置</NavBar>
        <Form mode='card'
            onFinish={onFinish}
            form={form}
            layout='horizontal'
            footer={
                <Button block type='submit' color='primary' size='large'>
                    保存
                </Button>
            }>
            <Form.Item
                name='startTime'
                label='起始时间'
                trigger='onConfirm'
                arrow={
                    form.getFieldValue('startTime') ? (
                        <CloseCircleFill
                            style={{
                                fontSize: 14,
                            }}
                            onClick={e => {
                                e.stopPropagation()
                                form.setFieldsValue({ startTime: null })
                            }}
                        />
                    ) : (
                        true
                    )
                }
                onClick={() => {
                    setPickerVisible(true)
                }}
            >
                <DatePicker
                    visible={pickerVisible}
                    precision='minute'
                    onClose={() => {
                        setPickerVisible(false)
                    }}
                >
                    {value =>
                        value ? dayjs(value).format('YYYY-MM-DD hh:mm:ss') : <div style={{ color: '#C0C4CC' }}>请选择日期</div>
                    }
                </DatePicker>
            </Form.Item>
            <Form.Item
                name='endTime'
                label='终止时间'
                trigger='onConfirm'
                arrow={
                    form.getFieldValue('endTime') ? (
                        <CloseCircleFill
                            style={{
                                fontSize: 14,
                            }}
                            onClick={e => {
                                e.stopPropagation()
                                form.setEndFieldsValue({ endTime: null })
                            }}
                        />
                    ) : (
                        true
                    )
                }
                onClick={() => {
                    setEndPickerVisible(true)
                }}>
                <DatePicker
                    visible={endPickerVisible}
                    precision='minute'
                    onClose={() => {
                        setEndPickerVisible(false)
                    }}
                >
                    {value =>
                        value ? dayjs(value).format('YYYY-MM-DD hh:mm:ss') : <div style={{ color: '#C0C4CC' }}>请选择日期</div>
                    }
                </DatePicker>
            </Form.Item>
            {/* <Form.Item
                name='endTime'
                label='终止时间'
                trigger='onConfirm'
                arrow={
                    form.getFieldValue('endTime') ? (
                        <CloseCircleFill
                            style={{
                                fontSize: 14,
                            }}
                            onClick={e => {
                                e.stopPropagation()
                                form.setFieldsValue({ endTime: null })
                            }}
                        />
                    ) : (
                        true
                    )
                }
                onClick={() => {
                    setPickerVisible(true)
                }}
            >
                <DatePicker
                    visible={pickerVisible}
                    precision='minute'
                    onClose={() => {
                        setPickerVisible(false)
                    }}
                >
                    {value =>
                        value ? dayjs(value).format('YYYY-MM-DD') : <div style={{ color: '#C0C4CC' }}>请选择日期</div>
                    }
                </DatePicker>
            </Form.Item> */}
        </Form>
    </div>
}

export default TimePeriodSetting