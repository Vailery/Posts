import { ACTIONS } from "../constants";

export interface IPost {
  id: string;
  userId: string;
  body: string;
  title: string;
}

export interface IPostWithAuthor extends IPost {
  author: string;
}

export interface IPostState {
  posts: IPostWithAuthor[];
}

const defaultState: IPostState = {
  posts: [],
};

export const postsReducer = (state = defaultState, action: any) => {
  switch (action.type) {
    case ACTIONS.ADD_POSTS: {
      return { ...state, posts: action.posts };
    }

    default:
      return state;
  }
};
