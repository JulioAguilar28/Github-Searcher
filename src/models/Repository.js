function parse(repository) {
  return {
    id: repository.id,
    name: repository.name,
    fullName: repository.full_name,
    description: repository.description,
    language: repository.language,
    stars: repository.stargazers_count,
    forks: repository.forks
  }
}

export default {
  parse
}
