const steps = [
  { n: "01", title: "Discover", desc: "We analyze your business needs and goals" },
  { n: "02", title: "Strategy", desc: "Custom solutions designed for your success" },
  { n: "03", title: "Execute", desc: "Seamless implementation and optimization" },
];

const Process = () => {
  return (
    <section id="process" className="py-16">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold">How It Works</h2>
          <p className="text-muted-foreground mt-2">Our proven process ensures your success every step of the way</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((s) => (
            <div key={s.n} className="rounded-lg border bg-card p-6">
              <span className="text-5xl font-extrabold bg-gradient-to-r from-brand2 to-brand text-transparent bg-clip-text">{s.n}</span>
              <h3 className="mt-2 text-xl font-semibold">{s.title}</h3>
              <p className="text-muted-foreground mt-1 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
