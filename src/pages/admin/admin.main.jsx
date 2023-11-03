import React, { useState } from 'react';
import { Breadcrumb, Layout, Menu, theme} from 'antd';
import { Outlet } from 'react-router-dom';
const { Header, Content, Footer, Sider } = Layout;

const items = [
    {
        key: Date.now() * Math.random(),
        icon: `${import.meta.env.VITE_SERVER_HOST}imgs/shirt.jpg`,
        label: "Category Manager",
        url: "category-manager"
    },
    {
        key: Date.now() * Math.random(),
        icon: `${import.meta.env.VITE_SERVER_HOST}imgs/hat.png`,
        label: "Product Manager",
        url: "product-manager"
    }
];

import { useNavigate } from 'react-router-dom';

const App = () => {
    const navigate = useNavigate()
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <Layout
            style={{
                minHeight: '100vh',
            }}
        >
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <div className="demo-logo-vertical" />
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={null}>
                {
                    items.map((item) => (
                        <Menu.Item key={item.key} onClick={() => {
                            navigate(item.url)
                        }}>
                          <img src={item.icon} style={{
                            width: "50px",
                            height: "50px"
                          }}/>  {item.label}
                        </Menu.Item>
                    ))
                }
                </Menu>
            </Sider>
            <Layout>
                <Header
                    style={{
                        padding: 0,
                        background: colorBgContainer,
                    }}
                >
                    Abc
                </Header>
                <Content
                    style={{
                        margin: '0 16px',
                    }}
                >
                    <Breadcrumb
                        style={{
                            margin: '16px 0',
                        }}
                    >
                        <Breadcrumb.Item>User</Breadcrumb.Item>
                        <Breadcrumb.Item>Bill</Breadcrumb.Item>
                    </Breadcrumb>
                    <Outlet></Outlet>
                </Content>
                <Footer
                    style={{
                        textAlign: 'center',
                    }}
                >
                    Ant Design ©2023 Created by Ant UED
                </Footer>
            </Layout>
        </Layout>
    );
};
export default App;