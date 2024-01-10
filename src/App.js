import { useEffect, useState } from "react";

import Header from "./components/Header";
import Main from "./components/Main";
import TextInput from "./components/TextInput";
import DateInput from "./components/DateInput";
import getAgeFrom from "./helpers/dateHelpers";
import getNewId from "./services/idServices";
import Timer from "./components/Timer";
import CheckBoxInput from "./components/CheckBoxInput";
import OnlineOffline from "./components/OnlineOffline";

export default function App() {
  console.log("Teste no console do navegador");

  const [name, setName] = useState("Rodrigo Cabral");
  const [birthDate, setBirthDate] = useState("1994-09-24");
  const [showTimer, setShowTimer] = useState(false);
  const [isOnline, setIsOnline] = useState(true);
  //setName has to be change after an event only
  function handleNameChange(newName) {
    //currentTarget is more accurate (element modified    )
    setName(newName);
  }
  function handleBirthDateChange(newBirthDate) {
    setBirthDate(newBirthDate);
  }

  function toggleShowTimer() {
    setShowTimer((currentShowTimer) => !currentShowTimer);
  }

  //sync the name typed to the title of the tab
  //useEffect = 1st param is a function
  //is used when react has no control
  //2nd param with an empty array executes only once the change
  useEffect(() => {
    document.title = name;
  }, [name]);

  useEffect(() => {
    //online X offline
    function toggleOnline() {
      setIsOnline(true);
    }

    function toggleOffline() {
      setIsOnline(false);
    }

    window.addEventListener("online", toggleOnline);
    window.addEventListener("offline", toggleOffline);

    return () => {
      window.removeEventListener("online", toggleOnline);
      window.removeEventListener("offline", toggleOffline);
    };
  }, []);

  return (
    <>
      <Header>React App</Header>

      <Main>
        {showTimer && (
          <div className="text-right mt-1">
            <Timer />
          </div>
        )}

        <OnlineOffline isOnline={isOnline} />

        <CheckBoxInput
          labelDescription="Show timer"
          onCheckboxChange={toggleShowTimer}
        />

        <TextInput
          id={getNewId()}
          labelDescription="Type your name: "
          inputValue={name}
          onInputChange={handleNameChange}
          autoFocus
        />

        <DateInput
          id={getNewId()}
          labelDescription="Type your birthday date: "
          inputValue={birthDate}
          onInputChange={handleBirthDateChange}
        />

        <p>
          O nome do usuário é {name}, contendo {name.length} characteres total e
          possui {getAgeFrom(birthDate)} anos.
        </p>
      </Main>
    </>
  );
}
