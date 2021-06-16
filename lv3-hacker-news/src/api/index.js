import axios from 'axios'

// HTTP Request & Response 관련설정
const config = {
  baseUrl: 'https://api.hnpwa.com/v0/',

}

// API 함수들을 정리
const getApiBy = (path) => {
  return `${config.baseUrl}${path}/1.json`;
}

const reqNewsList = () => {
  return axios.get(getApiBy('news'))
} 

const reqJobsList = () => {
  return axios.get(getApiBy('jobs'))
}

const reqAskList = () => {
  return axios.get(getApiBy('ask'))
}

export { reqNewsList, reqJobsList, reqAskList };