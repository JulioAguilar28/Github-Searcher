export default function truncateText(text, textLimit) {
  if (text)
    return text.length > textLimit ? text.substring(0, textLimit) + '...' : text
}
