
import React from 'react'
import Layout from 'components/Layout'
import { CourseCard, CourseText } from 'components/Course'

class Course extends React.Component {
  render () {
    const courses = [
      {
        title: '程式語言 – Python',
        content: 'Python是相當簡易實用且容易上手的程式語言，舉凡影像處理、資料分析等方面都有廣泛應用。在這堂課中，我們學習Python的基本語法，體驗寫程式的感覺，並且為後面的幾堂課奠定基礎。',
        image: 'https://i.imgur.com/bJj4gQW.png'
      },
      {
        title: '網路爬蟲 – Web Crawler',
        content: '網路爬蟲是一種藉由程式獲取網頁資訊的技術，讓獲取網路資料變得更簡單便利，自動搶票就是一個爬蟲的例子。我們介紹了網頁原始碼，從簡單的網站上試著抓取文字和圖片，並在最後讓大家練習爬PTT的文章以及航海王漫畫。',
        image: 'https://i.imgur.com/KX6VPum.png'
      },
      {
        title: '遊戲設計 – Pygame',
        content: 'Pygame是Python一個專門製作遊戲的套件，簡化了許多開發遊戲的環節，讓初學者能快速上手。我們先從遊戲的畫面顯示下手，再利用動畫、事件的概念做出移動和滑鼠點擊等功能，一步步完成足球小遊戲。',
        'image': 'https://i.imgur.com/MKQUTuD.png'
      },
      {
        title: '人工智慧 – AI',
        content: '人工智慧是目前最夯的技術之一，利用程式讓機器表現出人的智慧，生活中也處處可見人工智慧的應用。這次最後也是最難的一堂課，讓大家學習做出2048 AI，運用人為定義的盤面分數，讓電腦判斷怎麼移動會產生更好的盤面，藉此玩出不錯的成績。',
        image: 'https://i.imgur.com/ICOMUeQ.png'
      }
    ]

    return (
      <Layout>
        <div className='row justify-content-center my-3'>
          {
            courses.map((course, index) => (
              <CourseCard
                key={index}
                title={course.title}
                content={course.content}
                image={course.image}
              />
            ))
          }
          <CourseText content='四天的課程學到了很多東西，不僅有爬蟲、遊戲等應用，還有現在最夯的AI技術，但程式世界博大精深，逐夢營的課程只是冰山一角，Python也只是眾多程式語言的其中一種，我們只能帶你們簡單介紹程式設計的基礎，剩下的就要你們自己去探索了。也許經過這次的課程你會覺得程式很好玩，也許你會覺得程式很無趣，無論如何都是一種收穫，我們這邊也把上課的內容和講義都提供給你們，有興趣的都可以再拿來複習。' />
        </div>
      </Layout>
    )
  }
}

export default Course
