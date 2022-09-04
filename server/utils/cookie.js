function extract(req, delimiter) {
  const { cookie = '' } = req.headers

  if (cookie !== '') {
    return cookie.split(delimiter)[1]
  }
  return cookie
}

const cookie = {
  extract,
}

module.exports = cookie
