import React, { Component } from 'react';
import Link from './Link'
class Menu extends Component {
  render(){
    let menus=[
      'Home','About','Services','Blogs','Contact'
    ];
    return (
    <div>
        {
          menus.map((v,i)=>{
            return React.createElement('div',{key:i},React.createElement(Link,{label:v}))
          })
        }
      </div>)
  }
  
}

export default Menu;
