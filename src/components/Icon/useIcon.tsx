import { useEffect, useState } from "react";
import { SvgrComponent } from "./Icon";

const loadSvgModule = (
  name: string
): Promise<{
  default: SvgrComponent;
} | null> => {
  try {
    return import(`./svgs/${name}.svg?react`);
  } catch (error) {
    throw new Error(`${name} 아이콘이 존재하지 않습니다.`);
  }
};

export const useIcon = (name: string) => {
  const [icon, setIcon] = useState<SvgrComponent | null>(null);

  useEffect(() => {
    const assignIcon = async () => {
      const module = await loadSvgModule(name);

      if (module && module.default) {
        setIcon(() => module.default);
      }
    };

    assignIcon();
  }, [name]);

  return { Icon: icon };
};
