import axios from "axios";
import { IGroup } from "@/shared/interfaces/group.interface";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const GetGroup = async (): Promise<IGroup[] | string> => {
  try {
    const { data, status } = await axios.get<IGroup[]>(`${BASE_URL}/group`, {
      headers: { Accept: "application/json" },
    });
    console.log(JSON.stringify(data, null, 4));
    console.log("response status: ", status);
    return data;
  } catch (error) {
    return ErrorHandler(error);
  }
};

const PostGroup = async (name: string): Promise<void | string> => {
  try {
    const { data, status } = await axios.post<IGroup[]>(
      `${BASE_URL}/group`,
      { title: name },
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
    console.log(JSON.stringify(data, null, 4));
    console.log("response status: ", status);
  } catch (error) {
    return ErrorHandler(error);
  }
};

const DeleteGroup = async (id: number): Promise<void | string> => {
  try {
    const { data, status } = await axios.delete<IGroup[]>(
      `${BASE_URL}/group/${id}`,
      {
        headers: { Accept: "application/json" },
      }
    );
    console.log(JSON.stringify(data, null, 4));
    console.log("response status: ", status);
  } catch (error) {
    return ErrorHandler(error);
  }
};

const ErrorHandler = (error: unknown): string => {
  if (axios.isAxiosError(error)) {
    console.error("error message: ", error.message);
    return error.message;
  } else {
    console.error("unexpected error: ", error);
    return "An unexpected error occurred";
  }
};

export { GetGroup, PostGroup, DeleteGroup };
