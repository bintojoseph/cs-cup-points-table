import { useEffect, useState} from 'react'
import { client } from "../../config";

export default function Test() {
    const [tabledata, setTabledata] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      const result = await client.fetch(
        `*[_type == "points"]{
            event,
            cs27,
            cs26,
            cs25,
            cs24,
            pg
          }`
      );
      setTabledata(result);
    };
    fetchdata();
  }, []);

  
  
  return (
    <div>
        <table>
        <thead>
          <tr>
            <th>Event Name</th>
            <th>CSE27</th>
            <th>CSE26</th>
            <th>CSE25</th>
            <th>CSE24</th>
            <th>PG</th>
          </tr>
        </thead>
        <tbody>
            {tabledata.map((item) => {
                return(
                <tr key={item.id}>
                    <td>{item.event}</td>
                    <td>{item.cs27}</td>
                    <td></td>
                </tr>
            )})}

        </tbody>
      </table>
    </div>
  )
}
