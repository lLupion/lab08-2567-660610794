import Header from '../../Components/Header';
import TaskInput from '../../Components/TaskInput';
import Task from '../../Components/Task';
import Footer from '../../Components/Footer';




function App() {
  const tasks = [
    { id: 1, title: 'Read a book', isDone: true },
    { id: 2, title: 'Take a shower', isDone: false },
    { id: 3, title: 'Sleep', isDone: false }
  ];

  return (
    // Main container
    <div className="container mx-auto">
      {/* header section */}
      <Header/>
      {/* tasks container */}
      <div style={{ maxWidth: "400px" }} className="mx-auto">
        {/* task input */}
        <TaskInput/>
        {/* task */}
        <Task {...tasks[0]} />
        <Task {...tasks[1]} />
        <Task {...tasks[2]} />
      </div>

      {/* //footer section */}
      <Footer year = "2024" fullName = "Wichuda Rotna" studentId = "660610794" />
    </div>
  );
}

export default App;
