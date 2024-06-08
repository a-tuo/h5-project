import { List } from 'antd-mobile';
import {
    UnorderedListOutline,
    PayCircleOutline,
    SetOutline,
  } from 'antd-mobile-icons';
function Main() {
    return <div>
        <List header='可点击列表'>
            <List.Item prefix={<UnorderedListOutline />} onClick={() => { }}>
                账单
            </List.Item>
            <List.Item prefix={<PayCircleOutline />} onClick={() => { }}>
                总资产
            </List.Item>
            <List.Item prefix={<SetOutline />} onClick={() => { }}>
                设置
            </List.Item>
        </List>
    </div>
}

export default Main