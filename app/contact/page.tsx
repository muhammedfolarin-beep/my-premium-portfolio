import React from 'react';
import Link from 'next/link';
import { Typography } from '@/components/ui/Typography';
import { Button } from '@/components/ui/Button';

export const metadata = {
    title: 'Contact | Folarin',
};

export default function ContactPage() {
    return (
        <main className="relative min-h-screen pt-32 pb-24 px-6 md:px-12 w-full max-w-[1440px] mx-auto flex items-center">
            {/* Back Button */}
            <div className="absolute top-12 left-6 md:left-12">
                <Link href="/">
                    <Button variant="outline" size="sm" className="gap-2 flex items-center border-[var(--color-border-default)] hover:bg-[var(--color-surface)]">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                        Back to Home
                    </Button>
                </Link>
            </div>

            <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8">
                
                {/* Left Column: Headings & Info */}
                <div className="flex flex-col justify-center max-w-lg mt-8 md:mt-0">
                    <Typography variant="h1" className="text-[48px] md:text-[64px] lg:text-[80px] leading-[1.05] mb-6">
                        Let's talk<br />
                        about your<br />
                        next big idea
                    </Typography>
                    
                    <Typography variant="body" className="text-[var(--color-text-secondary)] text-[18px] mb-16 max-w-md">
                        Let's discuss your project, goals, and how we can work together.
                    </Typography>
                    
                    <div className="flex flex-col gap-10">
                        <div className="flex flex-col gap-2">
                            <span className="text-[12px] uppercase tracking-widest text-[var(--color-accent)] font-semibold">Email</span>
                            <a href="mailto:muhammed.folarin@gmail.com" className="text-[16px] hover:text-[var(--color-text-muted)] transition-colors">
                                muhammed.folarin@gmail.com
                            </a>
                        </div>
                        
                        <div className="flex flex-col gap-2">
                            <span className="text-[12px] uppercase tracking-widest text-[var(--color-accent)] font-semibold">Social</span>
                            <div className="flex flex-col gap-2">
                                <a href="https://www.linkedin.com/in/folarin-muhammed-48a3a1277/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[16px] hover:text-[var(--color-text-muted)] transition-colors">
                                    <svg className="w-5 h-5 text-[var(--color-accent)]" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                                    LinkedIn
                                </a>
                                <a href="https://www.instagram.com/phorlarin10/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[16px] hover:text-[var(--color-text-muted)] transition-colors">
                                    <svg className="w-5 h-5 text-[var(--color-accent)]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                                    Instagram
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column: Form Container */}
                <div className="bg-[var(--color-surface)] border border-[var(--color-border-soft)] p-8 md:p-12 rounded-[var(--radius-card)] w-full shadow-floating">
                    <form action="https://formsubmit.co/muhammed.folarin@gmail.com" method="POST" className="flex flex-col gap-6">
                        {/* Hidden fields for FormSubmit */}
                        <input type="hidden" name="_subject" value="New Discovery Call Booking!" />
                        <input type="text" name="_honey" style={{ display: 'none' }} />
                        <input type="hidden" name="_template" value="box" />
                        
                        <div className="flex flex-col gap-2">
                            <label htmlFor="name" className="text-[10px] md:text-[12px] uppercase tracking-widest text-[var(--color-text-secondary)] font-semibold">Full Name</label>
                            <input type="text" name="name" id="name" required placeholder="Jane Doe" className="bg-[var(--color-background)]/50 border border-[var(--color-border-default)] px-4 py-3 rounded-[var(--radius-button)] focus:outline-none focus:border-[var(--color-text-primary)] transition-colors w-full" />
                        </div>
                        
                        <div className="flex flex-col gap-2">
                            <label htmlFor="email" className="text-[10px] md:text-[12px] uppercase tracking-widest text-[var(--color-text-secondary)] font-semibold">Email Address</label>
                            <input type="email" name="email" id="email" required placeholder="jane@example.com" className="bg-[var(--color-background)]/50 border border-[var(--color-border-default)] px-4 py-3 rounded-[var(--radius-button)] focus:outline-none focus:border-[var(--color-text-primary)] transition-colors w-full" />
                        </div>
                        
                        <div className="flex flex-col gap-2">
                            <label htmlFor="phone" className="text-[10px] md:text-[12px] uppercase tracking-widest text-[var(--color-text-secondary)] font-semibold">Phone Number</label>
                            <input type="tel" name="phone" id="phone" required placeholder="+1 (555) 000-0000" className="bg-[var(--color-background)]/50 border border-[var(--color-border-default)] px-4 py-3 rounded-[var(--radius-button)] focus:outline-none focus:border-[var(--color-text-primary)] transition-colors w-full" />
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="date" className="text-[10px] md:text-[12px] uppercase tracking-widest text-[var(--color-text-secondary)] font-semibold">Preferred Date</label>
                                <input type="date" name="date" id="date" required className="bg-[var(--color-background)]/50 border border-[var(--color-border-default)] px-4 py-3 rounded-[var(--radius-button)] focus:outline-none focus:border-[var(--color-text-primary)] transition-colors w-full" />
                            </div>
                            
                            <div className="flex flex-col gap-2">
                                <label htmlFor="time" className="text-[10px] md:text-[12px] uppercase tracking-widest text-[var(--color-text-secondary)] font-semibold">Preferred Time</label>
                                <select name="time" id="time" required defaultValue="" className="bg-[var(--color-background)]/50 border border-[var(--color-border-default)] px-4 py-3 rounded-[var(--radius-button)] focus:outline-none focus:border-[var(--color-text-primary)] transition-colors w-full appearance-none">
                                    <option value="" disabled>Select a time</option>
                                    <option value="09:00 AM">09:00 AM</option>
                                    <option value="10:00 AM">10:00 AM</option>
                                    <option value="11:00 AM">11:00 AM</option>
                                    <option value="01:00 PM">01:00 PM</option>
                                    <option value="02:00 PM">02:00 PM</option>
                                    <option value="03:00 PM">03:00 PM</option>
                                    <option value="04:00 PM">04:00 PM</option>
                                    <option value="05:00 PM">05:00 PM</option>
                                </select>
                            </div>
                        </div>
                        
                        <div className="flex flex-col gap-2">
                            <label htmlFor="info" className="text-[10px] md:text-[12px] uppercase tracking-widest text-[var(--color-text-secondary)] font-semibold">Additional Information</label>
                            <textarea name="info" id="info" rows={4} placeholder="Tell me about your project..." className="bg-[var(--color-background)]/50 border border-[var(--color-border-default)] px-4 py-3 rounded-[var(--radius-button)] focus:outline-none focus:border-[var(--color-text-primary)] transition-colors w-full resize-none"></textarea>
                        </div>
                        
                        <div className="mt-4">
                            <Button type="submit" variant="primary" size="lg" className="w-full md:w-auto px-8">
                                Schedule Call
                            </Button>
                        </div>
                    </form>
                </div>

            </div>
        </main>
    );
}
