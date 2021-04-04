import { ADD_USER, DISCHARGE_USER, EDIT_USER_INFO } from '../../types';

const initialUsersState = {
  maxUserId: 3,
  users: [
    {
      id: 1,
      gender: 'male',
      birthYear: 1985,
      name: 'John',
      surname: 'Dou',
      diagnosis: 'Diarea',
      issue: 'Stomak pain, running stool.',
    },
    {
      id: 2,
      gender: 'male',
      birthYear: 2001,
      name: 'Valentin',
      surname: 'Utochkin',
      diagnosis: 'Enurez',
      issue: 'Peeing in the bad, fucking all around.',
    },
  ],
  dischargedUsersCount: 0,
};

const usersReducer = (state = initialUsersState, action) => {
  const { type, payload = null } = action;

  switch (type) {
    case ADD_USER: {
      const newUserInfo = payload;

      const newUser = {
        id: state.maxUserId++,
        ...newUserInfo,
      };

      return {
        ...state,
        users: [...state.users, newUser],
      };
    }

    case DISCHARGE_USER: {
      const dishargeUserId = payload;

      const filteredUsers = state.users.filter((user) => user.id !== dishargeUserId);

      return {
        ...state,
        dischargedUsersCount: state.dischargedUsersCount + 1,
        users: filteredUsers,
      };
    }

    case EDIT_USER_INFO: {
      const { id: updatedUserId, ...newUserInfo } = payload;
      const updatedUser = state.users.find((user) => user.id === updatedUserId);

      Object.assign(updatedUser, newUserInfo);

      return {
        ...state,
        users: [...state.users],
      };
    }

    default: return state;
  }
};

export const usersReducerSlice = (store) => store.usersReducer;

export default usersReducer;
