import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/css/docs.css'
function Docs() {
    return (
        <div className="content">
            <div className="form-header">
                <div className="form-header1">
                    <label className="sohieu" >Số hiệu</label>
                    <input type="text" id="fname" name="fname" /><br /><br />
                    <label className="trichyeu">Trích yếu</label>
                    <input type="text" id="lname" name="lname" /><br /><br />
                </div>
                <div className="form-header2">

                    <label className="loaivanban"  >Loại văn bản</label>
                    <select className="select"  >
                        <option value="volvo">Thông tư</option>
                        <option value="saab">Saab</option>
                        <option value="opel">Opel</option>
                        <option value="audi">Audi</option>
                    </select>
                    <br /><br />

                    <label className="noibanhanh"  >Nơi ban hành</label>
                    <select className="select"  >
                        <option value="volvo">Bộ Giáo dục và Đào tạo</option>
                        <option value="saab">Saab</option>
                        <option value="opel">Opel</option>
                        <option value="audi">Audi</option>
                    </select>

                </div>
                <div className="form-header3">

                    <label className="nam"  >Năm</label>
                    <select  >
                        <option value="volvo">2012</option>
                        <option value="saab">2015</option>
                        <option value="opel">2018</option>
                        <option value="audi">2022</option>
                    </select>
                    <br /><br />
                    <button type="button" >Tìm kiếm</button>
                </div>

                <div className="form-header4">
                    <button type="button" >Thêm văn bản</button>
                </div>



            </div>
            <div className="form-header2">
                <div className="list-docs">
                    <div className="tieude">
                        <ul>
                            <li><h2><b>Thông tư - 60/2012/TT-BGDĐT-Ban hành quy định về kiểm định viên kiểm định chất lượng giáo dục</b></h2></li>
                            <table>
                                <tr>
                                    <td>Số hiệu</td>
                                    <td>60/TT-BGDĐT</td>
                                </tr>
                                <tr>
                                    <td>Ngày ban hành</td>
                                    <td>28-12-2012</td>
                                </tr>
                                <tr>
                                    <td>Cơ quan</td>
                                    <td>Bộ giáo dục và Đào tạo</td>

                                </tr>
                                <tr>
                                    <td>Định dạng</td>
                                    <td>Doc File</td>

                                </tr>
                                <tr>
                                    <td>Tệp đính kèm</td>
                                    <td></td>

                                </tr>
                            </table>
                            <div className="chucnang">
                                <a href=""> SMS</a>
                                <a href=""> gửi lại</a>
                                <a href=""> xóa</a>
                                <a href=""> sửa</a>
                                <a href=""> xem</a>
                            </div>

                        </ul>
                    </div>
                    <div>

                    </div>
                </div>
                <div className="list-docs">
                    <div className="tieude">
                        <ul>
                            <li><h2><b>Thông tư - 60/2012/TT-BGDĐT-Ban hành quy định về kiểm định viên kiểm định chất lượng giáo dục</b></h2></li>
                            <table>
                                <tr>
                                    <td>Số hiệu</td>
                                    <td>60/TT-BGDĐT</td>
                                </tr>
                                <tr>
                                    <td>Ngày ban hành</td>
                                    <td>28-12-2012</td>
                                </tr>
                                <tr>
                                    <td>Cơ quan</td>
                                    <td>Bộ giáo dục và Đào tạo</td>

                                </tr>
                                <tr>
                                    <td>Định dạng</td>
                                    <td>Doc File</td>

                                </tr>
                                <tr>
                                    <td>Tệp đính kèm</td>
                                    <td></td>

                                </tr>
                            </table>
                            <div className="chucnang">
                                <a href=""> SMS</a>
                                <a href=""> gửi lại</a>
                                <a href=""> xóa</a>
                                <a href=""> sửa</a>
                                <a href=""> xem</a>

                            </div>

                        </ul>
                    </div>
                    <div>

                    </div>
                </div>
                <div className="list-docs">
                    <div className="tieude">
                        <ul>
                            <li><h2><b>Thông tư - 60/2012/TT-BGDĐT-Ban hành quy định về kiểm định viên kiểm định chất lượng giáo dục</b></h2></li>
                            <table>
                                <tr>
                                    <td>Số hiệu</td>
                                    <td>60/TT-BGDĐT</td>
                                </tr>
                                <tr>
                                    <td>Ngày ban hành</td>
                                    <td>28-12-2012</td>
                                </tr>
                                <tr>
                                    <td>Cơ quan</td>
                                    <td>Bộ giáo dục và Đào tạo</td>

                                </tr>
                                <tr>
                                    <td>Định dạng</td>
                                    <td>Doc File</td>

                                </tr>
                                <tr>
                                    <td>Tệp đính kèm</td>
                                    <td></td>

                                </tr>
                            </table>
                            <div className="chucnang">
                                <a href=""> SMS</a>
                                <a href=""> gửi lại</a>
                                <a href=""> xóa</a>
                                <a href=""> sửa</a>
                                <a href=""> xem</a>
                            </div>

                        </ul>
                    </div>
                    <div>

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

export default Docs