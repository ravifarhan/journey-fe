export interface IJourney {
  id?: number;
  title?: string;
  description?: string;
  image?: string;
  user: IUser;
}

export interface IUser {
  id?: number;
  email?: string;
  fullname?: string;
}

// interface ILike {
//   threadId?: number;
//   userId?: number;
// }

// interface IThreadImage {
//   image?: string;
// }

// export interface IUser {
//   id: number;
//   fullname: string;
//   username: string;
//   email: string;
//   _count?: {
//     follower?: number;
//     following?: number;
//   };
//   profile: IProfile;
//   follower: IFollow[];
//   following: IFollow[];
// }

// interface IFollow {
//   followerId: number;
//   followingId: number;
// }

// export interface IProfile {
//   bio?: string;
//   avatar?: string;
//   cover?: string;
//   user: IUser;
// }

// export interface IFollows {
//   follower?: IUser;
//   following?: IUser;
// }
