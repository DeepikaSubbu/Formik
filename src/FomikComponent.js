import React from 'react';
 import { useFormik } from 'formik';
 
 function SignupForm ()  {
   const formik = useFormik({
     initialValues: {
       firstName: '',
       lastName: '',
       email: '',
       gender: '',
       courses: 'Angular',
     },
     
    
     
     validate: values=> {
     let  errors={}
      if(!values.firstName){
        errors.firstName='firstname is required'
      }
      if(!values.lastName){
        errors.lastName='lastname is required'
      }
      if(!values.email){
        errors.email='email is required'
      }
      if(!values.gender){
        errors.gender='gender is required'
      }
      return errors;
    },
     
     onSubmit: values => {
      console.log(values);
    },
   });

     
   return (
     <form onSubmit={formik.handleSubmit}>
       <label htmlFor="firstName">First Name: </label>
       <input
         id="firstName"
         name="firstName"
         type="text"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.firstName}
       />
        <span style={{ color: 'red' }}>
                  {formik.touched.firstName && formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}
                </span>
       <br/>
       <br/>
       <label htmlFor="lastName">Last Name: </label>
       <input
         id="lastName"
         name="lastName"
         type="text"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.lastName}
       />
        <span style={{ color: 'red' }}>
        {formik.touched.lastName && formik.errors.lastName ? <div>{formik.errors.lastName}</div> : null}
                </span>
       <br/>
       <br/>
       <label htmlFor="email">Email Address: </label>
       <input
         id="email"
         name="email"
         type="email"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.email}
       />
        <span style={{ color: 'red' }}>
        {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}
                </span>
                <br/>
                <br/>
       <label> Gender : </label>
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                Male
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                Female
               
                <span style={{ color: 'red' }}>
                {formik.touched.gender && formik.errors.gender ? <div>{formik.errors.gender}</div> : null}
                </span>
              
              <br />
              <br/>
             
                <label> Courses : </label>
                <select
                  name="courses"
                  value={formik.values.courses}
                  onChange={formik.handleChange}
                >
                  <option> Angular </option>
                  <option> React </option>
                  <option> Node </option>
                  <option> Mongo </option>
                  </select>
              <br />
              <br/>
       <button type="submit">Submit</button>&nbsp;&nbsp;&nbsp;
       <button type="button" onClick={formik.resetForm}>
                {' '}
                Reset{' '}
              </button>{' '}
     </form>
   );
 };
 export default SignupForm;
