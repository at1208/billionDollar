import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './drawer.css';
import { Drawer, Button } from 'antd';
import { Link } from 'react-router-dom'


class DrawerBar extends Component {
  state = { visible: false, placement: 'left' };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  onChange = e => {
    this.setState({
      placement: e.target.value,
    });
  };

  menuList = () => {
    const menu = ['Events', 'Videos'];
    const list = menu.map(item => {
      return <div className=''>
             <Link to={window.location.pathname + '/' +`${item}`}>
               <div className='shadow menus text-center'>
                {item}
               </div>
              </Link>
             </div>
    })
    return list;
  }

  render() {

    return (
      <div>

        <Button type="primary" onClick={this.showDrawer}>
          Menu
        </Button>
        <Drawer
          title="Menu"
          placement={this.state.placement}
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
        >
           {this.menuList()}
        </Drawer>
      </div>
    );
  }
}

export default DrawerBar;
