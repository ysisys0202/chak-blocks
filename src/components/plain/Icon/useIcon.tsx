import { useEffect, useState } from "react";
import { IconProps, SvgrComponent } from "./Icon";
import { svgs } from "./index";

export const useIcon = (name: IconProps["name"]) => {
  const [icon, setIcon] = useState<SvgrComponent | null>(null);

  useEffect(() => {
    if (!svgs[name]) {
      console.error(`${name} 아이콘이 존재하지 않습니다.`);
    }
    setIcon(() => svgs[name]);
  }, [name]);

  return { Icon: icon };
};
