import React from 'react';
import '../assets/css/header.css'
function Header() {
  return <div>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
	<a href="#" class="navbar-brand">Hệ thống quản lý văn bản và hồ sơ</a>  		
	<button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
		<span class="navbar-toggler-icon"></span>
	</button>

	<div id="navbarCollapse" class="collapse navbar-collapse justify-content-start">
		<div class="navbar-nav">
			<a href="#" class="nav-item nav-link">Văn bản đến</a>
			<a href="#" class="nav-item nav-link">Văn bản đi</a>			
			{/* <div class="nav-item dropdown">
				<a href="#" data-toggle="dropdown" class="nav-item nav-link dropdown-toggle">Services</a>
				<div class="dropdown-menu">					
					<a href="#" class="dropdown-item">Web Design</a>
					<a href="#" class="dropdown-item">Web Development</a>
					<a href="#" class="dropdown-item">Graphic Design</a>
					<a href="#" class="dropdown-item">Digital Marketing</a>
				</div>
            </div> */}
			<a href="#" class="nav-item nav-link active">Thống kê văn bản</a>
			<a href="#" class="nav-item nav-link">Các biểu mẫu</a>
			<a href="#" class="nav-item nav-link">Văn bản quy phạm PL</a>
        </div>
		<form class="navbar-form form-inline search-form">
			<div class="input-group">
				<input type="text" class="form-control" placeholder="Tìm kiếm..."/>
				<span class="input-group-btn">
					<button type="button" class="btn btn-default btn1"><i class="fa fa-search"></i></button>
				</span>
			</div>
		</form>
		<div class="navbar-nav ml-auto">
			<div class="nav-item dropdown login-dropdown">
				<a href="#" data-toggle="dropdown" class="nav-item nav-link dropdown-toggle"><i class="fa fa-user-o"></i> Đăng nhập</a>
				<div class="dropdown-menu">					
                    <form class="form-inline login-form" action="/examples/actions/confirmation.php" method="post">
                        <div class="input-group">
							<div class="input-group-prepend">
								<span class="input-group-text">
									<span class="fa fa-user"></span>
								</span>                    
							</div>
                            <input type="text" class="form-control" placeholder="Tên đăng nhập" required/>
                        </div>
                        <div class="input-group">
							<div class="input-group-prepend">
								<span class="input-group-text">
									<i class="fa fa-lock"></i>
								</span>                    
							</div>
                            <input type="text" class="form-control" placeholder="Mật khẩu" required/>
                        </div>
                        <button type="submit" class="btn btn-primary">Login</button>
                    </form>
                </div>
            </div>			
        </div>
	</div>
</nav>
  </div>;
}

export default Header;
