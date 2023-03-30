import Header from "./components/Header";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  const personalDetails = {
    name: "Oualid Senina",
    location: "M'sila, DZ",
    tagline: "I'm a Mobile Developer",
    email: "walid.cena@gmail.com",
    availability: "Open for work",
    brand:
      "Flutter developer with experience in building cross-platform mobile applications using Dart and Flutter. Skilled in UI design, REST APIs, Firebase, and Git. Passionate about creating user-friendly and visually appealing apps that enhance the user experience",
  };

  return (
    <>
      <Header />
      <AnimatedRoutes personalDetails={personalDetails} />
    </>
  );
}

export default App;
