import { AsyncStorage } from 'react-native';
import axios from 'axios';
import ApiConfig from './ApiConfig';

export async function simplePostCall() {
     let requestBody=JSON.stringify({
         name:'test',
         salary:'123',
         age:15
     })
    return await axios(ApiConfig.POSTAPI, {
        method: 'POST',
        body: requestBody,
    }).then((response) => response.json());

}

export async function simpleGetCall() {
    return await fetch(ApiConfig.GETAPI, { 
        method: 'GET', 
    }).then((response) => response.json());

}

