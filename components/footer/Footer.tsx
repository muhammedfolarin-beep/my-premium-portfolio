import React from 'react';

export function Footer() {
    return (
        <footer className="w-full py-24 px-6 md:px-12 flex flex-col items-center justify-center bg-[var(--color-text-primary)] text-[var(--color-background)] overflow-hidden">
            <div className="max-w-[1440px] w-full flex flex-col items-center gap-12">
                <div className="flex flex-col md:flex-row gap-8 justify-between w-full uppercase text-[14px] tracking-widest text-[var(--color-text-muted)]">
                    <span>Visual Designer</span>
                    <span>UI/UX Designer</span>
                    <span>Graphic Designer</span>
                </div>
                
                <h1 className="font-heading text-[12vw] leading-none tracking-tighter text-center m-0 p-0 text-[var(--color-background)]">
                    FOLARIN
                </h1>
                
                <div className="flex flex-col md:flex-row justify-between w-full pt-12 border-t border-[var(--color-text-secondary)]/30 text-[14px] text-[var(--color-text-muted)]">
                    <p>&copy; {new Date().getFullYear()} Folarin. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <a href="https://www.linkedin.com/in/folarin-muhammed-48a3a1277/" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-background)] transition-colors">LinkedIn</a>
                        <a href="#" className="hover:text-[var(--color-background)] transition-colors">Behance</a>
                        <a href="https://www.instagram.com/phorlarin10/" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-background)] transition-colors">Instagram</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
