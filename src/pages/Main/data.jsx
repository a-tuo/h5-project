import {
    BankcardOutline,
    SetOutline,
    UnorderedListOutline ,
    PayCircleOutline ,
    TagOutline,
    UserOutline,
    UnlockOutline,
    TruckOutline,
    ShopbagOutline
} from 'antd-mobile-icons';
const navList = [
    {
        key: "/system-settings",
        name: "系统设置",
        icon: <SetOutline />
    },
    {
        key: "/network-settings",
        name: "网络设置",
        icon: <UnorderedListOutline  />
    },
    {
        key: "/recognition-settings",
        name: "识别设置",
        icon: <PayCircleOutline  />
    },
    {
        key: "/time-period-setting",
        name: "时段设置",
        icon: <TruckOutline />
    },
    {
        key: "/personnel-files",
        name: "人员档案",
        icon: <UnlockOutline />
    },
    {
        key: "/identification-record",
        name: "识别记录",
        icon: <ShopbagOutline />
    },
    {
        key: "/administrators",
        name: "管理员",
        icon: <BankcardOutline />
    },
    {
        key: "/system-log",
        name: "系统日志",
        icon: <UserOutline />
    },
    {
        key: "/system-maintenance",
        name: "系统维护",
        icon: <BankcardOutline />
    },
    {
        key: "/about-devices",
        name: "关于设备",
        icon: <SetOutline />
    },
]

export {
    navList
}