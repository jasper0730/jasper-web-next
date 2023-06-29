export default async function getData(url, lang) {
  const dataApiURL = `${process.env.NEXT_PUBLIC_API}/${url}?lang=${lang}`;
  const res = await fetch(dataApiURL);
  const { datas } = await res.json();

  return datas;
}
