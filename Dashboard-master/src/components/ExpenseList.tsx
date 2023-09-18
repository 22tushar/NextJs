import "bootstrap/dist/css/bootstrap.css";
interface Data {
  id: number;
  date: string;
  hours: number;
  person: string;
}
interface Props {
  datas: Data[];
  onDelete: (id: number) => void;
}
const ExpenseList = ({ datas, onDelete }: Props) => {
  if (datas.length === 0) return null;
  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>Date</th>
          <th>Hours Spent</th>
          <th>Pesrson Name</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {datas.map((data) => (
          <tr key={data.id}>
            <td>{data.date}</td>
            <td>{data.hours}</td>
            <td>{data.person}</td>
            <td>
              <button
                onClick={() => onDelete(data.id)}
                className="btn btn-outline-danger"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td>Total</td>
          <td>{datas.reduce((acc, data) => data.hours + acc, 0)}</td>
          <td></td>
          <td></td>
        </tr>
      </tfoot>
    </table>
  );
};

export default ExpenseList;
