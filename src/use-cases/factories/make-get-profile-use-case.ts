import { PrismaUsersRepositorie } from "@/repositories/prisma/prisma-user-repository";
import { GetUserProfileUseCase } from "../get-user-profile";

export function makeGetProfileUseCase () {
  const getProfileRepository = new PrismaUsersRepositorie()
  const useCase = new GetUserProfileUseCase(getProfileRepository)
  return useCase
}