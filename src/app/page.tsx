import Header from "./components/header";
import Line from "./components/line";

export default function Home() {
  return (
    <>
    <Header titleText={"Wordle"}></Header>
    <div id="main-content" className="flex flex-col items-center p-8">
      <Line></Line>
      <Line></Line>
      <Line></Line>
      <Line></Line>
      <Line></Line>
    </div>

    </>

  );
}
