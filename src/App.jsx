const App = () => {
  const students = [
    { id: 1, name: "Akhilesh", course: "React", email: "akhilesh@gmail.com" },
    { id: 2, name: "Rahul", course: "Python", email: "rahul@gmail.com" },
    { id: 3, name: "Amit", course: "JavaScript", email: "amit@gmail.com" },
    { id: 4, name: "Priya", course: "Bootstrap", email: "priya@gmail.com" },
  ];

  return (
    <>
      <div className="container mt-5">
        <h3 className="text-center bg-primary text-white">Student Informaion</h3>

        <table className="table table-hover table-bordered">
          <thead className="table-dark">
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Course</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, i) => (
              <tr key={i}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.course}</td>
                <td>{student.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default App;
