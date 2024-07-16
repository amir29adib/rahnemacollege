import { v4 as uuidv4 } from "uuid";
import { User, users } from "../models/user.model";
import { HttpError } from "../utilities/http-error";
import { GeneralUserDto } from "./user/dto/general-user.dto";


export const createUser = (dto: GeneralUserDto) => {
    if(dto.username === '' || dto.password === '') {
        throw new HttpError(400, 'Username or Password is empty!');
    }

    const existUser = users.find(item => item.username === dto.username);
    if(existUser !== undefined) {
        throw new HttpError(400, 'This Username is exist!');
    }

    const user: User = {
        id: uuidv4(),
        username: dto.username,
        password: dto.password,
    }
    users.push(user);
}