import { reqAskList, reqJobsList } from '../api';

const fetchAskList = (context) => {
  console.log('asking~')
  reqAskList()
    .then(res => context.commit('setAskList', res.data))
    .catch(err => console.log(err))
}

const fetchJobsList = (context) => {
  reqJobsList()
  .then(res => context.commit('setJobsList', res.data))
  .catch(err => console.log(err))
}

export { fetchAskList, fetchJobsList }
