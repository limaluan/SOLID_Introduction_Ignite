import { Request, Response } from "express";
import User from "modules/users/model/User";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
    constructor(private showUserProfileUseCase: ShowUserProfileUseCase) {}

    handle(request: Request, response: Response): Response {
        const { user_id } = request.params;
        let user: User;

        try {
            user = this.showUserProfileUseCase.execute({ user_id });
        } catch (err) {
            return response.status(404).send({ error: err });
        }

        return response.send(user);
    }
}

export { ShowUserProfileController };
