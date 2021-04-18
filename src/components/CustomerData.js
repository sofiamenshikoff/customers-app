import React from 'react'
import PropTypes from 'prop-types'
import CustomersActions from './CustomersActions'

const CustomerData = ({ id, name, dni, age, onBack, isDeleteAllow, onDelete }) => {
    return (
        <div>
            <div className="customer-data">
                <h2>Client information</h2>
                <div><strong>Name</strong><i>{name}</i>
                <div><strong>DNI</strong><i>{dni}</i></div>
                <div><strong>Age</strong><i>{age}</i></div></div>
            </div>
            <CustomersActions>
                <button onClick={onBack}>Exit</button>
                {isDeleteAllow && <button onClick={() => onDelete(id)}>Delete</button>}
            </CustomersActions>
        </div>
    )
}

CustomerData.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    dni: PropTypes.string.isRequired,
    age: PropTypes.number,
    onBack: PropTypes.func.isRequired,
    isDeleteAllow: PropTypes.bool,
    onDelete: PropTypes.func
}

export default CustomerData
