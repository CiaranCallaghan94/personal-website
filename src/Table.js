import React, {Component} from 'react';

class Table extends Component {
  render(){
    const { projectData, removeProject } = this.props;

    return (
      <table>
        <TableHeader />
        <TableBody
          projectData={projectData}
          removeProject={removeProject}
        />
     </table>
    );
  }
}

const TableHeader = () => {
  return(
    <thead>
      <tr>
        <th>Project Name</th>
        <th>Tools</th>
        <th>Delete</th>
      </tr>
    </thead>
  );
}

const TableBody = props => {
  const rows = props.projectData.map((row, index) => {
    return(
      <tr key={index}>
        <td>{row.project}</td>
        <td>{row.tools}</td>
        <td><button onClick={()=> props.removeProject(index)}>Delete</button></td>
      </tr>
    );
  });

  return <tbody>{rows}</tbody>
}
export default Table;
