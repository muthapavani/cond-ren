import { People } from "../Data/people"

const Table =()=>{
    return(<>
      <div>Table</div>
      <table border={1} cellSpacing={0}>
        <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Age</th>
                <th>Occupation</th>
                <th>Email</th>
                <th>Address</th>
                <th>contact number</th>
            </tr>
        </thead>
        <tbody>
            {People.map((per,idx)=>(
               
                <tr key={idx}>
                    <td>{per.id ?per.id:"N/A"}</td>
                    <td>{per.name ? per.name:"N/A"}</td>
                    <td>{per.age?per.age:"N/A"}</td>
                    <td>{per.occupation?per.occupation:"N/A"}</td>
                    <td>{per.email? per.email:"N/A"}</td>
                    <td>{per.address?per.address:"N/A"}</td>
                    <td>{per.phno? per.phno:"N/A"}</td>
                </tr>
              
            ))}
        </tbody>
      </table>
    </>)
}
export default Table