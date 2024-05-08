"use client"
import emailjs from "@emailjs/browser";

const sendEmail = (e) => {
    e.preventDefault();
    emailjs
        .sendForm(
            process.env.NEXT_PUBLIC_SERVICE_ID,
            process.env.NEXT_PUBLIC_TEMPLATE_ID,
            e.target,
            process.env.NEXT_PUBLIC_USER_ID
        )
        .then(
            (result) => {
                console.log(result.text);
            },
            (error) => {
                console.log(error.text);
            }
        );
    e.target.reset();
};

const ContactForm = () => {
    return (
        <form onSubmit={sendEmail} className='col-span-12 md:col-span-6'>
            <div className='w-[90%] md:w-[80%] mx-auto md:space-y-8 space-y-14'>
                <div className='space-y-3'>
                    <div className='text-white text-4xl md:text-[1.2rem]'>Name And Last Name</div>
                    <input type='text' name='fullname' placeholder="Your name" className='placeholder-gray-600 w-full outline-none border-[1px] text-[2rem] md:text-[1rem] text-white bg-transparent border-red-500 rounded-lg py-[2rem] md:py-2 px-5' required />
                </div>
                <div className='space-y-3'>
                    <div className='text-white text-4xl md:text-[1.2rem]'>Email</div>
                    <input type='email' name='email' placeholder="Your@company.com" className='placeholder-gray-600 w-full outline-none border-[1px] text-white bg-transparent text-[2rem] md:text-[1rem] border-red-500 rounded-lg py-[2rem] md:py-2 px-5' required />
                </div>
                <div className='space-y-3'>
                    <div className='text-white text-4xl md:text-[1.2rem]'>Phone</div>
                    <input type='text' name='phoneNumber' placeholder="+91" className='placeholder-gray-600 w-full outline-none border-[1px] text-white bg-transparent text-[2rem] md:text-[1rem] border-red-500 rounded-lg py-[2rem] md:py-2 px-5' required />
                </div>
                <div className='space-y-3'>
                    <div className='text-white text-4xl md:text-[1.2rem]'>How Can We Help</div>
                    <textarea name="message" placeholder="Tell us a little about your query" className='placeholder-gray-600 w-full outline-none border-[1px] text-white resize-none bg-transparent border-red-500 text-[2rem] md:text-[1rem] rounded-lg py-[2rem] md:py-2 px-5' rows={7} required></textarea>
                </div>
                <div>
                    <button type="submit" className='rounded-[3.5rem] text-white text-3xl md:text-[1.2rem] hover:scale-90 transition-all hover:bg-opacity-70 bg-[#F02828] md:py-[4px] md:px-3 px-10 py-[1.5rem]'>SUBMIT</button>
                </div>
            </div>
        </form>
    )
}

export default ContactForm