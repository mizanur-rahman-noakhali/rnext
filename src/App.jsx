import Avatar from "./assets/components/Avatar";
import Profile from "./assets/components/Profile";

export default function App() {
  // const person = "Tamim";
  // const size = 38;
  // const age = 42;
  return (
    <div>
      <div>
        {/* <Profile person={person} size={size} age={age} /> */}
        <Profile>
          <Avatar />
        </Profile>
      </div>
    </div>
  );
}
