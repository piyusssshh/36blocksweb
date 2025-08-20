export default function GetIcons(icon, type) {
  switch (type) {
    case "hi":
      return require(`react-icons/hi`)[icon];
    case "md":
      return require(`react-icons/md`)[icon];
    default:
      return require(`react-icons/md`)[icon];
  }
}
