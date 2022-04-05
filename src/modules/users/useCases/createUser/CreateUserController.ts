import { Response, Request } from "express";
import User from "modules/users/model/User";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
    constructor(private createUserUseCase: CreateUserUseCase) {}

    handle(request: Request, response: Response): Response {
        const { name, email } = request.body;
        let user: User;

        try {
            user = this.createUserUseCase.execute({ email, name });
        } catch (err) {
            return response.status(400).send({ error: err });
        }

        return response.status(201).send(user);
    }
}

export { CreateUserController };
