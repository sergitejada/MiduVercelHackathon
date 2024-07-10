import GiftForm from "../components/gift-form";
import Button from "../components/ui/button";
import Card from "../components/ui/card";

export default async function HomePage() {
  return (
    <div className="bg-blue-500 h-[500px]">
      <div className="relative mx-auto max-w-7xl flex ">
        <h1 className="text-6xl font-bold text-white max-w-[500px] leading-[72px] py-32">
          Sorprende a [Nombre del Destinatario] con el Regalo Ideal
        </h1>
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
