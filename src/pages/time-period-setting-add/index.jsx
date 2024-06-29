import styles from './index.module.less';
import { useNavigate, useLocation } from 'react-router-dom';
import { NavBar, Button, Form, Picker, CheckList } from 'antd-mobile';
import { basicColumns } from '../system-settings/data'
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import '../../i18n/config';

function AboutDevice() {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [timeVisible, setTimeVisble] = useState(false);
    const [startPickerVisible, setStartPickerVisible] = useState(false);
    const [endPickerVisible, setEndPickerVisible] = useState(false);
    const [form] = Form.useForm();
    let location = useLocation();

    console.log(location.state?.data?.item, 'location')
    const back = () => {
        navigate(-1);
    }

    const onFinish = () => {

    }

    // const renderPicker = (item) => {
    //     return <Picker
    //         key={item}
    //         style={{
    //             '--title-font-size': '13px',
    //             '--header-button-font-size': '13px',
    //             '--item-font-size': '13px',
    //             '--item-height': '30px',
    //         }}
    //         columns={basicColumns}
    //         visible={pickerVisible}
    //         defaultValue={['1', '00', '00']}
    //         onClose={() => {
    //             setPickerVisible(false)
    //         }}
    //     >
    //         {
    //             value => {
    //                 const isNull = value.every(function (element) {
    //                     return element === null;
    //                 })
    //                 let str = ''
    //                 if (!isNull) {
    //                     value.forEach((item, index) => {
    //                         if (index !== value?.length - 1) {
    //                             str = str + item?.label + ':';
    //                         }
    //                         else {
    //                             str = str + item?.label
    //                         }

    //                     })
    //                 }
    //                 return str
    //             }
    //         }
    //     </Picker>
    // }
    return <div className={styles.main}>
        <NavBar className='top' onBack={back} right={<Button color='primary' size='small'>保存</Button>}>{t(`${location.state?.data ? '修改' : '增加'}时段设置`)}</NavBar>
        <Form
            mode='card'
            onFinish={onFinish}
            form={form}
            layout='horizontal'
            initialValues={{
                modePassage: 'A',
                doorOpening: 'A'
            }}>
            <Form.Item
                name='restartTime'
                label={t('重启时间')}
                trigger='onConfirm'
                onClick={() => {
                    setStartPickerVisible(true)
                }}>
                <Picker
                    style={{
                        '--title-font-size': '13px',
                        '--header-button-font-size': '13px',
                        '--item-font-size': '13px',
                        '--item-height': '30px',
                    }}
                    columns={basicColumns}
                    visible={startPickerVisible}
                    defaultValue={['1', '00', '00']}
                    onClose={() => {
                        setStartPickerVisible(false)
                    }}
                >
                    {
                        value => {
                            const isNull = value.every(function (element) {
                                return element === null;
                            })
                            let str = ''
                            if (!isNull) {
                                value.forEach((item, index) => {
                                    if (index !== value?.length - 1) {
                                        str = str + item?.label + ':';
                                    }
                                    else {
                                        str = str + item?.label
                                    }

                                })
                            }
                            return str
                        }
                    }
                </Picker>
            </Form.Item>
            <Form.Item
                name='restartTime'
                label={t('结束时间')}
                trigger='onConfirm'
                onClick={() => {
                    setEndPickerVisible(true)
                }}>
                <Picker
                    style={{
                        '--title-font-size': '13px',
                        '--header-button-font-size': '13px',
                        '--item-font-size': '13px',
                        '--item-height': '30px',
                    }}
                    columns={basicColumns}
                    visible={endPickerVisible}
                    defaultValue={['1', '00', '00']}
                    onClose={() => {
                        setEndPickerVisible(false)
                    }}
                >
                    {
                        value => {
                            const isNull = value.every(function (element) {
                                return element === null;
                            })
                            let str = ''
                            if (!isNull) {
                                value.forEach((item, index) => {
                                    if (index !== value?.length - 1) {
                                        str = str + item?.label + ':';
                                    }
                                    else {
                                        str = str + item?.label
                                    }

                                })
                            }
                            return str
                        }
                    }
                </Picker>
            </Form.Item>
            <Form.Header>通行方式</Form.Header>
            <Form.Item
                name='modePassage'
            >
                <CheckList>
                    <CheckList.Item value='A'>人脸或密码或卡</CheckList.Item>
                    <CheckList.Item value='B'>人脸+密码</CheckList.Item>
                    <CheckList.Item value='C'>卡+密码</CheckList.Item>
                    <CheckList.Item value='D'>人脸+卡</CheckList.Item>
                    <CheckList.Item value='E'>人脸+卡+密码</CheckList.Item>
                </CheckList>
            </Form.Item>
            <Form.Header>开门方式</Form.Header>
            <Form.Item
                name='doorOpening'
            >
                <CheckList>
                    <CheckList.Item value='A'>常开</CheckList.Item>
                    <CheckList.Item value='B'>常闭</CheckList.Item>
                </CheckList>
            </Form.Item>
        </Form>
    </div>
}

export default AboutDevice