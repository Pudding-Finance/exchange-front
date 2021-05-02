import { useEffect, useState } from 'react'
// import debounce from 'debounce'

const nowInSeconds = () => Math.ceil(Date.now() / 1000)

const useCutDown = (endDate: Date) => {
  const endTime = endDate.getTime() / 1000
  const [currentTime, setCurrentTime] = useState(nowInSeconds())
  const remainTime = endTime - currentTime
  const seconds = Math.ceil(remainTime % 60)
  const minutes = Math.floor((remainTime % 3600) / 60)
  const hours = Math.floor((remainTime % (3600 * 24)) / 3600)
  const days = Math.floor(remainTime / (3600 * 24))

  const tick = () => {
    setCurrentTime(nowInSeconds())
  }

  useEffect(() => {
    // 执行定时
    const timerID = setInterval(() => tick(), 1000)
    // 卸载组件时进行清理
    return () => clearInterval(timerID)
  })

  return {
    remainTime,
    days,
    hours,
    minutes,
    seconds
  }
}

export default useCutDown
