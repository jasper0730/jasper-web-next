import styles from "./ToDoList.module.sass";
import { Button } from "@/components/common/Buttons";

// const getToDoListData = async () => {
//     let datas = await fetch("https://swapi.dev/api/planets");
//     return datas.json();
//   }

export default async function ToDoList() {
  // const { datas } = await getToDoListData();
  // console.log(datas);

  return (
    <div className={styles.ToDoList}>
      <h2>ToDoList</h2>
      <div className={styles.Content}>
        <div className={styles.ListHeader}>
          <input type="text" placeholder="請輸入代辦事項" />
          <Button>
            <p>新增</p>
          </Button>
        </div>
        <div className={styles.ListContent}>
          <ul>
            <li>Todo 1</li>
            <li>Todo 2</li>
            <li>Todo 3</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
