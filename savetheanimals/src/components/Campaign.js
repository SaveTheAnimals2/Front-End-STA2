import React from 'react';
import { useHistory } from 'react-router-dom';
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import axiosWithAuth from '../utils/AxiosWithAuth';

const Campaign = props => {
    const history = useHistory();
    const { id, title, location, description, species, urgencyLevel, fundingGoals, deadline } = props;
    const dispatch = useDispatch();
    const handleDelete = id => {
        axiosWithAuth().delete(`/campaigns/${id}`)
            .then(response => {
                dispatch({ type: 'GET_CAMPAIGNS' });
                axiosWithAuth().get('/campaigns')
                    .then(response => dispatch({ type: 'SUCCESS', payload: response.data }))
                    .catch(error => dispatch({ type: 'FAILURE', payload: 'Something went wrong. Try again' }))
            })
            .catch(error => dispatch({ type: 'FAILURE', payload: 'Something went wrong. Try again' }))
    }
    return (
        <div>
            <div className='campaign-card'>
                <FaEdit onClick={() => history.push(`/update-campaign/${id}`)} />
                <MdDelete onClick={() => handleDelete(id)} />
                <h3>{title}</h3>
                <p>{location}</p>
                <p>{description}</p>
                <p>{species}</p>
                <p>{urgencyLevel}</p>
                <p>{fundingGoals}</p>
                <p>{deadline}</p>
            </div>
        </div>
    );
};

export default Campaign;