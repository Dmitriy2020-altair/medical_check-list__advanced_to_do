import { ADD_USER, DISCHARGE_USER, EDIT_USER_INFO } from './types';

export const addNewUser = (newUserInfo) => ({ type: ADD_USER, payload: newUserInfo });

export const dischargeUser = (dishargeUserId) => ({ type: DISCHARGE_USER, payload: dishargeUserId });

export const editUserInfo = (newUserInfo) => ({ type: EDIT_USER_INFO, payload: newUserInfo });
