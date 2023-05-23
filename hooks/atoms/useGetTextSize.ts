import { TextSize } from "constants/atoms/TextSize";
import { useMemo } from "react";

export const useGetTextSize = (size:TextSize): [number,string] => {
  const [fontWeight, fontSize] = useMemo(() => {
    switch (size) {
      case TextSize.SH1:
        return [700, '24px'];
      case TextSize.SH2:
        return [700, '20px'];
      case TextSize.SH3:
        return [700, '16px'];
      case TextSize.SH4:
        return [700, '14px'];
      case TextSize.SH5:
        return [700, '12px'];
      case TextSize.B1:
        return [400, '20px'];
      case TextSize.B2:
        return [400, '18px'];
      case TextSize.B3:
        return [400, '16px'];
      case TextSize.B4:
        return [400, '14px'];
      case TextSize.B5:
        return [400, '12px'];
        }
  }, [size])

  return [fontWeight,fontSize]
}