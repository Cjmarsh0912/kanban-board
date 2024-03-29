type Props = {
  columnName: string;
  columnClassName: string;
};

export default function Header(props: Props) {
  const columnName = props.columnName;
  const columnClassName = props.columnClassName;
  return (
    <header>
      <div className={columnClassName}>
        <h2>{columnName}</h2>
      </div>
    </header>
  );
}
