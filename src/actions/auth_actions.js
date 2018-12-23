import axios from 'axios';
import { API_URL } from '../settings/server_url'

export function signin({ username, password }) {
    return function(dispatch) {
        axios.get(`${API_URL}/auth/`)
            .then(response => {
                console.log("debug", response)
            })
            .catch(error => {
                console.log("error", error)
            })
    //   axios.post(`${API_URL}/api-token-auth/`, { username, password })
    //     .then(response => {
    //       if (response.data.success) {
    //         localStorage.setItem("token", response.data.token);
    //         localStorage.setItem("user", JSON.stringify(response.data.user));
    //         dispatch({type: 'AUTH_USER', 'userInfo':JSON.stringify(response.data.user)});
    //         dispatch({type: 'LOAD_USER', payload:response.data.user});
    //         dispatch({ type:'LOAD_LOGIN_TRUE' });
    //         // history.replace('/profilo');
    //         // Riccardo, set up so otherwise some things do not work
  
    //         if(refreshPage!=null){
    //           location.reload();
    //           return;
    //         }
    //         window.location.href = '/profilo';
    //       } else {
    //         dispatch({ type:'LOAD_LOGIN_TRUE' });
    //         alert(response.data.errors[0]);
    //       }
    //     })
    //     .catch((error) => {
    //       dispatch({ type:'LOAD_LOGIN_TRUE' });
    //       if (process.env.NODE_ENV !== 'production') {
    //         console.log("loginUser",error);
    //       }
    //     });
      }
  }