import styles from './index.module.less';
import { useNavigate } from 'react-router-dom';
import { NavBar, CheckList,Button } from 'antd-mobile';
import { useTranslation } from 'react-i18next';
import '../../i18n/config';
import { useEffect, useState } from 'react';
import { navList } from '../Main/data';

function AboutDevice() {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [menuData, setMenuData] = useState([]);
    const [value, setValue] = useState([]);
    const back = () => {
        navigate(-1)
    }

    useEffect(() => {
        transformData()
    }, [])

    // const defaultValue = useMemo(() => {
    //     console.log(menuData, 'menuDate')
    //     return menuData.map(item => {
    //         return item.name
    //     })
    // }, [menuData])

    const transformData = () => {
        const data = []
        navList.forEach(item => {
            const dataTemp = item.data.map(i => ({
                key: i.key,
                name: i.name,
            }));
            data.push(...dataTemp)
        })
        const defaultValue = data.map(item => {
            return item.name
        })
        setMenuData(data);
        setValue(defaultValue);
    }

    const handleChangeValue = (item) => {
        setValue(item);
    }
    return <div className={styles.main}>
        <NavBar className='top' onBack={back} right={<Button size='small' color='primary'>保存</Button>}>{t('权限编辑')}</NavBar>
        <CheckList value={value} multiple mode='card' onChange={handleChangeValue}>
            {
                menuData.map(item => {
                    return <CheckList.Item key={item.key} value={item.name}>{item.name}</CheckList.Item>
                })
            }
        </CheckList>
    </div>
}

export default AboutDevice