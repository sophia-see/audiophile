export enum CategoryType {
  headphones = "headphones",
  speakers = "speakers",
  earphones = "earphones"

}

export const fetchProducts = async (type: CategoryType) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products?populate=*&filters[category][$eq]=${type}&sort=updatedAt:desc&sort=createdAt:desc`);
    if (!res.ok) throw new Error("Failed to fetch products");

    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const fetchProductById = async (id: number) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products?populate=*&filters[id][$eq]=${id}`);
    if (!res.ok) throw new Error("Failed to fetch products");

    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};