import React from 'react'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import FavoriteIcon from '@material-ui/icons/Favorite'
import { useDispatch, useSelector } from 'react-redux'
import { actionCreators as likeActions } from '../redux/modules/like'
import { Text } from '../elements'

const Like = (props) => {
  const dispatch = useDispatch()
  const { like, dislike } = props
  const [myLike, setLike] = React.useState(false)
  const user_info = useSelector((state) => state.user)
  const like_data = useSelector((state) => state.like.like)
  // console.log(like_data)
  let like_user
  let likeCnt
  // list_data 중에서 props로 넘겨받은 post_id 값과 post_id가 일치하는 like_user 배열과 like_count를 변수에 저장
  for (let i = 0; i < like_data.length; i++) {
    if (like_data[i].postId === props.postId) {
      like_user = like_data[i].like_user
      likeCnt = like_data[i].like_count
    }
  }
  // console.log(like_count)
  const token = sessionStorage.getItem('token')

  let num = 0
  // like_user가 존재하고 user_info.user(현재로그인한사람)이 존재하는 경우에만 for문 돌림
  if (user_info.user && like_user) {
    // like_user에 자기자신이 있다면 num은 1
    for (let i = 0; i < like_user.length; i++) {
      if (like_user[i] === user_info.user.nickname) {
        num += 1
      }
    }
  }
  // num이 1보다 크거나 같다면 true 0이라면 false
  if (num >= 1 && !myLike) {
    setLike(true)
  } else if (num === 0 && myLike) {
    setLike(false)
  }

  // console.log(myLike)

  if (myLike) {
    return (
      <React.Fragment>
        <FavoriteIcon
          cursor="pointer"
          onClick={() => {
            dispatch(likeActions.changeLikeDB(props.postId, token))
          }}
          color="secondary"
          fontSize="large"
        />
        <Text margin="0px 0px 0px 4px">{likeCnt}</Text>
      </React.Fragment>
    )
  }
  return (
    <React.Fragment>
      <FavoriteBorderIcon
        cursor="pointer"
        onClick={() => {
          dispatch(likeActions.changeLikeDB(props.postId, token))
        }}
        fontSize="large"
      />
      <Text>{likeCnt}</Text>
    </React.Fragment>
  )
}

export default Like
