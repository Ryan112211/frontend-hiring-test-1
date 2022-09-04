export default function getcurrentindex(currentpage, limit, index) {
  return index + 1 + parseInt((currentpage - 1) * limit, 10);
}
