import { reqNewsList, reqAskList, reqJobsList,  reqUserDetail, reqItemDetail } from '../api';

const fetchNewsList = ({ commit }) => {
  reqNewsList()
  .then(({ data }) => commit('setNewsList', data))
    .catch(err => console.log(err))
}

const fetchAskList = ({ commit }) => {
  reqAskList()
  .then(({ data }) => commit('setAskList', data))
    .catch(err => console.log(err))
}

const fetchJobsList = ({ commit }) => {
  reqJobsList()
  .then(({ data }) => commit('setJobsList', data))
  .catch(err => console.log(err))
}

const fetchUserDetail = ({ commit }, name) => {
  reqUserDetail(name)
    .then(({ data }) => commit('setUserDetail', data))
    .catch(err => console.log(err))
}

const fetchItemDetail = ({ commit }, id) => {
  reqItemDetail(id)
    .then(({ data }) => commit('setItemDetail', data))
    .catch(err => console.log(err))
}

export { fetchNewsList, fetchAskList, fetchJobsList, fetchUserDetail, fetchItemDetail }
