import React, { useState } from 'react';
import '../assets/css/header.css';
import anh1 from '../assets/image/hnue.png'
import { Link } from 'react-router-dom';
function Header() {

	return <div className="menu">
		<header>
			<div className="header1">
				<h1>Trường Đại Học Sư Phạm Hà Nội</h1>
				<p>HỆ THỐNG QUẢN LÝ VĂN BẢN VÀ HỒ SƠ CÔNG VIỆC</p>
			</div>
			<div className="header2">
				<img src={anh1}></img>
			</div>
		</header>

		<nav className="ul-nav">
			<ul className="ul">
				<li><Link to="/"> HNUE Home</Link></li>
				<li><a href="">Tin tức - Sự kiện</a></li>
				<li><a href="#">Dành cho cán bộ</a></li>
				<li><a href="">Dành cho sinh viên</a></li>
				<li><Link to="/login">Đăng nhập</Link></li>
			</ul>
		</nav>
	</div>;
}

export default Header;
