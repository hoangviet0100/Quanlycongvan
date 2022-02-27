import React from 'react'
import '../assets/css/adddocs.css'
import { Link } from 'react-router-dom'
function AddDocs() {
    return (
        <div className="content">
            <div className="form-add-header">
                <h2>MÀN HÌNH CẬP NHẬT VĂN BẢN ĐẾN</h2><br />
                <label className="sohieu" >Số hiệu</label>
                <input type="text" id="fname" name="fname" /><br /><br />
                <label className="tieude">Tiêu đề</label>
                <input type="text" className="inputtieude" name="lname" /><br /><br />
                <label className="coquan">Cơ quan BH</label>
                <select className="selectcoquan"  >
                    <option value="volvo">Bộ Giáo dục và Đào tạo</option>
                    <option value="saab">Saab</option>
                    <option value="opel">Opel</option>
                    <option value="audi">Audi</option>
                </select><br /><br />
                <label className="trichy">Trích yếu</label>
                <textarea >

                </textarea>
                <br /><br />
                <label className="tep">Tệp đính kèm</label>
                <input type="file" id="myfile" name="myfile" /><br /><br />
                <div className="Donvinhan">
                    <div className="donvi1">
                        <label className="donvi">Đơn vị nhận</label>
                        <input type="radio" id="css" name="fav_language" value="CSS" />
                        <label className="donvi">Khoa và Bộ môn</label>
                    </div>
                    <div className="donvi2">
                        <input type="radio" id="css" name="fav_language" value="CSS" />
                        <label className="donvi">Phòng ban, Trung tâm</label>
                        <input type="radio" id="css" name="fav_language" value="CSS" />
                        <label className="donvi">Trung tâm NCKH</label>
                    </div>
                    <div className="donvi3">
                        <input type="radio" id="css" name="fav_language" value="CSS" />
                        <label for="html">Tất cả</label>
                    </div>
                </div><br />
                <input className="donvinhan" type="checkbox" />
                <label > Khoa CNTT</label><br />
                <input className="donvinhan" type="checkbox" />
                <label > Khoa Công tác xã hội</label><br />
                <input className="donvinhan" type="checkbox" />
                <label > Khoa giáo dục chính trị</label><br />
                <input className="donvinhan" type="checkbox" />
                <label > Khoa Địa Lý</label><br />
                <input className="donvinhan" type="checkbox" />
                <label > Khoa giáo dục thể chất</label><br />
                <input className="donvinhan" type="checkbox" />
                <label > Khoa giáo dục quốc phòng</label><br />
                <input className="donvinhan" type="checkbox" />
                <label > Khoa...</label><br /><br />
                <input className="thongbao" type="checkbox" />
                <label  > Có thông báo qua email không ?</label><br /><br />
                <div className="Donvinhan">
                    <div className="donvi1">
                        <button type="button" >Ghi lại</button>
                    </div>
                    <div className="donvi2">
                        <button type="button" >Quay ra</button>
                    </div>
                </div>


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
        </div>
    )
}

export default AddDocs