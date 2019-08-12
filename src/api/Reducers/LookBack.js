
import { handleActions } from 'redux-actions'
import { FETCHING_STATUS } from 'utilities/constants'

const initialState = {
  data: {
    1: [
      {
        url: 'https://i.imgur.com/somiv6r.jpg =50%x50%',
        text: '陌生的我們一起來到新的環境，開心又帶有一點尷尬的玩著團康遊戲，一邊擔心自己能不能跟大家好好相處，一邊期待接下來未知的旅程。',
        type: 'image'
      },
      {
        url: 'https://i.imgur.com/RxXgWXZ.jpg =50%x50%',
        text: '「我們都活在當下，哪管受傷，都是美好的荒唐」，一句句的歌詞深深的沁入心裡，沈浸在歡樂的營歌之中，也唱出對這個營隊的期許。',
        type: 'image'
      }
    ],
    2: [
      {
        url: 'https://www.youtube.com/embed/Et2D84qGHng',
        text: '早報',
        type: 'video'
      },
      {
        url: 'https://i.imgur.com/INzwIkn.jpg =50%x50%',
        text: '迷迷糊糊的被叫起床跳起開朗的早操，醒腦的過程中才逐漸露出笑容，新的一天也隨著活潑的音樂及揮灑的汗水拉起了序幕。',
        type: 'image'
      },
      {
        url: 'https://i.imgur.com/sz0mCil.jpg =50%x50%',
        text: '黃金之役的活動，讓大家在豐富有趣的訓練中，為了獲得金幣而一起努力著，不僅度過了歡樂充實的上午，也加深了彼此的感情。',
        type: 'image'
      }
    ]
  },
  status: FETCHING_STATUS.IDLE
}

export default handleActions({
  LOOK_BACK: {
    STORE: (state, action) => ({ ...state, data: action.payload }),
    SET_STATUS: (state, action) => ({ ...state, status: action.payload })
  }
}, initialState)
