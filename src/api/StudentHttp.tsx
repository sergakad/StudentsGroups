import axios from "axios";
import { $api } from ".";
import { IStudent } from "@/shared/interfaces/student.interface";

const GetStudent = async (groupID: number): Promise<IStudent[] | string> => {
  try {
    const { data, status } = await $api.get<IStudent[]>(
      `student?groupId=${groupID}`,
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
    const { data, status } = await $api.post<IStudent[]>(
      "student",
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
    const { data, status } = await $api.delete<IStudent[]>(`student/${id}`, {
      headers: { Accept: "application/json" },
    });
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
