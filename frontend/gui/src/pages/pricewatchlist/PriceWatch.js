import React from 'react';
import { List } from 'antd';
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const PriceWatch = (props) => {
    return(
          <List itemLayout="horizontal" size="large"   pagination={{
              onChange: page => {console.log(page); },
              pageSize: 10, }}
            dataSource={props.data} 

            renderItem={item => (
              <Dropdown overlay={
                <Menu.Item>
                     <a href={`/articles/${item.id}`}>{item.province}</a>
                </Menu.Item>
               }>
            
                    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                    Choose Province <DownOutlined />
                    </a>
              </Dropdown>

            )}
          />

    )

}

export default PriceWatch;