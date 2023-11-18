import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { styles } from '../styles'
import { SectionWrapper } from '../hoc'
import { EarthCanvas } from './canvas'
import { slideIn } from '../utils/motion'
import React from 'react'



const Contact = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    })
    const formRef = React.useRef<HTMLFormElement>(null);
    const [loading, setLoading] = useState(false);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoading(true)
        // emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID!, process.env.REACT_APP_EMAILJS_TEMPLATE_ID!, formRef.current!, process.env.REACT_APP_EMAILJS_USER_ID!)
        //     .then((result) => {
        //         console.log(result.text)
        //         setLoading(false)
        //         setForm({
        //             name: "",
        //             email: "",
        //             message: "",
        //         })
        //     }, (error) => {
        //         console.log(error.text)
        //         setLoading(false)
        //     })
    }
    return (
        <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
            <motion.div
                variants={slideIn('left', "tween", 0.2, 1)}
                className='flex-[0.75] bg-black-100 p-8 rounded-2xl'

            >
                <p className={styles.sectionSubText}>
                    Get in touch
                </p>
                <h3 className={styles.sectionHeadText}>Contact.</h3>

                <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className='mt-12 flex flex-col gap-8'
                >
                    <label className='flex flex-col'
                    >
                        <span className="font-medium mb-4 text-white">Your Name</span>
                        <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder='What should I call you?'
                            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                        />
                    </label>
                    <label className='flex flex-col'
                    >
                        <span className="font-medium mb-4 text-white">Your Email</span>
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="What's your email?"
                            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                        />
                    </label>
                    <label className='flex flex-col'
                    >
                        <span className="font-medium mb-4 text-white">Your Message</span>
                        <textarea
                            rows={7}

                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            placeholder='What do you want to say?'
                            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                        />
                    </label>
                    <button type="submit" className="bg-tertiary py-3 px-8 outline-none w-fit text-white text-bold shadow-md shadow-primary rounded-xl">
                        {loading ? "Sending..." : "Send"}
                    </button>
                </form>
            </motion.div>
        </div>
    )
}

const ContactSection = SectionWrapper({
    Component: Contact,
    idName: "contact",
})

export default ContactSection