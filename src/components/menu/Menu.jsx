'use client'
import { useState } from 'react'

const Menu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <>
            <nav className='px-5 sm:px-0 fixed top-0 left-0 right-0 bg-black/70 backdrop-blur-sm z-50'>
                <div className='flex justify-between items-center p-4 max-w-4xl mx-auto'>
                    <div className='text-[24] md:text-4xl font-black'>Lucas Santos</div>
                    <svg 
                        className='md:hidden cursor-pointer overflow-visible' 
                        width="24" 
                        height="18" 
                        viewBox="0 0 28 21" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg"
                        onClick={toggleMenu}
                    >
                        <g>
                            {/* Linha superior */}
                            <line 
                                x1="2" y1="2" x2="26" y2="2"
                                stroke="#D5D7DD" 
                                strokeWidth="3" 
                                strokeLinecap="round"
                                style={{
                                    transform: isMenuOpen ? 'rotate(45deg) translate(4px, 3px)' : 'rotate(0deg) translate(0px, 0px)',
                                    transformOrigin: 'center',
                                    transition: 'transform 0.3s ease-in-out'
                                }}
                            />
                            {/* Linha do meio */}
                            <line 
                                x1="2" y1="10.5" x2="26" y2="10.5"
                                stroke="#D5D7DD" 
                                strokeWidth="3" 
                                strokeLinecap="round"
                                style={{
                                    opacity: isMenuOpen ? 0 : 1,
                                    transition: 'opacity 0.3s ease-in-out'
                                }}
                            />
                            {/* Linha inferior */}
                            <line 
                                x1="2" y1="19" x2="26" y2="19"
                                stroke="#D5D7DD" 
                                strokeWidth="3" 
                                strokeLinecap="round"
                                style={{
                                    transform: isMenuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'rotate(0deg) translate(0px, 0px)',
                                    transformOrigin: 'center',
                                    transition: 'transform 0.3s ease-in-out'
                                }}
                            />
                        </g>
                    </svg>
                    <ul className="hidden md:flex gap-4">
                        <li><a href='#'>Portfolio</a></li>
                        <li><a href='#'>Links</a></li>
                        <li><a href='#'>Contact</a></li>
                    </ul>
                </div>
            </nav>
            
            {/* Menu mobile overlay */}
            <div className={`fixed inset-0 w-screen h-screen bg-black/90 backdrop-blur-sm z-40 flex items-center justify-center ${isMenuOpen ? 'block' : 'hidden'}`}>
                <ul className="text-center space-y-8 text-2xl">
                    <li><a href='#' onClick={toggleMenu}>Portfolio</a></li>
                    <li><a href='#' onClick={toggleMenu}>Links</a></li>
                    <li><a href='#' onClick={toggleMenu}>Contact</a></li>
                </ul>
            </div>
        </>
    );
}

export default Menu;