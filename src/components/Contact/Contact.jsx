import React, { useEffect } from 'react'
import ContactInfoCard from '../ContactInfoCard/ContactInfoCard'
import phoneImg from './../../assets/images/phone.svg'
import gmailImg from './../../assets/images/gmail.svg'
import locationImg from './../../assets/images/location.svg'
import emailjs from 'emailjs-com'

const Contact = () => {
  useEffect(() => {
    emailjs.init('87dYS_6WOlp1ytKiV')

    const form = document.getElementById('contact-form')

    const handleSubmit = (event) => {
      event.preventDefault()

      emailjs.sendForm('service_fvmrw3m', 'template_jztyw9g', form).then(
        function () {
          alert('Email sent successfully!')
        },
        function (error) {
          alert('Failed to send email: ' + JSON.stringify(error))
        }
      )
    }

    form.addEventListener('submit', handleSubmit)

    return () => {
      form.removeEventListener('submit', handleSubmit)
    }
  }, [])

  return (
    <section
      className="contact w-4/5 mx-auto my-0 py-24 px-0 max-xl:w-10/12 max-lg:w-11/12"
      id="Contact"
    >
      <p className="top-title text-blue  font-semibold text-lg w-max rounded-1/2 mx-auto my-0 p-3 border border-solid border-blue">
        <span>Contact</span>
      </p>
      <h1 className="text-blacky max-sm:text-3xl max-sm:text-wrap dark:text-white text-4xl w-max my-0 mx-auto font-bold pt-3">
        Let's Discuss Your <span className="text-blue">Project</span>
      </h1>
      <div className="contact-info flex justify-between pt-12 gap-20 max-lg:flex-col">
        <div className="info w-1/3 flex flex-col gap-5 max-lg:w-full">
          <ContactInfoCard
            image={phoneImg}
            label={'Call me'}
            value={'+963 967-535-203 | +963 942-329-307'}
          />
          <ContactInfoCard
            image={gmailImg}
            label={'Email me'}
            value={'mohammed.z.ismaeel@gmail.com'}
          />
          <ContactInfoCard
            image={locationImg}
            label={'Address'}
            value={'Rukin-Aldeen, Damascus, Syria.'}
          />
        </div>
        <div className="form w-2/3 flex justify-end max-lg:w-full max-lg:justify-start">
          <form
            id="contact-form"
            className="flex flex-wrap justify-end gap-y-5 gap-x-14 max-md:justify-center max-w-2xl max-lg:justify-start"
          >
            <input
              type="text"
              placeholder="Full name"
              required
              className="w-5/12 dark:bg-slate-200 max-sm:w-11/12 h-10 border border-solid border-neutral-300 rounded-md pl-3 outline-none focus:border-blue focus:border-2"
              id="fullname"
              name="fullname"
            />
            <input
              type="email"
              placeholder="Your email"
              required
              className="w-5/12 dark:bg-slate-200 max-sm:w-11/12 h-10 border border-solid border-neutral-300 rounded-md pl-3 outline-none focus:border-blue focus:border-2"
              id="youremail"
              name="youremail"
            />
            <input
              type="text"
              placeholder="Your Phone"
              required
              className="w-5/12 dark:bg-slate-200 max-sm:w-11/12 h-10 border border-solid border-neutral-300 rounded-md pl-3 outline-none focus:border-blue focus:border-2"
              id="phone"
              name="phone"
            />
            <input
              type="text"
              placeholder="Budget"
              required
              className="w-5/12 dark:bg-slate-200 max-sm:w-11/12 h-10 border border-solid border-neutral-300 rounded-md pl-3 outline-none focus:border-blue focus:border-2"
              id="budget"
              name="budget"
            />
            <textarea
              id="textarea"
              placeholder="Message"
              required
              className="w-11/12 dark:bg-slate-200 h-32 border border-solid border-neutral-300 rounded py-1 px-3 outline-none resize-none focus:border-blue focus:border-2"
              name="message"
            ></textarea>
            <input
              type="submit"
              value="Submit"
              className="w-36 bg-blue text-white font-medium text-base p-2 mt-3 cursor-pointer rounded-md border border-solid hover:bg-white hover:font-semibold hover:border-solid hover:border-blue hover:text-blue focus:border-blue focus:border-2 hover:transition-all"
            />
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
