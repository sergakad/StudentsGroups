import axios from "axios";
import { IStudent } from "@/shared/interfaces/student.interface";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const GetStudent = async (groupID: number): Promise<IStudent[] | string> => {
  try {
    const { data, status } = await axios.get<IStudent[]>(
      `${BASE_URL}/student?groupId=${groupID}`,
      {
        headers: { Accept: "application/json" },
      }
    );
    console.log(JSON.stringify(data, null, 4));
    console.log("response status: ", status);
    return data;
  } catch (error) {
    return ErrorHandler(error);
  }
};

const PostStudent = async (
  name: string,
  photo: string,
  groupId: number
): Promise<void | string> => {
  try {
    const { data, status } = await axios.post<IStudent[]>(
      `${BASE_URL}/student`,
      { name: name, photo: photo, groupId: groupId },
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

const DeleteStudent = async (id: number): Promise<void | string> => {
  try {
    const { data, status } = await axios.delete<IStudent[]>(
      `${BASE_URL}/student/${id}`,
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

export { GetStudent, PostStudent, DeleteStudent };
