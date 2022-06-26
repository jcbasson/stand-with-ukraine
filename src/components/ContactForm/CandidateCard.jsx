const CandidateCard = ({
  id,
  img,
  firstName,
  secondName,
  party,
  area,
  shouldEmail,
  onSelectDeselect,
}) => {
  const fullName = `${firstName} ${secondName}`;

  return (
    <div className="flex gap-4">
      <img src={img} alt={fullName} />
      <div className="flex flex-col height-full">
        <span className="font-bold text-l md:text-xl">{fullName}</span>
        <span className="text-[#84896c] text-sm">{party}</span>
        <span className=" text-sm">{area}</span>
        <input
          value={id}
          type="checkbox"
          checked={shouldEmail}
          className="input[type='checkbox'] mt-1"
          name={id}
          onChange={onSelectDeselect}
        />
      </div>
    </div>
  );
};

export default CandidateCard;
