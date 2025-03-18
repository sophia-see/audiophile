interface CreateUserParams {
  clerkId: string
  firstName: string
  lastName: string
  email: string
}

interface UpdateUserParams {
  firstName: string
  lastName: string
}

interface DeleteUserParams {
  id: string
}