import React from 'react'
import '../assets/css/login.css'
import { Link } from 'react-router-dom';
function Login() {
    return (
        <div className='content'>


            <div class="form-tt">
                <h2>Đăng nhập hệ thống quản lý văn bản và hồ sơ công việc</h2>
                <form action="#" method="post" name="dang-ky">

                    <input type="text" name="username" placeholder="Nhập tên đăng nhập" />
                    <input type="password" name="password" placeholder="Nhập mật khẩu" />
                    <input type="checkbox" id="checkbox" name="checkbox" /><label class="checkbox-text" >Nhớ đăng nhập lần sau</label>
                    <input type="submit" name="submit" value="Đăng nhập" />
                    <label class="psw-text">Quên mật khẩu</label>
                </form>

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


        </div >
    )
}

export default Login