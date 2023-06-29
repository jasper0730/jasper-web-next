export default async function getToDoListData() {
  const res = await fetch("http://localhost:3001/api/blog");
  const { datas } = await res.json();
  return datas;
}
