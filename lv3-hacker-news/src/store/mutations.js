const setAskList = (state, data) => {
  state.asks = data;
}

const setJobsList = (state, data) => {
  state.jobs = data;
}

export { setAskList, setJobsList }