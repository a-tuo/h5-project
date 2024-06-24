import { List, NavBar, Button } from 'antd-mobile';
import { navList } from './data';
import styles from './main.module.less';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../../api/test';
import { useTranslation } from 'react-i18next';
import Language from './assets/language.png';
import '../../i18n/config'
function Main() {
    useEffect(() => {
        const a = async () => {
            const result = await login();
            console.log(result, 'result')
        }
        a()
    }, [])
    const navigate = useNavigate()
    const { t } = useTranslation();
    const back = () => {
        console.log('返回')
    }
    const handleClick = () => {
        navigate('/multi-lingual')
    }
    return <div className={styles.main}>
        <NavBar onBack={back} right={<img onClick={handleClick} style={{ width: '20px', height: "20px" }} src={Language}></img>}>
            {t('设置')}
        </NavBar>
        <div className={styles.content}>
            {
                navList.map(item => {
                    return <List key={item.id} mode="card" header={item.name}>
                        {
                            item.data.map(listItem => {
                                return <List.Item key={listItem.key} prefix={listItem.icon} onClick={() => { navigate(listItem.key) }}>
                                    {t(listItem.name)}
                                </List.Item>
                            })
                        }
                    </List>
                })
            }
        </div>
    </div>
}

export default Main