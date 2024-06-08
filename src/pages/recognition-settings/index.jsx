import { NavBar, Form, Button, Radio, Space, Stepper, Switch } from 'antd-mobile';
import { useNavigate } from 'react-router-dom';
function RecognitionSettings() {
    const navigate = useNavigate()
    const [form] = Form.useForm()
    const back = () => {
        navigate(-1)
    }
    const onFinish = () => {

    }
    return <div className="main">
        <NavBar onBack={back}>识别设置</NavBar>
        <Form
            mode="card"
            form={form}
            layout='horizontal'
            onFinish={onFinish}
            footer={
                <Button block type='submit' color='primary' size='large'>
                    保存
                </Button>
            }>
            <Form.Header>环境光线</Form.Header>
            <Form.Item name="light">
                <Radio.Group defaultValue='1'>
                    <Space direction='vertical'>
                        <Radio value='1'>较好</Radio>
                        <Radio value='2'>一般</Radio>
                    </Space>
                </Radio.Group>
            </Form.Item>
            <Form.Header />
            <Form.Item
                name="recognition"
                label="识别距离"
                childElementPosition='right'>
                <Stepper
                    defaultValue={0}
                    formatter={value => `${value}cm`}
                    parser={text => parseFloat(text.replace('cm', ''))}
                    onChange={value => {
                        console.log(value, typeof value)
                    }}
                />
            </Form.Item>
            <Form.Header>时间设置</Form.Header>
            <Form.Item
                name="result"
                childElementPosition='right'
                label="结果显示延时">
                <Stepper
                    defaultValue={1}
                    min={1}
                    max={120}
                    formatter={value => `${value}s`}
                    onChange={value => {
                        console.log(value, typeof value)
                    }}
                />
            </Form.Item>
            <Form.Item
                name="repeat"
                childElementPosition='right'
                label="重复识别间隔">
                <Stepper
                    defaultValue={0}
                    min={0}
                    max={10000}
                    formatter={value => `${value}s`}
                    onChange={value => {
                        console.log(value, typeof value, '1');
                    }}
                />
            </Form.Item>
            <Form.Item
                name="recognition "
                childElementPosition='right'
                label="任意识别间隔">
                <Stepper
                    defaultValue={0}
                    min={0}
                    max={10000}
                    formatter={value => `${value}s`}
                    onChange={value => {
                        console.log(value, typeof value, '2');
                    }}
                />
            </Form.Item>
            <Form.Item name="light" label="抓拍图片" childElementPosition='right'>
                <Switch />
            </Form.Item>
        </Form>
    </div>
}

export default RecognitionSettings