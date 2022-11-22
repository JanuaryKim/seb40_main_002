import React, { Dispatch, SetStateAction } from 'react';
import Tag from '../../common/Tag';

interface Props {
  locations: Array<string>;
  selects: Array<boolean>;
  setSelects: Dispatch<SetStateAction<Array<boolean>>>;
  modalHandler: () => void;
  onlyTrue: Array<boolean>;
}

const SelectLocation = ({
  locations,
  selects,
  setSelects,
  modalHandler,
  onlyTrue,
}: Props) => {
  const handleSelect = (idx: number) => {
    const newSelects = selects.slice();
    if (onlyTrue.length > 2) {
      if (newSelects[idx]) {
        newSelects[idx] = !newSelects[idx];
        setSelects(newSelects);
      } else {
        alert('3개 이하로 설정해주세요');
      }
    } else {
      newSelects[idx] = !newSelects[idx];
      setSelects(newSelects);
    }
    console.log(onlyTrue);
  };

  const handleComplete = () => {
    modalHandler();
  };

  return (
    <>
      <div className="flex flex-wrap justify-center items-center w-[340px] h-fit border-solid border-2 border-borderline rounded-2xl py-2 absolute top-20 bg-white">
        <div className="text-lg font-medium w-fit mb-[20px]">
          장소를 선택해 주세요.
        </div>
        <div className="flex flex-wrap justify-center items-center mb-4">
          {locations.map((name: string, idx) => (
            <button key={name} onClick={() => handleSelect(idx)}>
              <Tag name={name} isSelected={selects[idx]} />
            </button>
          ))}
        </div>
        <button
          onClick={handleComplete}
          className="hover:bg-point-color hover:text-white w-32 rounded-[15px]"
        >
          선택 완료
        </button>
      </div>
    </>
  );
};

export default SelectLocation;
