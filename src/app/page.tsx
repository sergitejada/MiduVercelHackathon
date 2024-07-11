import GiftForm from "../components/gift-form";
import Button from "../components/ui/button";
import Card from "../components/ui/card";
import { FlipWords } from "../components/ui/flip-words";

const words = ["Padre", "Esposa", "Amigos", "Familia"];
export default async function HomePage() {
  return (
    <div className="bg-orange-200 h-[500px]">
      <div className="relative mx-auto max-w-7xl flex justify-center gap-10 pt-20">
        <div className="h-[40rem] flex justify-center items-center px-4">
          <div className="text-4xl mx-auto font-bold">
            Sorprende a tu
            <FlipWords words={words} /> <br />
            con el Regalo Ideal
          </div>
        </div>

        {/* <GiftForm /> */}
        <Card>
          <h1 className="text-6xl font-bold text-white>Generador de">AAAAAA</h1>
          <div className="w-36">
            <Button>Test</Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
