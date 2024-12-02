import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent } from "../ui/card";

const Contactt = () => {
  return (
    <section className="py-19 2xl:py-[20px] bg-black">
      <div className="container mx-auto">
        <div className="flex flex-col lg:grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
          <div>
            <h1 className="text-white text-3xl mb-6">Contactez-nous</h1>
            <Card className="max-w-[600px] bg-black text-white">
              <CardContent className="p-5 xl:p-8">
                <h2 className="text-xl xl:text-2xl font-semibold mb-3 text-white">Support</h2>
                <p className="text-sm xl:text-base mb-5">
                  Si vous avez des questions ou rencontrez des problèmes avec notre script, notre équipe de support est disponible pour vous aider. 
                  Ils répondront aux demandes et fourniront un support limité via notre système de support dédié.
                </p>
                <Button asChild className="bg-red-500 text-white mt-5">
                  <Link href="https://codeshaperbd.freshdesk.com/support/login" target="_blank">
                    Obtenir de l'aide
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Formulaire de Contact */}
          <div>
            <Card className="max-w-[600px] bg-black text-white">
              <CardContent className="p-5 xl:p-8">
                <h2 className="text-xl xl:text-2xl font-semibold mb-3 text-white">Laissez-nous un message</h2>
                <form>
                  <div className="mb-4">
                    <label className="block text-white mb-1" htmlFor="name">Nom</label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Entrez votre nom"
                      className="w-full p-2 border border-gray-300 rounded bg-black text-white"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-white mb-1" htmlFor="email">Courriel</label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Entrez votre adresse e-mail*"
                      className="w-full p-2 border border-gray-300 rounded bg-black text-white"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-white mb-1" htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      placeholder="Laissez votre message ici..."
                      className="w-full p-2 border border-gray-300 rounded bg-black text-white"
                      rows="4"
                    ></textarea>
                  </div>
                  <Button className="bg-red-500 text-white">Envoyer</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contactt;
