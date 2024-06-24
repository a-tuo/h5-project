import styles from './index.module.less';
import { useNavigate } from 'react-router-dom';
import { NavBar, CheckList, Button } from 'antd-mobile';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import '../../i18n/config'

const langIdList = [
    { "langId": 0, "langName": "简体中文" },
    { "langId": 1, "langName": "繁體中文" },
    { "langId": 2, "langName": "English" },
    { "langId": 3, "langName": "Tiếng Việt" },
    { "langId": 4, "langName": "ภาษาไทย" },
    { "langId": 5, "langName": "語" }
];
function AboutDevice() {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [value, setValue] = useState([langIdList[0].langName]);
    const back = () => {
        navigate(-1)
    }
    const handleChangeValue = (item) => {
        setValue(item)
    }
    return <div className={styles.main}>
        <NavBar className='top' onBack={back} right={<Button size='small' color='primary'>保存</Button>}>{t('多语言')}</NavBar>
        <CheckList value={value} mode='card' onChange={handleChangeValue}>
            {
                langIdList.map(item => {
                    return <CheckList.Item key={item.langId} value={item.langName}>{item.langName}</CheckList.Item>
                })
            }
        </CheckList>
    </div>
}

export default AboutDevice