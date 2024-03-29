// ========================================= STATE ========================================

// import React, {useState} from "react";

// import { useNavigate } from "react-router-dom";

// const Login=()=> {
//     const navigate = useNavigate();
//     const [form, setForm] = useState({
//         email:"",
//         password:"",
//     })
//     const handleChange=(e)=> {
//         setForm({
//             ...form,
//             [e.target.name]: e.target.value
//         })
//     }
//     const submitForm=(event)=> {
//         event.preventDefault();
//         setForm({
//             ...form,
//             email: "admin@gmail.com",
//             password: "letmein"
//         })
//         if(form) {
//             setTimeout(()=>{
//                 alert("Login successfully!!!")
//             }, 2000)
            
//             navigate('/Home', {state: form})
//         }


//     }
//     return (
//         <div>
//             <form className="form-control" onSubmit={submitForm}>
//                 <div>
//                     <label htmlFor="email">Email:</label>
//                     <input type="text" name="email" value={form.email} onChange={handleChange}/>
//                 </div>
//                 <div>
//                     <label htmlFor="password">Password:</label>
//                     <input type="password" name="password" value={form.password} onChange={handleChange}/>
//                 </div>
//                 <button type="submit">Login</button>

//             </form>

//         </div>
//     )
// }
// export default Login;

// ================================================== VALIDATE FORM BY FORMIK ========================================

// import { ErrorMessage, Field, Form, Formik } from "formik";

// import React from "react";
// import { useNavigate } from "react-router-dom";

// const Login=()=> {
//     const navigate = useNavigate();
//     const handleSubmit=(values, {resetForm})=> {
//         navigate('/Home', {state: values});
//         resetForm();
//     }
//     return (
//         <Formik
//             initialValues={{email:"", password:""}}
//             validate={values=>{
//                 let error ={};
//                 if(values.email !== "admin@gmail.com") {
//                     error.email = "Invalid email address"
//                 }
//                 if(values.password !== "letmein") {
//                     error.password = "Password is unvalid"
//                 }
//                 return error;
//             }}
//             onSubmit={handleSubmit}

//         >
//             {({isSubmitting})=> (
//                 <Form>
//                     <div>
//                         <label htmlFor="email">Email:</label>
//                         <Field type='text' name='email'/>
//                         <ErrorMessage name="email" component="div" className="error"/>
//                     </div>
//                     <div>
//                         <label htmlFor="password">Password:</label>
//                         <Field type='password' name='password'/>
//                         <ErrorMessage name="password" component="div" className="error"/>
//                     </div>
//                     <button type="submit" disabled={isSubmitting}>Login</button>
//                 </Form>

//             )}

//         </Formik>

//     )
// }
// export default Login;


// ================================================== VALIDATE FORM BY FORMIK YUP========================================

import * as Yup from 'yup';

import { ErrorMessage, Field, Form, Formik } from 'formik';

import React from 'react';
import { useNavigate } from 'react-router-dom';

const validationSchema = Yup.object().shape({
    email: Yup.string()
        .matches('admin@gmail.com', "Invalid email address!!!"),
    password: Yup.string()
        .matches('letmein', "Password is not macth!!!")
})

const Login =()=> {
    const navigate = useNavigate();
    const submitForm=(values, {resetForm})=>{
        if (values) {
            setTimeout(()=> {
                alert("Login successfully!!!")
            }, 3000)
            navigate('/Home', {state: values})
        }
        resetForm();

    }
    return (
        <Formik
            initialValues={{email:"", password:""}}
            validationSchema={validationSchema}
            onSubmit={submitForm}
        >
            {({isSubmitting})=> (
                <Form>
                    <div>
                        <label htmlFor='email'>Email:</label>
                        <Field type='text' name='email'/>
                        <ErrorMessage name='email' component="div" className='error'/>

                    </div>
                    <div>
                        <label htmlFor='password'>Password:</label>
                        <Field type='password' name='password'/>
                        <ErrorMessage name='password' component="div" className='error'/>

                    </div>
                    <button type='submit' disabled={isSubmitting}>Login</button>
                </Form>
            )}

        </Formik>

    )
}
export default Login;