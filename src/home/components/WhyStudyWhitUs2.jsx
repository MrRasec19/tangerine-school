export const WhyStudyWhitUs2 = () => {
    const cards = [
      { id: 1, title: "Gatito Curioso", img: "https://placekitten.com/300/200" },
      { id: 2, title: "Gatito Dormilón", img: "https://placekitten.com/301/200" },
      { id: 3, title: "Gatito Juguetón", img: "https://placekitten.com/302/200" },
      { id: 4, title: "Gatito Pensativo", img: "https://placekitten.com/303/200" },
      { id: 5, title: "Gatito Feliz", img: "https://placekitten.com/304/200" },
    ];
  
    return (
      <article className="bg-orange-thiny px-4 py-10">
        <h2 className="text-orange text-2xl sm:text-3xl md:text-3xl font-bold text-center mb-8">
            ¿Por qué estudiar con nosotros?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 xl:grid-rows-2 gap-6">
          {cards.map((card) => (
            <div key={card.id} className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col items-center row-span-111111111212121212121212121">
              <img src={'https://media.istockphoto.com/id/1443562748/es/foto/lindo-gato-de-jengibre.jpg?s=612x612&w=0&k=20&c=JVC5Z3LxpaTQaXu_fMZjIb73r39z6b0SnAxvNI8iZG0='} alt={card.title} className="w-full h-48 " />
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold">{card.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </article>
    );
  };
  