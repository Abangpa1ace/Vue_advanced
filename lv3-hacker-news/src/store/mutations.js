const setNewsList = (state, data) => {
  state.news = data
}

const setAskList = (state, data) => {
  state.asks = data;
}

const setJobsList = (state, data) => {
  state.jobs = data;
}

const setUserDetail = (state, info) => {
  state.user  = info;
}

export { setNewsList, setAskList, setJobsList, setUserDetail }