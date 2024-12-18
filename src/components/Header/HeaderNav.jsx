import React, { useState, useEffect } from "react";
import  './Header-nav.css'
import image from './img/image.png'
import flag from './img/Frame.png'
import person from './img/3643745-human-man-people-person-profile_113435.png'
import shop from './img/2849808-interface-multimedia-pack-package-shop_107971.png'
import logo from './img/photo_2024-12-13_02-02-23.jpg'

function Header () {

  const [openMenu, setOpenMenu] = useState(null);

  const toggleDropdown = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  const closeDropdown = (event) => {
    if (!event.target.closest(".dropdown") && !event.target.closest(".navbar")) {
      setOpenMenu(null);
    }
  };

  useEffect(() => {
    window.addEventListener("click", closeDropdown);
    return () => {
      window.removeEventListener("click", closeDropdown);
    };
  }, []);

  return (
    <>
		<header>
			<div className="navbar">
				<div  style={{ display: 'flex', alignItems: 'center' }}>
					<div className="logo">
						<img className="nav-logo" src={logo} alt="Logo" />
						</div>
						<div className="menu">
							{/* Электрический раздел */}
							<div className="menu-item">
								<button onClick={() => toggleDropdown("electric")}>ELECTRIC <img src={image} alt="" /></button>
								{openMenu === "electric" && (
									<div className="dropdown-content">
										<a href="#">Electric Bikes</a>
										<a href="#">E-Accessories</a>
										</div>
									)}
									</div>
									 {/* Городской раздел */}
									  <div className="menu-item"><button onClick={() => toggleDropdown("city")}>CITY<img src={image} alt="" /></button>
										{openMenu === "city" && (
											<div className="dropdown-content">
												<a href="#">City Bikes</a>
												<a href="#">Urban Gear</a>
												</div>
											)}
											</div>
											{/* Детский раздел */}
											<div className="menu-item">
												<button onClick={() => toggleDropdown("kids")}>KIDS<img src={image} alt="" /></button>
												{openMenu === "kids" && (
													<div className="dropdown-content">
														<a href="#">Kids Bikes</a>
														<a href="#">Kids ACCESSORIES</a>
														</div>
													)}
													</div>
													<div className="menu-item"><a href="#">Accessories</a></div>
													<div className="menu-item"><a href="#">STORES</a></div>
													{/* Лизинг */}
													<div className="menu-item">
														<button onClick={() => toggleDropdown("leasing")}>LEASING<img src={image} alt="" /></button>
														{openMenu === "leasing" && (
															<div className="dropdown-content">
																 <a href="#">Corporate Leasing</a>
																 <a href="#">Personal Leasing</a>
																 </div>
																)}
																</div>
																</div>
																</div>
																<div className="actions">
																	<span>EN <img src={flag} alt="flag" /></span>
																	<a href=""><img className="User" src={person} alt="User" /></a>
																	<a href=""><img className="Cart" src={shop} alt="Cart" /></a>
																</div>
															</div>
														</header>
		</>
  );
}

export default Header;