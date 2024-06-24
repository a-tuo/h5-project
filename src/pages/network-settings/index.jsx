import { useNavigate } from 'react-router-dom';
import { NavBar, List, Form, Button, Radio, Space, Input, Stepper } from 'antd-mobile';
import {
    BankcardOutline,
    SetOutline
} from 'antd-mobile-icons';
import styles from './index.module.less';
import { useTranslation } from 'react-i18next';
import '../../i18n/config'
import arrow from './assets/arrow.png';
function NetworkSettings() {
    const navigate = useNavigate();
    const { t } = useTranslation();
    const [form] = Form.useForm();
    const back = () => {
        navigate(-1)
    }
    const onFinish = () => {

    }

    const renderRadio = (checked) => {
        return checked ? (
            <img src={arrow} className={styles.arrow} />
        ) : <div className={styles.arrow} />
    }
    return <div className={styles.main}>
        <NavBar right={<Button size='small' color='primary'>保存</Button>} className={styles.top} onBack={back}>{t('网络设置')}</NavBar>
        <div className={styles.content}>
            <List mode='card' header="基本设置">
                <List.Item prefix={<BankcardOutline />} onClick={() => { navigate('/wifi-network', { state: { name: "WIFI设置" } }) }}>{t('WIFI设置')}</List.Item>
                <List.Item prefix={<SetOutline />} onClick={() => { navigate('/ethernet-network', { state: { name: "有线设置" } }) }}>{t('有线设置')}</List.Item>
            </List>
            <Form
                mode='card'
                onFinish={onFinish}
                form={form}
                layout='horizontal'
                initialValues={{
                    http: '1',
                    timeout: 3,
                    ewmTime: 1,
                    heartTime: 1,
                    ip: 'http://192.168.0.100:6060'
                }}>
                {/* <Form.Header>{t('协议类型')}</Form.Header>
                <Form.Item name='http' required>
                    <Radio.Group>
                        <Space direction='vertical'>
                            <Radio value='1'
                                icon={checked => renderRadio(checked)}>
                                {t('HTTP')}</Radio>
                            <Radio value='2'
                                icon={checked => renderRadio(checked)}>
                                {t('HTTPS')}</Radio>
                        </Space>
                    </Radio.Group>
                </Form.Item> */}
                <Form.Header>{t('服务器')}</Form.Header>
                <Form.Item name='ip' required>
                    <Input placeholder='请输入服务器地址' />
                </Form.Item>
                <Form.Header>{t('超时时间(秒)')}</Form.Header>
                <Form.Item
                    name="timeout"
                    label={t('网络通讯超时')}
                    childElementPosition='right'>
                    <Stepper
                        min={3}
                        max={20} />
                </Form.Item>
                <Form.Item
                    name="ewmTime"
                    label={t('二维码通讯超时')}
                    childElementPosition='right'>
                    <Stepper min={1} max={120} />
                </Form.Item>
                <Form.Item
                    name="heartTime"
                    label={t('心跳间隔')}
                    childElementPosition='right'>
                    <Stepper min={1} max={120} />
                </Form.Item>
            </Form>
        </div>

    </div>
}

export default NetworkSettings