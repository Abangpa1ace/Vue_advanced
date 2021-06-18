const setNewsList = (state, data) => {
  state.news = data
}

const setAskList = (state, data) => {
  state.asks = data;
}

const setJobsList = (state, data) => {
  state.jobs = data;
}

export { setNewsList, setAskList, setJobsList }