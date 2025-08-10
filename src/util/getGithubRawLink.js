export default function getGithubRawLink({ username, repoName, fileName, branch }) {
  return `https://raw.githubusercontent.com/${username}/${repoName}/${branch}/${fileName}`
}