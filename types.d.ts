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

interface ImageType {
  base: string;
  preview: string;
  full: string;
}

interface InclusionType {
  quantity: number;
  name: string;
}

interface ItemType {
  id: string;
  isNew?: boolean;
  title: string;
  description: string;
  image: ImageType;
  features: string;
  inclusions: InclusionType[];
  price: number;
}