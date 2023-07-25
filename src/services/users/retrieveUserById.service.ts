import path from "path";
import { iUser, iUserRes } from "../../interfaces/users.interface";
import { userResSchema } from "../../schemas/users.schema";

const retrieveUserByIdService = async (user: iUser): Promise<iUserRes> => {
  const { id, avatar, ...userData }: iUserRes = userResSchema.parse(user);

  const dataUser: iUserRes = {
    id: id,
    ...userData,
    avatar: user.avatar ? path.join(__dirname, user.avatar?.path!) : null,
  };

  return dataUser as iUserRes;
};

export default retrieveUserByIdService;
