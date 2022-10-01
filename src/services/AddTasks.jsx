let AddingTasks = async (e) => {
  e.preventDefault();

  let response = await fetch("http://127.0.0.1:8000/api/add-tasks/", {
    method: "POST",
    headers: {
      Authorization: "Bearer " + String(e.target._access.value),
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      _user: e.target._user_id.value,
      _title: e.target.title.value,
      _description: e.target.description.value,
      _income: e.target.income.value,
      _date: e.target.date.value,
      _time: e.target.time.value,
    }),
  });

  let data = await response.json();
  if (response.status === 201) {
    alert("successful");
    console.log(data);
  } else {
    alert("something went wrong");
  }
};

export default AddingTasks;
