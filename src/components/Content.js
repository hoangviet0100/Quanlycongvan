import React from 'react';
import '../assets/css/content.css'
import { Link } from 'react-router-dom';
function Content() {
  return <div className='content'>
    <div className="article">


    </div>

    <div className="aside">

      <div className="menu1">
        <div align="justify">
          <ul>
            <br />
            <li><Link to="/docs">VĂN BẢN NỘI BỘ</Link></li>
            <li><a href="">VĂN BẢN ĐI</a></li>
            <li><Link to="/docsin">VĂN BẢN ĐẾN</Link></li>
            <li><a href="">BÁO CÁO THÁNG</a></li>
            <li><a href="">CÁC BIỂU MẪU</a></li>
            <li><a href="">VĂN BẢN QUY PHẠM PL</a></li>
          </ul>
        </div>
      </div>

    </div>


  </div >;

}

export default Content;
