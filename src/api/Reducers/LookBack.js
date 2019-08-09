
import { handleActions } from 'redux-actions'
import { FETCHING_STATUS } from 'utilities/constants'

const initialState = {
  data: {
    1: [
      {
        image: 'https://i.imgur.com/EFveKTi.png =50%x50%',
        text: '雖然無法再回到那美好的時光，但彼此相處過的點點滴滴，會化作珍貴的回憶存在你我的心中，謝謝你們一起參與今年的逐夢營，很開心結識了這麼多可愛的隊員，也希望你們在這營隊中能獲得追逐夢想的勇氣'
      },
      {
        image: 'https://i.imgur.com/somiv6r.jpg =50%x50%',
        text: '陌生的我們一起來到新的環境，開心又帶有一點尷尬的玩著團康遊戲，一邊擔心自己能不能跟大家好好相處，一邊期待接下來未知的旅程'
      },
    ],
    2: [
      {
        image: 'https://i.imgur.com/EFveKTi.png =50%x50%',
        text: '雖然無法再回到那美好的時光，但彼此相處過的點點滴滴，會化作珍貴的回憶存在你我的心中，謝謝你們一起參與今年的逐夢營，很開心結識了這麼多可愛的隊員，也希望你們在這營隊中能獲得追逐夢想的勇氣'
      },
      {
        image: 'https://i.imgur.com/somiv6r.jpg =50%x50%',
        text: '陌生的我們一起來到新的環境，開心又帶有一點尷尬的玩著團康遊戲，一邊擔心自己能不能跟大家好好相處，一邊期待接下來未知的旅程'
      },
    ]
  },
  status: FETCHING_STATUS.IDLE
}

export default handleActions({
  LOOK_BACK: {
  }
}, initialState)
