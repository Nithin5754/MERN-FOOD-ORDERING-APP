import { useAuth0 } from "@auth0/auth0-react";
import { useMutation } from "react-query";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

type CreateUserRequest = {
  auth0Id: string;
  email: string;
};

export const useCreateMyUser = () => {
  const { getAccessTokenSilently } = useAuth0();

  const createUserRequest = async (user: CreateUserRequest) => {

    const accessToken=await getAccessTokenSilently()

    
      try {
        const response = await fetch(`${API_BASE_URL}/api/my/user`, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",

          },
          body: JSON.stringify(user),
        });
    
        if (!response.ok) {
          throw new Error("failed to create new user");
        }
      } catch (error) {
        console.log("error /api/my/user:---",error);
        throw new Error("failed to fetch /api/my/user");
      }
  };
  //mutateAsync is remaned to 'createUser'=mutateAsync:createUser
  const {
    mutateAsync: createUser,
    isLoading,
    isError,
    isSuccess,
  } = useMutation(createUserRequest);

  return {
    createUser,
    isError,
    isLoading,
    isSuccess,
  };
};
