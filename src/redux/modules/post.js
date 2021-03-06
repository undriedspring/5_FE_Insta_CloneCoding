import { createAction, handleActions } from 'redux-actions'
import { produce } from 'immer'
import { getCookie } from '../../shared/Cookie'
import 'moment'
import 'moment/locale/ko'
import moment from 'moment'
//modules//
import { actionCreators as imageActions } from './image'
import { apis } from '../../shared/api'
import axios from 'axios'

//action types//
const GET_POST = 'GET_POST'
const ADD_POST = 'ADD_POST'
const EDIT_POST = 'EDIT_POST'
const DELETE_POST = 'DELETE_POST'
const LOADING = 'LOADING'

//actioncreators
const getPost = createAction(GET_POST, (postlist) => ({ postlist }))
const addPost = createAction(ADD_POST, (post) => ({ post }))
const editPost = createAction(EDIT_POST, (postId, newPost) => ({ postId, newPost }))
const deletePost = createAction(DELETE_POST, (postId) => ({ postId }))
const loading = createAction(LOADING, (is_loading) => ({ is_loading }))

//initialState//
const initialState = {
  list: [],
  paging: { state: null, next: null, size: 3 },
  is_laoding: false,
  preview: null,
}

const initialPost = [
  {
    postId: 1,
    userId: 1,
    nickname: 'dlwlrma',
    imgUrl: 'https://pbs.twimg.com/profile_images/1381421858151563264/-bjvX4Ui_400x400.jpg',
    content: '๐๐ผโโ๏ธ ๐',
    likeCnt: '104,282',
    commentCnt: '47,681',
    createAt: moment().fromNow(),
    updateAt: moment().fromNow(),
  },
  {
    postId: 2,
    userId: 2,
    nickname: 'ivestarship',
    imgUrl: 'https://img.wkorea.com/w/2021/12/style_61aad8bbd90fc.jpg',
    content: '5์กฐ ํ์ดํ๐๐ผโโ๏ธ ๐',
    likeCnt: '234,671',
    commentCnt: '102,134',
    createAt: moment().fromNow(),
    updateAt: moment().fromNow(),
  },
]

//middlewares//
const getPostDB = (start = null, size = 3) => {
  return async function (dispatch, getState, { history }) {
    // let _paging = getState().postlist.paging

    // console.log(_paging.start)

    // if (_paging.start && !_paging.next) {
    //   return
    // }
    // dispatch(loading(true))

    try {
      const postlist = await apis.postList()
      // console.log(postlist.data.postlist)
      dispatch(getPost(postlist.data.postlist))

      dispatch(imageActions.setPreview(null))
    } catch (error) {
      console.log('๊ฒ์๊ธ์ ๋ถ๋ฌ์ค๋๋ฐ ์คํจํ์ต๋๋ค.', error)
    }
  }
}

const addPostDB = (postlist) => {
  return async function (dispatch, getState, { history }) {
    const cookie = getCookie('authCookie')
    const user = getState().user.user

    try {
      const userId = getState().user.userId
      const nickname = getState().user.nickname
      const imgUrl = getState().image.preview
      const content = getState().post.content
      const likeCnt = getState().post.likeCnt
      const commentCnt = getState().post.likeCnt
      const createAt = getState().post.createAt
      const updateAt = getState().post.updateAt

      const _post = {
        ...initialPost,
        userId: userId,
        nickname: nickname,
        imgUrl: imgUrl,
        content: content,
        likeCnt: likeCnt,
        commentCnt: commentCnt,
        createAt: createAt,
        updateAt: updateAt,
      }

      let form = new FormData()
      form.append('content', postlist.content)
      form.append('file', postlist.image)

      const headers = {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Access-Control-Allow-Origin': '*',
          Authorization: cookie,
        },
        withCredentials: true,
      }
      axios
        .post(`http://13.125.149.78/api/postlist`, form, { headers: headers })

        .then((response) => {
          console.log(response)
          const postlist = {
            ...user,
          }
          dispatch(addPost(response.data.postlist))
          dispatch(imageActions.setPreview(null))
        })
        .catch((error) => {
          console.log('๊ฒ์๊ธ ์์ฑ์ ๋ฌธ์?๊ฐ ๋ฐ์ํ์ต๋๋ค.', error)
        })
        .then(() => {
          history.replace('/main')
        })
    } catch (err) {
      console.error('๊ฒ์๋ฌผ ์๋ก๋ ๋ฌธ์? ๋ฐ์', err)
    }
  }
}

const editPostDB = (postId, imgUrl, newPost) => {
  return async function (dispatch, getState, { history }) {
    if (!postId) {
      console.log('๊ฒ์๋ฌผ ์?๋ณด๊ฐ ์์ต๋๋ค.')
      return
    }
    apis
      .editPost(postId, newPost)
      .then(() => {
        dispatch(editPost(postId, newPost))
      })
      .catch((error) => {
        console.log('๊ฒ์๊ธ ์์?์ ๋ฌธ์?๊ฐ ๋ฐ์ํ์ต๋๋ค.', error)
      })
      .then(() => {
        history.replace('/main')
      })
  }
}

const deletePostDB = (postId) => {
  return async function (dispatch, getState, { history }) {
    if (!postId) {
      console.log('๊ฒ์๋ฌผ ์?๋ณด๊ฐ ์์ต๋๋ค.')
      return
    }
    apis
      .deletePost(postId)
      .then(() => {
        dispatch(deletePost(postId))
      })
      .catch((error) => {
        console.log('๊ฒ์๊ธ ์ญ์?์ ์คํจํ์ต๋๋ค.', error)
      })
      .then(() => {
        window.location.reload()
      })
  }
}

//reducer//
export default handleActions(
  {
    [GET_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.postlist

        if (action.payload.paging) {
          draft.paging = action.payload.paging
        }
        draft.is_loading = false
      }),
    [ADD_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list.unshift(action.payload.post)
      }),
    [EDIT_POST]: (state, action) =>
      produce(state, (draft) => {
        let idx = draft.list.findIndex((p) => p.id === action.payload.postId)
        draft.list[idx] = { ...draft.list[idx], ...action.payload.newContents }
      }),
    [DELETE_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list.filter((p) => p.id !== action.payload.postId)
      }),
    [LOADING]: (state, action) =>
      produce(state, (draft) => {
        draft.is_laoding = action.payload.is_loading
      }),
  },
  initialState
)

//actioncreators export
const actionCreators = {
  getPost,
  getPostDB,
  addPost,
  addPostDB,
  editPost,
  editPostDB,
  deletePost,
  deletePostDB,
  loading,
}

export { actionCreators }
