export function getProgramName(post) {
  const programName = getProgramType(post.category);
  const programNumber = String(post.programNumber)?.padStart(2, "0") ?? "XX";
  return `${programName} #${programNumber}`;
}

function getProgramType(category) {
  switch (category) {
    case "regular-show":
      return "Programa";
    case "session":
      return "Sesión";
    case "monograph":
      return "Monográfico";
    default:
      return "???";
  }
}
