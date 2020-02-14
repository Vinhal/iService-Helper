/* eslint-disable prefer-promise-reject-errors */

const onResponseError = error => Promise.reject({ ...error })

export { onResponseError }
