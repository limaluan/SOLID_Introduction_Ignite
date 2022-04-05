import User from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
    name: string;
    email: string;
}

class CreateUserUseCase {
    constructor(private usersRepository: IUsersRepository) {}

    execute({ email, name }: IRequest): User {
        const userAlreadyExists = this.usersRepository.findByEmail(email);
        console.log(userAlreadyExists);

        if (userAlreadyExists) {
            throw new Error("This Email Already Taken.");
        }

        const user = this.usersRepository.create({ name, email });
        console.log(this.usersRepository.list());
        return user;
    }
}

export { CreateUserUseCase };
