module.exports = class UnauthorizedError extends Error {
  constructor () {
    super('You do not have permission to access')
    this.name = 'UnauthorizedError'
  }
}
