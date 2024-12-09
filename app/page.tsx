import CardsContainer from "./components/CardsContainer";
export default function Home() {
  return (
    <div>
        <main>
            <div className="p-10 w-screen h-screen">
                <div className="w-full h-full ">
                    <CardsContainer data={{title:"Toy Story"}}/>
                </div>
            </div>
        </main>
    </div>
  );
}
