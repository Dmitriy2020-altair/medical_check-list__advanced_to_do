import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNewUser } from '../actions';

const initialUserInfo = {
  name: '',
  surname: '',
  diagnosis: '',
  issue: '',
  birthyear: 1970,
  gender: 'male',
};

const UserForm = () => {
  const [newUserInfo, setNewUserInfo] = useState(initialUserInfo);

  const dispatch = useDispatch();

  const dispatchAddUser = () => {
    dispatch(addNewUser(newUserInfo));
    setNewUserInfo(initialUserInfo);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setNewUserInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const getInputValue = (name) => ({ name, onChange: handleInputChange, value: newUserInfo[name] });

  return (
    <div className="paper y p-2">
      <input
        className="input"
        type="text"
        placeholder="Name"
        {...getInputValue('name')}
      />
      <input
        className="input"
        type="text"
        placeholder="Surname"
        {...getInputValue('surname')}
      />
      <input
        className="input"
        type="text"
        placeholder="Diagnosis"
        {...getInputValue('diagnosis')}

      />
      <textarea
        className="input"
        type="text"
        placeholder="Issue"
        {...getInputValue('issue')}
      />
      <input
        className="input"
        type="number"
        placeholder="Birthyear"
        {...getInputValue('birthyear')}
      />
      <div className="y">
        <div className="x">
          <label
            htmlFor="gender-male"
            className="typography h6"
          >
            Male
          </label>
          <input
            id="gender-male"
            type="radio"
            name="gender"
            onChange={handleInputChange}
            value="male"
          />
        </div>
        <div className="x">
          <label
            htmlFor="gender-female"
            className="typography h6"
          >
            Female
          </label>
          <input
            id="gender-female"
            type="radio"
            name="gender"
            onChange={handleInputChange}
            value="female"
          />
        </div>
        <button
          onClick={dispatchAddUser}
          className="btn"
        >
          Add user
        </button>
      </div>
    </div>
  );
};

export default UserForm;
