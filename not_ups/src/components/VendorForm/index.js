import React, { useState } from 'react';
import style from './index.module.css';
import axios from 'axios';

export const VendorForm = (props) => {
    const [id, setId] = useState('');
    const [location, setLocation] = useState('');
    const [submitType, setSubmitType] = useState('')

    // Form submission process. 
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post(`/api/${submitType}`, {
            packageId: id,
            packageLocation: location,
        }).then(res => {
            props.dataCallback(res.data)
            setId('')
            setLocation('')
        })
    }
    return (
        <div>
            <h2>Vendor Package Creation/Update</h2>
            <form onSubmit={handleSubmit}>
                <div className={style.grid} >
                    <label>
                        PackageId:
                    </label>
                    <input type='text' name='packageId' onChange={(e) => setId(e.target.value)} value={id} />
                    <label>
                        PackageLocation:
                    </label>
                    <input type='text' name='packageLocation' onChange={(e) => setLocation(e.target.value)} value={location} />
                </div>
                <input type='submit' value='Create' onClick={() => setSubmitType('create')} />
                <input type='submit' value='Update' onClick={() => setSubmitType('update')} />
            </form>
        </div>

    )
}