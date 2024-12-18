import React, { useState } from 'react';
import './Footer.css'; // Подключаем стили для страницы
import fac from './img/SVG.png'
import inst from './img/SVG2.png'
import Youtube from './img/SVG3.png'
import int from './img/SVG4.png'
import tictoc from './img/Vector5.png'

function Footer () {

    return (
            <footer className="footer">
                <div className="footer-top">
                    <p>
                        Ready to take the Electric Ivy or Ace for a spin? Electric test rides are now available in <br /> 
												Amsterdam, Amstelveen, Apeldoorn, Bussum, Den Haag, Nijmegen, Weesp, Wormerveer,  Berlin, Hamburg and Munich.
												 Schedule your test ride now and we’ll see you there.
                    </p>
                    <button className="book-now">BOOK NOW</button>
                </div>

                <div className="footer-links">
                    <div className="footer-column">
                        <h4>Explorer</h4>
                        <ul>
                            <li><a href="#">Electric bikes</a></li>
                            <li><a href="#">City bikes</a></li>
                            <li><a href="#">Kids' bikes</a></li>
                            <li><a href="#">Accessories</a></li>
                            <li><a href="#">Outlet</a></li>
                            <li><a href="#">Business</a></li>
                            <li><a href="#">Insurance Electric</a></li>
                            <li><a href="#">Size guide</a></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h4>About</h4>
                        <ul>
                            <li><a href="#">About us</a></li>
                            <li><a href="#">Journal</a></li>
                            <li><a href="#">Reviews</a></li>
                            <li><a href="#">Press</a></li>
                            <li><a href="#">Jobs</a></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h4>Help</h4>
                        <ul>
                            <li><a href="#">Contact</a></li>
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">Delivery</a></li>
                            <li><a href="#">Assembly & manuals</a></li>
                            <li><a href="#">Payment options</a></li>
                            <li><a href="#">Privacy policy</a></li>
                            <li><a href="#">Terms & conditions</a></li>
                        </ul>
                    </div>

                  	<div class="newsletter-container">
        <h1 class="headline">Join the ride.</h1>
        <p class="subtext">Sign up for our newsletter.</p>
        <form class="email-form">
            <input type="email" placeholder="Enter your email address here" class="email-input" required />
            <button type="submit" class="subscribe-button">Subscribe</button>
        </form>
        <label class="checkbox-container">
            <input type="checkbox" required />
						By signing up, I agree to the  <a href="#" class="privacy-policy">privacy policy</a>  of Veloretti.
        </label>
        <div class="social-icons">
            <a href="#"><img src={fac} alt="" /></a>
            <a href="#"><img src={inst} alt="" /></a>
            <a href="#"><img src={Youtube} alt="" /></a>
            <a href="#"><img src={int} alt="" /></a>
            <a href="#"><img src={tictoc} alt="" /></a>
        </div>
    </div>
                </div>
            </footer>
    );
};

export default Footer;
