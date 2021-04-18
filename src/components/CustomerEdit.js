import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { reduxForm, Field } from 'redux-form'
import { setPropsAsInitial } from '../helpers/setPropsAsInitial'
import CustomersActions from './../components/CustomersActions'
import { Prompt } from 'react-router'

// const isRequired = value => (
//     !value && "This field is required"
// )

const isNumber = value => (
    isNaN(Number(value)) && "The field must be a number"
)

const validate = values => {
    const error = {}
    
    if(!values.name) {
        error.name = "The field name is required"
    }
    if(!values.dni) {
        error.dni = "The field DNI is required"
    }
    return error
}

const toNumber = value => value && Number(value)
const toUpper = value => value && value.toUpperCase()
const toLower = value => value && value.toLowerCase()
//handleSubmit y submitting es una prop del redux form
class CustomerEdit extends Component {
    componentDidMount() {
      if(this.txt) {
          this.txt.focus()
      }
    }
    
    renderField = ({input, meta, type, label, name, withFocus }) => {
        //const controls = {...input, value: input["value"] || ""}
        return (
            <div>
                <label htmlFor={name}>{label}</label>
                <input 
                    {...input} 
                    type={!type ? "text" : type}
                    ref={withFocus && (txt => this.txt = txt)}/>
                {
                    meta.touched && meta.error && <span>{meta.error}</span>
                }
            </div>
        )
    }

    render(){
        const { handleSubmit, submitting, onBack, pristine, submitSucceeded } = this.props
        return (
            <div>
                    <h2>Edit client</h2>
                    <form onSubmit={handleSubmit}>
                       <Field
                            withFocus 
                            name="name" 
                            component={this.renderField}
                            label="Name"
                            parse={toUpper}
                            format={toLower}>
                        </Field>
                        <Field 
                            name="dni" 
                            component={this.renderField}
                            label="DNI">    
                        </Field>
                        <Field 
                            name="age" 
                            component={this.renderField}
                            type="number"
                            validate={isNumber}
                            label="Age"
                            parse={toNumber}>
                        </Field>
                        <CustomersActions>
                            <button type="submit" disabled={pristine || submitting}>Acept</button>
                            <button type="button" onClick={onBack}>Cancel</button>
                        </CustomersActions>
                        <Prompt
                            //pristine es un boolean que nos indica si hubo algun cambio en el formulario
                            when={!pristine && !submitSucceeded}
                            message="All changes will be discarded">
                        </Prompt>
                    </form>
                </div>
        )
    }
}


CustomerEdit.propTypes = {
    name: PropTypes.string,
    dni: PropTypes.string,
    age: PropTypes.number,
    onBack: PropTypes.func.isRequired
}

const CustomerEditForm = reduxForm(
    {
        form: 'CustomerEdit',
        validate
    })(CustomerEdit)

export default setPropsAsInitial(CustomerEditForm)
