function Child({ userData }) {
  return (
    <div>
      <h2>Child Component</h2>

      <p>Name: {userData.name}</p>
      <p>Age: {userData.age}</p>
      <p>Course: {userData.course}</p>
    </div>
  );
}

export default Child;
