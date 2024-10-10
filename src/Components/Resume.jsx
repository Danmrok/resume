import React from "react";
import './Resume.sass';


import logo from './Images/photo.png';
import phones from './Images/number.png';
import poshta from './Images/poshta.png';
import tlg from './Images/telegram.png';

const Resume = () => {
    return(
        <div className="resume">
            <div className="wrapper">
                <div className="lftcln">
                    <img
                        className="photo" 
                        width="120px"
                        height="120px"
                        src={logo} 
                        alt="Logo" 
                    />
                    <div className="block">
                        <div className="education">
                                <div className="header">
                                    <div className="rectangle"></div>
                                    <span className="study">НАВЧАННЯ</span>
                                </div>
                                <div className="des">
                                    <span className="tex">КФККТЕ НАУ</span>
                                    <span className="txt1">Молодший спеціаліст спеціальності "Комп’ютерний інженер"</span>
                                    <span className="txt2">2019 - 2023</span>

                                    <span className="tex1">Державний торговельно-економічний університет</span>
                                    <span className="txt1">Бакалавр спеціальності “Системний аналіз”</span>
                                    <span className="txt2">2023 - 2025</span>
                                </div>
                        </div>
                        <div className="skills">
                            <div className="header">
                                    <div className="rectangle"></div>
                                    <span className="study">НАВИЧКИ</span>
                            </div>
                            
                                <ul className="descr">
                                    <li className="txt">Володіння нотаціями моделювання процесів (BPMN, UML, IDEF)</li>
                                    <li className="txt">Володіння інструментами бізнес-аналізу (Tableau, Excel)</li>
                                    <li className="txt">Знання реляційних СУБД (PostrgeSQL)</li>
                                    <li className="txt">Базові знання SOAP,  REST, XML, JSON</li>
                                    <li className="txt">Знання нереляційних СУБД (MongoDB)</li>
                                    <li className="txt">Знання Agile(Scrum, Kanban) методології</li>
                                </ul>
                        
                        </div>
                        <div className="language">
                            <div className="header">
                                    <div className="rectangle"></div>
                                    <span className="study">ЗНАННЯ МОВ</span>
                            </div>
                            <ul className="descr">
                                <li className="txt">
                                    <div className="uant">
                                        <span className="te">Українська</span>
                                        <span className="te">Native</span>
                                    </div>
                                </li>
                                <li className="txt">
                                    <div className="uant">
                                        <span className="te">Англійська</span>
                                        <span className="te">Pre-Intermediate</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="center">
                    <div className="wrappers">

                   
                        <div className="block">
                        <img
                            className="photo" 
                            width="18px"
                            height="18px"
                            src={phones} 
                            alt="number" 
                        />
                        <span className="text">+380-98-019-1824</span>
                    </div>
                        <div className="block">
                        <img
                            className="photo" 
                            width="18px"
                            height="18px"
                            src={poshta} 
                            alt="number" 
                        />
                        <span className="text">sdenis788@gmail.com</span>
                    </div>
                    <div className="block">
                        <img
                            className="photo" 
                            width="18px"
                            height="18px"
                            src={tlg} 
                            alt="number" 
                        />
                        <span className="text">@rdxcoffe</span>
                    </div>
                    </div>
                </div>
                <div className="rhtcln">
                    <div className="PIB">
                        <span className="name">ДЕНИС</span>
                        <span className="firstname">СТРІЛЬЦОВ</span>
                        <span className="position">Системний аналітик</span>
                    </div>
                    <div className="vlock">
                        <div className="block1">
                            <div className="header"><div className="rectangle"></div><span className="study">ДОСВІД РОБОТИ</span></div>
                            <div className="block_1_1">
                                <div className="shapka">
                                    <span className="txthed">Технічний експерт</span>
                                    <span className="datehed">Січень 2024 - Березень 2024</span>
                                </div>
                                <div className="comas">
                                    <span className="company">Компанія “ЦИТРУС”</span> 
                                    <span className="stdeds">В мої обов’язки входили : </span>
                                </div>
                                <ul className="listdeds">
                                    <li className="li1">Налаштування пристроїв на викладку товарів, а саме встановлення рекламних роликів на ноутбуки, планшети, телевізори, смартфони </li>
                                    <li className="li1">Введення аналітики продажів технічних послуг за допомогою 1С. </li>
                                    <li className="li1">Використання хмарного сховища Google для зберігання аналітики. </li>
                                    <li className="li1">Продажа технічних послуг та товарів Поклеювання захисних покритів на смартфони, планшети</li>
                                </ul>
                            </div>
                        </div>
                        <div className="block2">
                            <div className="block_1_1">
                                <div className="shapka">
                                    <span className="txthed">IOS Розробник</span>
                                    <span className="datehed">Червень 2022 - Жовтень 2022</span>
                                </div>
                                <div className="comas">
                                    <span className="company">Компанія “Digital Invest Advizor”</span> 
                                    <span className="stdeds">В мої обов’язки входили : </span>
                                </div>
                                <ul className="listdeds">
                                    <li className="li1">Створення графічного інтерфейсу мобільного додатка для агробізнесу Moow. Написання та робота с ТЗ відбувалось на хмарному сховищі Google.</li>
                                    <li className="li1">Використання архітектурних паттернів для реалізації додатка, а саме MVVM</li>
                                    <li className="li1">Створення landing page сайту для реклами сервісу криптоторгівлі BitQuant за допомогою фреймоврку ReactJS</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    
                </div>
            </div>
        </div>
    )
}


export default Resume;