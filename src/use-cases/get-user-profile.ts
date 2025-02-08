import { UsersRepositorie } from "@/repositories/user-repository";
import { User } from "@prisma/client";
import { InvalidCredentialsError } from "./errors/invalid-credentials-error";

interface GetUserProfileUseCaseRequest {
    userId: string
}

interface GetUserProfileUseCaseResponse {
    user: User
}

export class GetUserProfileUseCase {
    constructor(
        private usersRepository: UsersRepositorie
    ){}

    async execute({userId}: GetUserProfileUseCaseRequest): Promise<GetUserProfileUseCaseResponse> {
        const user = await this.usersRepository.findById(userId)

        if(!user) {
            throw new InvalidCredentialsError()
        }

        return {
            user,
        }
    }
}