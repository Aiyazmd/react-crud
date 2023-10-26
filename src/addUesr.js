

import logo from './logo.svg';
import React, { useState,useEffect } from 'react';
import { Formik ,Field} from 'formik';

const AddUesr = (props) => {

useEffect(()=>{
   getEditUserData()
},[props.getEditData])
    const [formValues,setFormValues]=useState({id:'', name: '', email: '', age: '', phone: '' })
  //let formValues = { name: '', email: '', age: '', password: '' }


  const getEditUserData=()=>{
    let data=props.getEditData
    let formUserData={...formValues}
    formUserData.name=data?.name
    formUserData.email=data?.email
    formUserData.age=data?.age
    formUserData.password=data?.password
    setFormValues(formUserData)
  }




  const handleSubmit=(values,resetForm) => {
    debugger
    let obj={
        name:values.name,
        age:values.age,
        phone:values.phone,
        email:values.email,
        id:values?.id
    }
        props.getUserList(obj)
        resetForm()
  }


  return (

    <div>
      <Formik
        initialValues={props.isEdit?props.getEditData:formValues}
        
      >
        {({
         
          errors,
          touched,
          resetForm,
          values
          /* and other goodies */
        }) => (
          <form >
            <lable>Name</lable>
            <Field
              type="text"
              name="name"
             // defaultValue={ formValues?.name}
            />
            <lable>Email</lable>
            <Field
              type="email"
              name="email"
              //defaultValue={  formValues?.email}
            />
            {errors.email && touched.email && errors.email}
            <lable>Age</lable>
            <Field
              type="text"
              name="age"
              //defaultValue={  formValues?.age}
            />
            <lable>Password</lable>
            <Field
              type="text"
              name="phone"
             // defaultValue={  formValues?.phone}
            />
            
            <button type="button"  onClick={()=>handleSubmit(values,resetForm)}>
              Submit
            </button>
          </form>
        )}
      </Formik>
    </div>
  )
}

export default AddUesr;
