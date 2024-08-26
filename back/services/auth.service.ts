// import {
//   // SessionDocument,
//   // SessionModel,
//   UserDocument,
//   UserModel,
//   UserProps,
// } from "../models";
// import { ApiErrorCode } from "../api-error-code.enum";
// import { SecurityUtils } from "../utils";
// import { Types } from "mongoose";
// // import { RoleService } from "./role.service";

// export class UserService {
//   private static instance: UserService;

//   private constructor() {}

//   public static getInstance(): UserService {
//     if (UserService.instance === undefined) {
//       UserService.instance = new UserService();
//     }
//     return UserService.instance;
//   }

//   public async subscribeUser(
//     subcribe: UserSubscribe
//   ): Promise<UserDocument | ApiErrorCode> {
//     try {
//       const role = await RoleService.getInstance().getByName(subcribe.roleName);
//       if (!role) {
//         return ApiErrorCode.notFound;
//       }
//       const model = new UserModel({
//         login: subcribe.login,
//         firstname: subcribe.firstname,
//         lastname: subcribe.lastname,
//         password: SecurityUtils.sha256(subcribe.password),
//         role,
//       });
//       const user = await model.save();
//       return user;
//     } catch (err) {
//       return ApiErrorCode.alreadyExists;
//     }
//   }
// }

// export interface UserSubscribe {
//   login: string;
//   firstname: string;
//   lastname: string;
//   password: string;
//   roleName: string;
// }
