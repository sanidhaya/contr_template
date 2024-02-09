import React,{useRef,useState} from 'react'
import emailjs from 'emailjs-com'

const ContactForm = () => {

    const [formStatus, setFormStatus] = useState('send')

    const onSubmit = (e) => {
        e.preventDefault()

        setFormStatus('Submitting')

        const {name ,email, message} = e.target.elements

        let coFom = {
            name: name.value,
            email : email.value,
            message:message.value
        }
        console.log(coFom)
    }

    const form = useRef();

    const sendForm = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_knw256o','template_pn94car',form.current,'xPzRDrBkY_vdthncu')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        })
    }


  return (
    <div className='container mt-5'>
    <form ref={form} onSubmit={[sendForm,onSubmit]}>
        <div className='mb-3'>
            <label className='form-label' htmlFor='name'>Name</label>
            <input type='text' name='user_name' className='form-control' />
        </div>
        <div className='mb-3'>
            <label className='form-label' htmlFor='email'>Email</label>
            <input type='text' name='user_email' className='form-control'/>
        </div>
        <div className='mb-3'>
            <label className='form-label' htmlFor='message'>Message</label>
            <textarea name='message' className='form-control'/>
        </div>    
        <button className='btn btn-danger' type='submit'>
            {formStatus}
        </button>
    </form>
    </div>
  )
}

export default ContactForm
