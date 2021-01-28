import React from 'react';
import {gql} from 'apollo-boost';
import { exp } from 'react-native-reanimated';

export const typedef =gql`
type Comment{
  id   :   Int 
  text :   String
  createdAt:String
  updatedAt:String
  Post :   Post
  PostId :  Int
  User  :  User
  UserId : Int
}

type Post{
  id   :   Int 
  title  :  String
  text :   String
  createdAt:String
  updatedAt:String
  Comment :[Comment]
  UserId : Int
  User: User
  BoardId: Int
  Board: Board
}

type Board {
  id: Int
  type: Int
  Posts: [Post]
  }

`;

export const GET_CONTINENTS = gql`
    query{
        continents{
            code
            name
        }
    }
`;

export const  LOGIN = gql`
    mutation login($email: String!, $password: String!){
        login(email: $email, password: $password)
    }
`;

export const GET_USERID = gql`
    query findUserbyName($email: String!){
        findUserbyName(email: $email){
            id
            name
            grade
        }
    }
`;
export const GET_CONTINENT = gql`
query
  findContinent($code: ID!){
    continent(code: $code){
      name
    }
  }
`;

export const SEE_REGIST_LECTURE = gql`
query {
    seeRegistLecture{
        id
        name
        room
        classes{
            VOD
            startTime
            endTime
            week
        }
    }
}
`;

export const SEE_ALL_CLASSES = gql`
query find_classes($LectureId: Int, $week: Int){
    seeAllClasses(LectureId: $LectureId, week: $week){
        VOD
        startTime
        endTime
        LectureId
    }
}
`

export const SEE_ALL_POSTERS = gql`
query see_all($a: Int! ){
    seeAllPost(boardId: $a){
        title
        text
        id
        UserId


    }

}
`;

export const POST_VIEW = gql`
query post_view($pid: Int!){
    seeAllComment(postId: $pid){
      text
      id
      UserId
      createdAt
    }
}
`;

export const POST_UPLOAD = gql`
mutation upload($bid: Int!, $title:String!, $text:String!){
    createPost(BoardId:$bid ,title:$title , text: $text){
        title
        text
      }
}

`;

export const POST_DELETE = gql`
mutation postdelete($pid: Int!){
    deletePost(PostId:$pid){
      id
    }
  }

`;

export const POST_LOAD = gql `
query postload($bid: Int!, $snum: Int!, $tnum:Int!){
    loadPost(boardId:$bid, skipNum:$snum, takeNum:$tnum){
      id
      title
      text 
      UserId
      createdAt
      Comment{
        id
        text
        createdAt
        UserId
      }
  }
}

`;

export const COMMENT_UPLOAD = gql`
mutation commentcreate($pid:Int!, $text:String!){
    createComment(PostId:$pid ,text:$text){
      id
    }
    
  }


`;

export const COMMENT_DELETE = gql`
mutation deletecomment($cid : Int!){
    deleteComment(CommentId:$cid){
      id
    }
  }
`;


export const COMMENT_LOAD = gql`
query commentload($pid:Int!, $snum:Int!, $tnum:Int!){
  loadComment(postId:$pid , skipNum:$snum, takeNum:$tnum){
    text
    id
    UserId
    createdAt
  }
}



`;