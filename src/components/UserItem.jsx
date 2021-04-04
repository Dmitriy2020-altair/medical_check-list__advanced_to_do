import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { dischargeUser, editUserInfo } from '../actions';
import { calcAge } from '../utils/calculateAge';

const UserItem = ({ user, index }) => {
  const {
    name, surname, id, diagnosis, issue, birthYear, gender,
  } = user;

  const dispatch = useDispatch();

  const [userInfo, setUserInfo] = useState({
    diagnosis, issue, birthYear, gender,
  });

  const handleInputChange = (e) => {
    const { name: nameOfInput, value } = e.target;

    setUserInfo((prevState) => ({
      ...prevState,
      [nameOfInput]: value,
    }));
  };

  const getInputValue = (nameOfInput) => ({ name: nameOfInput, onChange: handleInputChange, value: userInfo[nameOfInput] });

  const dispatchDischargeUser = () => dispatch(dischargeUser(id));

  const [expanded, setExpanded] = useState(false);

  const [edit, setEdit] = useState(false);

  const toggleExpandInfo = () => setExpanded(!expanded);

  const toggleEdit = () => {
    if (edit) dispatch(editUserInfo({ id, ...userInfo }));

    setEdit(!edit);
  };

  return (
    <li className="paper p-2 y">
      <div className="x align-items-center">
        <div className="typography h4">
          #
          {index + 1}
        </div>
        <h5 className="typography h5">{`${name} ${surname}`}</h5>
        <button
          onClick={toggleEdit}
          className="btn align-right"
        >
          {edit ? 'save' : 'edit'}
        </button>
        <button
          onClick={dispatchDischargeUser}
          className="btn"
        >
          discharge
        </button>
        <button
          onClick={toggleExpandInfo}
          className="btn"
        >
          {expanded ? 'x' : 'more'}
        </button>
      </div>
      {expanded && (
        <div className="y">
          <div className="x align-items-center">
            <label className="typography h6">Diagnosis</label>
            <input
              readOnly={!edit}
              className="input typography h6 align-right"
              {...getInputValue('diagnosis')}
            />
          </div>
          <div className="x align-items-center">
            <label className="typography h6">Issue</label>
            <textarea
              readOnly={!edit}
              className="input typography h6 align-right"
              {...getInputValue('issue')}
            />
          </div>
          <div className="x align-items-center">
            <label className="typography h6">Birth Year</label>
            <input
              readOnly={!edit}
              className="input typography h6 align-right"
              {...getInputValue('birthYear')}
            />
          </div>
          <div className="typography">
            Age:
            {' '}
            { calcAge(Number(birthYear)) }
          </div>
          <div className="typography">
            Gender:
            { gender }
          </div>
        </div>
      )}
    </li>
  );
};

export default UserItem;
