




import React, { useState } from 'react';

const DropdownWithButton = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
    setIsOpen(false);
  };

  const handleSelectFocus = () => {
    setIsOpen(true);
  };

  const handleButtonClick = () => {
    alert(`Selected option: ${selectedOption}`);
  };

  const containerStyle = {
    backgroundColor: '#000',
    color: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  };

  const formControlStyle = {
    backgroundColor: '#333',
    color: '#fff',
    border: '1px solid #555',
  };

  const buttonStyle = {
    transition: 'margin-top 0.3s ease',
    marginTop: isOpen ? '150px' : '20px',
  };

  return (
    <div className="container mt-4 p-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div style={containerStyle}>
            <div className="form-group">
              <label htmlFor="dropdown" className="my-3">Choose an option:</label>
              <select
                className="form-control"
                id="dropdown"
                value={selectedOption}
                onChange={handleSelectChange}
                onFocus={handleSelectFocus}
                onBlur={() => setIsOpen(false)}
                style={formControlStyle}
              >
                <option value="" disabled>
                  Select an option
                </option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </div>
            <button
              className="btn btn-primary"
              onClick={handleButtonClick}
              disabled={!selectedOption}
              style={buttonStyle}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropdownWithButton;
