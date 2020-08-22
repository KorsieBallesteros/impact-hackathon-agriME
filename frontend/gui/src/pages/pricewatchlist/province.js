import React from 'react';
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';

  
  const Dropdownmenu = (props) => {
      var entryID = []
      for (var i in props.data){
        if (typeof props.data[i] !== "undefined") {
            var temp = {id: props.data[i].id, province: props.data[i].province};
            entryID.push(temp);
        }
      }

      console.log(entryID)

    return (
        <Dropdown overlay={
            <Menu>
                    {   entryID.map ( name => (
                        <div>
                            <Menu.Item key = {name.province}>
                                <a href={`/articles/${name.id}`}>{name.province}</a>
                            </Menu.Item>
                        </div>
                        ))
                    }
            </Menu>
        }>
            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                Choose Province <DownOutlined />
            </a>
        </Dropdown>
                    
    )
  }

  export default Dropdownmenu;