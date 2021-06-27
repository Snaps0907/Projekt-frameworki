import React, {FC} from "react";
import { MainPage } from "./components/MainPage/MainPage";

export interface INumber {
    id: number;
  }

const App: FC = () => {
  const INumber =1;

    return (
        <MainPage id={INumber}/>
    )
};

export default App;