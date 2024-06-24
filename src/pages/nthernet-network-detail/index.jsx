import styles from './index.module.less';
import { useNavigate } from 'react-router-dom';
import { NavBar, Form, Radio, Space, Input } from 'antd-mobile';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import arrow from '../../images/arrow.png';
import '../../i18n/config'
function NthernetNetworkDetail() {
    const { t } = useTranslation();
    const navigate = useNavigate();
    let location = useLocation();
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
        <NavBar className='top' onBack={back}>{t(`编辑${location.state.type}设置`)}</NavBar>
        <Form
            mode='card'
            onFinish={onFinish}
            form={form}
            layout='horizontal'
            initialValues={{
                type: '1'
            }}>
            <Form.Item name='type' required>
                <Radio.Group>
                    <Space direction='vertical'>
                        <Radio value='1'
                            icon={checked => renderRadio(checked)}>
                            {t('自动')}</Radio>
                        <Radio value='2'
                            icon={checked => renderRadio(checked)}>
                            {t('手动')}</Radio>
                    </Space>
                </Radio.Group>
            </Form.Item>
            <Form.Header></Form.Header>
            {
                location.state.type === 'ip' ?
                    <>
                        <Form.Item label="IP地址" name='ip'>
                            <Input></Input>
                        </Form.Item>
                        <Form.Item label="子网掩码" name='zwym'>
                            <Input></Input>
                        </Form.Item>
                        <Form.Item label="网关" name='wg'>
                            <Input></Input>
                        </Form.Item>
                    </>
                    : <>
                        <Form.Item label="首选DNS" name='sx'>
                            <Input></Input>
                        </Form.Item>
                        <Form.Item label="备用DNS" name='by'>
                            <Input></Input>
                        </Form.Item>
                    </>
            }
        </Form>
    </div>
}

export default NthernetNetworkDetail