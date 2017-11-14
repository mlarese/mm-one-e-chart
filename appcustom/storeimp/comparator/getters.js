export const getters = {
  comparationDone: state => state.progressPercent === 100,
  progressPercent: state => state.progressPercent
}
