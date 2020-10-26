import { ActionTypes } from "./type";
import { createActions } from "redux-actions";
//import proxy from 'http-proxy-middleware';

export const { clearMessage } = createActions({
  [ActionTypes.CLEAR_MESSAGE]: param => ({ ...param })
});
/*
export default function(app) {
  app.use(proxy('/users/**', { target: 'https://obscure-beach-46869.herokuapp.com/' }));
  app.use(proxy('/videos/**', { target: 'https://obscure-beach-46869.herokuapp.com/' }));
  app.use(proxy('/token/**', { target: 'https://obscure-beach-46869.herokuapp.com/' }));
};
*/