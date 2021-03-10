import { useState } from 'react'
import axios from 'axios'

import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import FormControl from '@material-ui/core/FormControl'

const ContactForm = () => {
    const [data, setData] = useState({name: '', email: '', message: '', sent: false, buttonText: 'Submit', err: ''});
    const [valid, setValid] = useState({name: true, email: true, message: true});

    const handleChange = (e) => {
        const {name, value} = e.target;
        setData({
            ...data,
            [name]: value
        });
    }

    const resetForm = () =>{
        setData({
            name: '',
            email: '',
            message: '',
            sent: false,
            buttonText: 'Submit',
            err: ''
        });
    }

    const validateForm = () => {
        let no_error = true;
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        setValid({
            name: data.name ? true : (false, no_error=false),
            email: re.test(data.email) ? true : (false, no_error=false),
            message: data.message.length > 10 ? true : (false, no_error=false)
        })
        return no_error;
    }

    const formSubmit = (e) => {
        e.preventDefault();

        let no_error = false;
        no_error = validateForm();
        if(no_error){
            setData({
                ...data,
                buttonText: 'Sending...'
            })
    
            axios.post('/api/sendmail', data)
            .then(response => {
                if(response.data.result !== 'success'){
                    setData({
                        ...data,
                        buttonText: 'Submit',
                        sent: false,
                        err: 'failed to send'
                    });
                    alert('Failed to send')
                }else{
                    setData({
                        ...data,
                        sent: true,
                        err: 'success'
                    });
                    alert('Message Sent!')
                }
            }).catch( (error) => {
                setData({
                    ...data,
                    buttonText: 'Submit',
                    err: 'fail'
                })
                alert('Failed to send')
            })
        }
    }

    return (
        <div className="contact-form">
            <FormControl fullWidth={true}>
                <TextField required label="Full Name" variant="filled" id="full-name" name="name" value={data.name} className="form-field" onChange={handleChange} error={valid.name ? false : true} helperText={valid.name ? "":"This field is required."}/>
            </FormControl>
            <FormControl fullWidth={true}>
                <TextField required label="Email" id="email" name="email" variant="filled" value={data.email} className="form-field" onChange={handleChange} error={valid.email ? false : true} helperText={valid.email ? "":"Please enter a valid email."}/>
            </FormControl>
            <FormControl fullWidth={true}>
                <TextField required label="Message" variant="filled" name="message" multiline={true} rows="10" value={data.message} className="form-field" onChange={handleChange} error={valid.message ? false : true} helperText={valid.message ? "":"More characters are required."}/>
            </FormControl>
            <FormControl>
                <div className="form-submit">
                    <Button variant="contained" color="primary" onClick={formSubmit}>{data.buttonText}</Button>
                </div>
            </FormControl>
        </div>
    )
}

export default ContactForm
