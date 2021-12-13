import React from 'react'
import '../css/PostComment.css'
import UserNameTag from '../components/UserNameTag'
import { Grid, Image, Text } from '../elements'
import NavigateBeforeOutlinedIcon from '@mui/icons-material/NavigateBeforeOutlined'
import NearMeOutlinedIcon from '@mui/icons-material/NearMeOutlined'

const PostComment = () => {
  return (
    <>
      <div className="Background">
        <div className="CommetContainer">
          <div className="CommentHeader">
            <NavigateBeforeOutlinedIcon className="GoBackButton" />
            <Text size="25px" margin="10px 0 0 0" fontWeight="bold">
              댓글
            </Text>
            <NearMeOutlinedIcon className="CommentHeaderSendButton" />
          </div>
          <hr className="Contour" />
          <div className="DetailComment">
            <UserNameTag></UserNameTag>
            <Text margin="12px 0 0 15px">💜</Text>
          </div>
          <Text margin="10px 0px 10px 45px" size="13px" color="gray">
            31분 전
          </Text>
          <hr className="Contour" />
          <div className="PostCommentList">
            <UserNameTag></UserNameTag>
            <Text margin="16px 30px 0 10px">내용입니다</Text>
          </div>
          <div className="PostCommentList">
            <UserNameTag></UserNameTag>
            <Text margin="16px 30px 0 10px">댓글입니다</Text>
          </div>
          <div className="PostCommentList">
            <UserNameTag></UserNameTag>
            <Text margin="16px 30px 0 10px">내용입니다ㅁㄴㅇㄹㅁㄴㅇㄹㄴㅁㅇㄹ</Text>
          </div>
          <div className="PostCommentList">
            <UserNameTag></UserNameTag>
            <Text margin="16px 30px 0 10px">내용입니다</Text>
          </div>
          <div className="PostCommentList">
            <UserNameTag></UserNameTag>
            <Text margin="16px 30px 0 10px">내용입니다</Text>
          </div>
          <div className="PostCommentList">
            <UserNameTag></UserNameTag>
            <Text margin="16px 30px 0 10px">내용입니다ㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴㅇㄹ먀뇨ㅗㅇ리ㅏㅁ뉴ㅜㅇ래ㅏㅁ노애라ㅗ</Text>
          </div>
          <div className="PostCommentList">
            <UserNameTag></UserNameTag>
            <Text margin="16px 30px 0 10px">내용입니다ㅁㄴㅇㄹㄴㅇㄹ먀뇨ㅗㅇ리ㅏㅁ뉴ㅜㅇ래ㅏㅁ노애라ㅗ</Text>
          </div>
          <div className="PostCommentList">
            <UserNameTag></UserNameTag>
            <Text margin="16px 30px 0 10px">내용입니다ㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴㅇㄹ먀뇨ㅗㅇ리ㅏㅁ뉴ㅜㅇ래ㅏㅁ노애라ㅗ</Text>
          </div>
          <div className="PostCommentList">
            <UserNameTag></UserNameTag>
            <Text margin="16px 30px 0 10px">내용입니다ㅁㄴㄴㅇㄹㅁㄴㅇㄹㅁㄴㅇㄹ먀뇨ㅗㅇ리ㅏㅁ뉴ㅜㅇ래ㅏㅁ노애라ㅗ</Text>
          </div>
          <div className="PostCommentList">
            <UserNameTag></UserNameTag>
            <Text margin="16px 30px 0 10px">내용입니다ㅁㄴㅇㄹㅁㄴㅇㄹㅁㅏㅁ노애라ㅗ</Text>
          </div>
          <div className="PostCommentList">
            <UserNameTag></UserNameTag>
            <Text margin="16px 30px 0 10px">내용입니다ㅁㄴㅇㄹ먀뇨ㅗㅇ리ㅏㅁ뉴ㅜㅇ래ㅏㅁ노애라ㅗ</Text>
          </div>
          <div className="PostCommentList">
            <UserNameTag></UserNameTag>
            <Text margin="16px 30px 0 10px">내용입니다ㅁㄴㅇㄹㅁㄴㅁ뉴ㅜㅇ래ㅏㅁ노애라ㅗ</Text>
          </div>
          <div className="PostCommentList">
            <UserNameTag></UserNameTag>
            <Text margin="16px 30px 0 10px">내용입니다ㅁㄴㅇㄹㅁㄴㅇㅗㅇ리ㅏㅁ뉴ㅜㅇ래ㅏㅁ노애라ㅗ</Text>
          </div>
          <div className="AddCommentSection">
            <Image shape="circle"></Image>
            <input></input>
            <button className="AddCommentButton">게시</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default PostComment
