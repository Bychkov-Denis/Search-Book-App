import React from 'react';

const MySelect = ({label, categories, sortedFunction}) => {
    return (
        <>
            <span className="text-white">{label}</span>
            <select className="form-select form-select-sm mb-3" aria-label=".form-select-lg example" defaultValue={categories[0]} onChange={event => sortedFunction(event.target.value)}>
                {
                    categories.map(option => 
                        <option key = {option} value = {option}>{option.toLowerCase()}</option>
                    )
                }
            </select>
        </>
    );
}

export default MySelect;
