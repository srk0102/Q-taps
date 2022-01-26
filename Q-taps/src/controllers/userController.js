import BaseController from "./indexController";
import {host} from '../env'

class UserController {

  userLogin(dataJson, success, failure) {  
    let url = `${host}/login`;
    BaseController.sendRequest(url, "post", dataJson, false, null, success, failure);
  }
  userSignUp(dataJson, success, failure) { 
    let url = `${host}/add/user`;
    BaseController.sendRequest(url, "post", dataJson, false, null, success, failure);
  }
}

export default new UserController();
