import './index.less';
import { NavBar, CalendarPicker, Form, Button } from 'antd-mobile';
import { useNavigate } from 'react-router-dom';
import { CloseCircleFill } from 'antd-mobile-icons'
import { useState } from 'react';
import dayjs from 'dayjs';
function TimePeriodSetting() {
    const [form] = Form.useForm();
    const navigate = useNavigate();
    const [pickerVisible, setPickerVisible] = useState(false)
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
                name='restartTime'
                label='重启时间'
                trigger='onConfirm'
                arrow={
                    form.getFieldValue('restartTime') ? (
                        <CloseCircleFill
                            style={{
                                // color: 'var(--adm-color-light)',
                                fontSize: 14,
                            }}
                            onClick={e => {
                                e.stopPropagation()
                                form.setFieldsValue({ restartTime: null })
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
                <CalendarPicker
                    visible={pickerVisible}
                    selectionMode='range'
                    onClose={() => setPickerVisible(false)}
                    onMaskClick={() => setPickerVisible(false)}
                    onChange={val => {
                        console.log(val)
                    }}
                />
                {/* <DatePicker
                    visible={pickerVisible}
                    precision='week'
                    onClose={() => {
                        setPickerVisible(false)
                    }}
                >
                    {value =>
                        value ? dayjs(value).format('YYYY-MM-DD') : <div style={{ color: '#C0C4CC' }}>请选择日期</div>
                    }
                </DatePicker> */}
            </Form.Item>
        </Form>
        {/* <List>
            <List.Item onClick={() => { }}>
                <div className='time'>
                    <div>时间设置</div>
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
                </div>

            </List.Item>
        </List> */}

    </div>
}

export default TimePeriodSetting