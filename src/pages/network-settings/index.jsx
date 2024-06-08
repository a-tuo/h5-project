import { useNavigate } from 'react-router-dom';
import { NavBar, List, Form, Button, Radio, Space, Input, Stepper } from 'antd-mobile';
import {
    BankcardOutline,
    SetOutline
} from 'antd-mobile-icons';
import './index.less'
function NetworkSettings() {
    const navigate = useNavigate();
    const [form] = Form.useForm();
    const back = () => {
        navigate(-1)
    }
    const onFinish = () => {

    }
    return <div className='main'>
        <NavBar className='top' onBack={back}>网络设置</NavBar>
        <div className='content'>
            <List mode='card' header="系统设置">
                <List.Item prefix={<BankcardOutline />} onClick={() => { navigate('/wifi-network') }}>wifi设置</List.Item>
                <List.Item prefix={<SetOutline />} onClick={() => { navigate('/wifi-network') }}>有线设置</List.Item>
            </List>
            <Form
                mode='card'
                onFinish={onFinish}
                form={form}
                layout='horizontal'
                footer={
                    <Button block type='submit' color='primary' size='large'>
                        保存
                    </Button>
                }>
                <Form.Header>协议类型</Form.Header>
                <Form.Item name='http' required>
                    <Radio.Group defaultValue='1'>
                        <Space direction='vertical'>
                            <Radio value='1'>http</Radio>
                            <Radio value='2'>https</Radio>
                        </Space>
                    </Radio.Group>
                </Form.Item>
                <Form.Header>服务器地址(ip或域名)</Form.Header>
                <Form.Item name='ip' required>
                    <Input placeholder='请输入服务器地址' />
                </Form.Item>
                <Form.Header>超时时间(秒)</Form.Header>
                <Form.Item
                    name="timeout"
                    label="网络通讯超时"
                    childElementPosition='right'>
                    <Stepper defaultValue={3} min={3} max={20} />
                </Form.Item>
                <Form.Item
                    name="ewmTime"
                    label="二维码通讯超时"
                    childElementPosition='right'>
                    <Stepper defaultValue={1} min={1} max={120} />
                </Form.Item>
                <Form.Item
                    name="heartTime"
                    label="心跳间隔"
                    childElementPosition='right'>
                    <Stepper defaultValue={1} min={1} max={120} />
                </Form.Item>
            </Form>
        </div>

    </div>
}

export default NetworkSettings