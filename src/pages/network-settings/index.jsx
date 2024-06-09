import { useNavigate } from 'react-router-dom';
import { NavBar, List, Form, Button, Radio, Space, Input, Stepper } from 'antd-mobile';
import {
    BankcardOutline,
    SetOutline
} from 'antd-mobile-icons';
import styles from './index.module.less';
import { useTranslation } from 'react-i18next';
import '../../i18n/config'
function NetworkSettings() {
    const navigate = useNavigate();
    const { t } = useTranslation();
    const [form] = Form.useForm();
    const back = () => {
        navigate(-1)
    }
    const onFinish = () => {

    }
    return <div className={styles.main}>
        <NavBar className={styles.top} onBack={back}>{t('网络设置')}</NavBar>
        <div className={styles.content}>
            <List mode='card' header="基本设置">
                <List.Item prefix={<BankcardOutline />} onClick={() => { navigate('/wifi-network', { state: { name: "wifi设置" } }) }}>{t('wifi设置')}</List.Item>
                <List.Item prefix={<SetOutline />} onClick={() => { navigate('/wifi-network', { state: { name: "有线设置" } }) }}>{t('有线设置')}</List.Item>
            </List>
            <Form
                mode='card'
                onFinish={onFinish}
                form={form}
                layout='horizontal'
                footer={
                    <Button block type='submit' color='primary' size='large'>
                        {t('保存')}
                    </Button>
                }>
                <Form.Header>{t('协议类型')}</Form.Header>
                <Form.Item name='http' required>
                    <Radio.Group defaultValue='1'>
                        <Space direction='vertical'>
                            <Radio value='1'>{t('http')}</Radio>
                            <Radio value='2'>{t('https')}</Radio>
                        </Space>
                    </Radio.Group>
                </Form.Item>
                <Form.Header>{t('服务器地址(ip或域名)')}</Form.Header>
                <Form.Item name='ip' required>
                    <Input placeholder='请输入服务器地址' />
                </Form.Item>
                <Form.Header>{t('超时时间(秒)')}</Form.Header>
                <Form.Item
                    name="timeout"
                    label={t('网络通讯超时')}
                    childElementPosition='right'>
                    <Stepper
                        defaultValue={3}
                        min={3}
                        max={20}
                        formatter={value => `${value}s`} />
                </Form.Item>
                <Form.Item
                    name="ewmTime"
                    label={t('二维码通讯超时')}
                    childElementPosition='right'>
                    <Stepper defaultValue={1} min={1} max={120} formatter={value => `${value}s`} />
                </Form.Item>
                <Form.Item
                    name="heartTime"
                    label={t('心跳间隔')}
                    childElementPosition='right'>
                    <Stepper defaultValue={1} min={1} max={120} formatter={value => `${value}s`} />
                </Form.Item>
            </Form>
        </div>

    </div>
}

export default NetworkSettings