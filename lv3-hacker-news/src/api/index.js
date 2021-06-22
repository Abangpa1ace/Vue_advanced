import axios from 'axios'

// HTTP Request & Response 관련설정
const config = {
  baseUrl: 'https://api.hnpwa.com/v0/',
}

// API 함수들을 정리
const getListBy = (path) => {
  return `${config.baseUrl}${path}/1.json`;
}

const getDetailBy = (path, id) => {
  return `${config.baseUrl}${path}/${id}.json`;
}

const reqNewsList = () => {
  return axios.get(getListBy('news'))
} 

const reqJobsList = () => {
  return axios.get(getListBy('jobs'))
}

const reqAskList = () => {
  return axios.get(getListBy('ask'))
}

const reqUserDetail = (name) => {
  return axios.get(getDetailBy('user', name))
}

const reqItemDetail = (id) => {
  return axios.get(getDetailBy('item', id))
}

export { reqNewsList, reqJobsList, reqAskList, reqUserDetail, reqItemDetail };