

'use client'

import { ChangeEvent, useState,FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";

export default function ContactPage(){
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    });

    const [loading, setLoading] = useState(false);

    // Status for messages
    const [status,setStatus] = useState<{ type: 'success' | 'error' | null, message:string }>({
        type: null,
        message: ''
    })

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        // Use 'id' to match the state keys
        setFormData(prev => ({ ...prev, [id]: value }));

        // Clear status when user starts typing again
        if(status.type) setStatus({type:null,message:''});
    }

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setStatus({type:null,message:''});

        try {
            const response = await fetch('/api/send', {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (response.ok) {
                setStatus({type:'success',message:'Order request sent! Ali will get back to you soon.'})
                setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '' });
            } else {
                setStatus({type:'error',
                    message:result.error?.message || "Something went wrong"
                });
            }
        } catch (err) {
            setStatus({type:'error',message:'Network error. Please check your connection.'});
            alert("Network error. Please check your connection.");
        } finally {
            setLoading(false);
        }
    };

    return(
        <>
            <section className="container mx-auto pt-15 md:pt-18">
                {/* Heading */}
                <h1 className="text-4xl md:text-5xl text-secondary font-bold text-center">
                    Contact Us
                </h1>

                <div className="flex flex-col lg:flex-row gap-10 p-5">
                    {/* Information Container */}
                    <div className="lg:w-1/3 flex flex-col gap-5 text-center lg:justify-center">
                        <div className="">
                            <h2 className="text-xl font-medium">
                                Pick Up Location
                            </h2>
                            <h1 className="text-2xl text-secondary font-bold">
                                Welland / Vineland
                            </h1>
                            <p className="">
                                Delivery available for a fee
                            </p>
                        </div>
                        <div className="">
                            <h2 className="text-xl font-medium">
                                Get in Touch
                            </h2>
                            <p className="flex items-center justify-center gap-2 font-medium">
                                Email:
                                <Link href="mailto:alibakescakes1@gmail.com"  
                                    className="text-primary hover:text-secondary"
                                >
                                    alibakescakes@gmail.com
                                </Link>
                            </p>
                            <p className="flex items-center justify-center gap-2 font-medium">
                                Phone:
                                <span className="">
                                    905-923-6618
                                </span>
                            </p>
                        </div>
                    </div>

                    {/* Input Form */}
                    <form onSubmit={handleSubmit} className="lg:w-2/3 p-5 md:p-10 rounded-3xl shadow-sm border border-border gap-5 flex flex-col justify-center bg-secondary-foreground">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="first" 
                                    className="font-semibold text-secondary"
                                >
                                    First Name
                                </label>
                                <Input id="firstName" 
                                    type="text" 
                                    className="h-10 rounded-lg placeholder:text-foreground/40 focus:placeholder:text-transparent" 
                                    placeholder="Jane"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="last" 
                                    className="font-semibold text-secondary "
                                >
                                    Last Name
                                </label>
                                <Input id="lastName" 
                                    type="text" 
                                    className="h-10 rounded-lg placeholder:text-foreground/40 focus:placeholder:text-transparent" 
                                    placeholder="Doe"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="email" 
                                    className="font-semibold text-secondary"
                                >
                                    Email
                                </label>
                                <Input id="email" 
                                    type="email" 
                                    className="h-10 rounded-lg placeholder:text-foreground/40 focus:placeholder:text-transparent" 
                                    placeholder="jane@example.com" 
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="phone" 
                                    className="font-semibold text-secondary"
                                >
                                    Phone Number
                                </label>
                                <Input id="phone" 
                                    type="number" 
                                    className=" h-10 rounded-lg placeholder:text-foreground/40 focus:placeholder:text-transparent" 
                                    placeholder="(905) 000-0000"
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="message" 
                                className="font-semibold text-secondary"
                            >
                                Comments and Questions
                            </label>
                            <Textarea
                                id="message"
                                className="min-h-37.5 rounded-2xl placeholder:text-foreground/40 focus:placeholder:text-transparent"
                                placeholder="Tell us what you think..."
                                value={formData.message}
                                onChange={handleChange}
                            />
                        </div>

                        {/* Status Popover */}
                        {status.type && (
                            <div className={`p-4 rounded-lg border border-border text-md text-center animate-in fade-in zoom-in duration-30 text-secondary-foreground font-bold ${
                                status.type === 'success' ? 'bg-success ' : 'bg-error'
                            }`}>
                                {status.message}
                            </div>
                        )}
                        <div className="flex justify-center">
                            <Button type="submit"
                                disabled={loading}
                                className="h-12 w-1/2 md:w-1/3 text-lg hover:scale-105 transition-transform"
                            >
                                {loading ? "Sending..." : "Send Message"}
                            </Button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
}