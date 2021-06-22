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

const setItemDetail = (state, info) => {
  state.item = info;
}

export { setNewsList, setAskList, setJobsList, setUserDetail, setItemDetail }