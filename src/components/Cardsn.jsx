const Cardsn = (props) => {
  return (
    <div className="bg-[#ffff] p-[20px] rounded-xl boder-[green] border-2">
      <div className="">
        <img src={props.image} alt="image" className="w-[full]" />
      </div>
      <h2 className="text-[#12ac8e]">{props.title}</h2>
      <p>{props.para}</p>
    </div>
  );
};

export default Cardsn;
