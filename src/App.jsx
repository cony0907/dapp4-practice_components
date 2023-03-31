import A from "./components/A";
import B from "./components/B";
import C from "./components/C";

const App = () => {
  return (
    <div className="bg-red-100 min-h-screen flex flex-col justify-center items-center">
      <A />
      <B />
      <C />

      <div className="bg-yellow-100 w-full h-80">
       4
      </div>
    </div>
  );
};

export default App;
