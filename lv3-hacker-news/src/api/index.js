import axios from 'axios'

// HTTP Request & Response 관련설정
const config = {
  baseUrl: 'https://api.hnpwa.com/v0/',

}

// API 함수들을 정리
const getApiBy = (path) => {
  return `${config.baseUrl}${path}/1.json`;
}

const fetchNewsList = () => {
  return axios.get(getApiBy('news'))
} 

const fetchJobsList = () => {
  return axios.get(getApiBy('jobs'))
}

const fetchAskList = () => {
  return axios.get(getApiBy('ask'))
}

export { fetchNewsList, fetchJobsList, fetchAskList };