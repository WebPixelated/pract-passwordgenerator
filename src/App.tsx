import Footer from "./components/Footer";
import Header from "./components/Header";
import PasswordContainer from "./components/PasswordContainer";

function App() {
  return (
    <div className="min-h-dvh items-center flex flex-row justify-center bg-linear-to-tl from-sky-800 via-sky-900 to-sky-950 text-lg">
      <div className="min-w-[25vw] max-w-[97.5vw] lg:min-w-[500px] m-2 flex flex-col gap-6 justify-between sm:p-8 p-4 rounded-2xl rounded-tr-none rounded-bl-none bg-sky-50 shadow-md hover:shadow-xl transition-shadow">
        <Header />
        <PasswordContainer />
        <Footer />
      </div>
    </div>
  );
}
export default App;
