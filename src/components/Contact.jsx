import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';

// PcCdZqGOG4pQPeqUh
// template_3k06dp5
// service_u6fyg5e

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

const [loading, setLoading] = useState(false);

//enable fields to be updated
const handleChange = (e) => {
   const { name, value } = e.target;

   setForm({...form, [name]: value})
}

const handleSubmit = (e) => {
  e.preventDefault(); // prevent browser from refreshing
  setLoading(true);

  emailjs.send(
    "service_u0qi12j", 
    "template_3k06dp5",
  {
    from_name: form.name,
    to_name: 'Atikah',
    from_email: form.email,
    to_email: 'atikah.alsagoff@gmail.com',
    message: form.message
  },
  "PcCdZqGOG4pQPeqUh")
  .then(()=>{
    setLoading(false);

    //reset email
    setForm({
      name: '',
      email: '',
      message: ''
    });

    alert('Thanks for dropping me an email! I will get back to you as soon as possible :)')

  }, (error) =>{
    setLoading(false)

    console.log(error);

    alert('Something went wrong. You may email me directly at atikah.alsagoff@gmail.com!')
  })
}


  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse 
    flex gap-10 overflow-hidden">
    <motion.div
    variants={slideIn('left','tween', 0.2, 1)}
    className="flex-[1] p-8 rounded-2xl">
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact Me</h3>
        <p> or you may email me directly at <span className="text-indigo">atikah.alsagoff@gmail.com</span>!</p>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">
              Your Name
            </span>
            <input 
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"/>
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">
              Your Email
            </span>
            <input 
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"/>
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">
              Your Message
            </span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Enter your message"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"/>
          </label>

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-secondary rounded-xl hover:bg-indigo"
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </motion.div>
    </div>
  )

}
export default SectionWrapper(Contact, "contact")

