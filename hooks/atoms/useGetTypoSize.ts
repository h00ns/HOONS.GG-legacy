import { TypoSize } from "@constants/atoms/Typography";
import { useMemo } from "react";

export const useGetTypoSize = (size:TypoSize): [number,string] => {
  const [fontWeight, fontSize] = useMemo(() => {
    switch (size) {
      case TypoSize.H1:
        return [800, '90px'];
      case TypoSize.H2:
        return [800, '66px'];
      case TypoSize.H3:
        return [700, '52px'];
      case TypoSize.H4:
        return [700, '40px'];
      case TypoSize.H5:
        return [700, '32px'];
      case TypoSize.H6:
        return [700, '28px', '46px'];
      case TypoSize.SH1:
        return [700, '24px'];
      case TypoSize.SH2:
        return [700, '20px'];
      case TypoSize.SH3:
        return [700, '16px'];
      case TypoSize.SH4:
        return [700, '14px'];
      case TypoSize.SH5:
        return [700, '12px'];
      case TypoSize.B1:
        return [400, '20px'];
      case TypoSize.B2:
        return [400, '18px'];
      case TypoSize.B3:
        return [400, '16px'];
      case TypoSize.B4:
        return [400, '14px'];
      case TypoSize.B5:
        return [400, '12px'];
        }
  }, [size])

  return [fontWeight,fontSize]
}