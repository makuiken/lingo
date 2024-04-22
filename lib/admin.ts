import { auth } from "@clerk/nextjs";

export const isAdmin = () => {
  const { userId } = auth();

  return userId === "user_2f1UyiS2eEWB0G1D2drJTP4gGzF";
};
