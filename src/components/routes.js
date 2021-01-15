export const repositories = {
  getByName(repositoryName) {
    return `/search/repositories?q=${repositoryName}&sort=stars&order=desc`
  }
}
