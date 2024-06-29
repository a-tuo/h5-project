import styles from './index.module.less';
import { useNavigate } from 'react-router-dom';
import { NavBar, CheckList, Form, Input, Button } from 'antd-mobile';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import '../../i18n/config'
function WifiNetworkDetailAuto() {
    const { t } = useTranslation();
    const [form] = Form.useForm();
    const navigate = useNavigate();
    let location = useLocation();
    const [checkValue, setCheckValue] = useState(['handMovement'])
    console.log(location.state, 'state');
    const back = () => {
        navigate(-1)
    }
    const handleChange = (value) => {
        console.log(value, 'value')
        setCheckValue(value);
    }

    const onFinish = () => {

    }
    return <div className={styles.main}>
        <NavBar className='top' onBack={back} right={<Button color='primary' size='small'>保存</Button>}>{t('配置IPv4')}</NavBar>
        <CheckList className={styles.checkList} value={checkValue} onChange={handleChange} mode='card'>
            <CheckList.Item value="handMovement">手动</CheckList.Item>
            <CheckList.Item value="auto">自动</CheckList.Item>
        </CheckList>
        {
            checkValue[0] === 'handMovement' ? <Form
                mode='card'
                onFinish={onFinish}
                form={form}
                layout='horizontal'
                initialValues={{
                    ip: '0.0.0.0',
                    zwym: '255.255.0.0'
                }}>
                <Form.Header>手动IP</Form.Header>
                <Form.Item
                    name='ip'
                    label={t('IP地址')}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name='zwym'
                    label={t('子网掩码')}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name='lyq'
                    label={t('路由器')}
                >
                    <Input />
                </Form.Item>
            </Form> : null
        }
    </div>
}

export default WifiNetworkDetailAuto