import { useEffect, useState } from "react";

interface Data {
  name: string;
}

export function Button() {
  const [data, setData] = useState([] as Data[]);

  const load = async () => {
    try {
      const response = await fetch("/test");
      const dto = (await response.json()) as {
        message: string;
        result: Data[];
      };

      console.log(dto);

      if (dto.result.length) {
        setData(dto.result);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = () => {
    void load();
  };

  useEffect(() => {
    console.log("effect: ", data);
  }, [data]);

  return (
    <div>
      <button onClick={() => handleClick()}>toggle</button>
      <ul>
        {data.map((d: Data) => {
          return <li>{d.name}</li>;
        })}
      </ul>
    </div>
  );
}
