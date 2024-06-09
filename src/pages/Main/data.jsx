import {
    BankcardOutline,
    SetOutline,
    UnorderedListOutline,
    FileOutline,
    ShopbagOutline,
    UserOutline,
    UserSetOutline,
    FillinOutline,
    UserContactOutline,
    AppstoreOutline
} from 'antd-mobile-icons';
const navList = [
    {
        id: "basic",
        name: "基本设置",
        data: [
            {
                key: "/system-settings",
                name: "系统设置",
                icon: <SetOutline />
            },
            {
                key: "/network-settings",
                name: "网络设置",
                icon: <UnorderedListOutline />
            },
            {
                key: "/recognition-settings",
                name: "识别设置",
                icon: <FileOutline />
            },
            {
                key: "/time-period-setting",
                name: "时段设置",
                icon: <FillinOutline />
            },
        ],

    },
    {
        id: "person",
        name: '',
        data: [
            {
                key: "/personnel-files",
                name: "人员档案",
                icon: <UserContactOutline />
            },
            {
                key: "/identification-record",
                name: "识别记录",
                icon: <ShopbagOutline />
            },
            {
                key: "/administrators",
                name: "管理员",
                icon: <UserSetOutline />
            },
        ]
    }, {
        id: "operation",
        name: "",
        data: [
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
                icon: <AppstoreOutline />
            },
        ]
    }
]

export {
    navList
}